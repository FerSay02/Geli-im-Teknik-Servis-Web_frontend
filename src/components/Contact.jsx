import { Clock, Mail, MapPin, Phone, Send, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { company, contactSection, legalNotice, serviceAreas } from '../data/siteData.js';
import { trackConversion } from '../lib/tracking.js';
import SectionHeading from './SectionHeading.jsx';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '9e7f10c9-ad4b-48de-89c2-fab2c6568ade';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  district: '',
  serviceType: '',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setSuccess('');
    setSubmitError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Ad soyad gereklidir.';
    if (!form.phone.trim()) nextErrors.phone = 'Telefon gereklidir.';
    if (!form.serviceType) nextErrors.serviceType = 'Servis türü seçiniz.';
    if (!form.district) nextErrors.district = 'Servis bölgesi seçiniz.';
    if (!form.message.trim()) nextErrors.message = 'Arıza açıklaması gereklidir.';

    setErrors(nextErrors);
    setSuccess('');
    setSubmitError('');

    if (Object.keys(nextErrors).length > 0) return;

    trackConversion('lead_form_submit_attempt', {
      service_type: form.serviceType,
      district: form.district,
    });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY;
    const errorMessage = 'Talebiniz gönderilemedi. Lütfen telefon veya WhatsApp üzerinden iletişime geçin.';
    console.info('Web3Forms access key status.', {
      hasEnvKey: Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY),
      usingFallbackKey: !import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      keyLength: accessKey.length,
    });

    if (!accessKey) {
      console.error('Web3Forms access key is missing. Check VITE_WEB3FORMS_ACCESS_KEY in the deployment environment.');
      setSubmitError(errorMessage);
      return;
    }

    const leadName = form.name.trim();
    const leadPhone = form.phone.trim();
    const leadEmail = form.email.trim();
    const leadDistrict = form.district;
    const leadServiceType = form.serviceType;
    const leadMessage = form.message.trim();
    const submittedAt = new Intl.DateTimeFormat('tr-TR', {
      dateStyle: 'long',
      timeStyle: 'short',
      timeZone: 'Europe/Istanbul',
    }).format(new Date());
    const formattedMessage = [
      'YENİ SERVİS TALEBİ',
      'Gelişim Teknik web sitesi üzerinden yeni bir servis talebi oluşturuldu.',
      '',
      'MÜŞTERİ BİLGİLERİ',
      `Ad Soyad: ${leadName}`,
      `Telefon: ${leadPhone}`,
      `E-posta: ${leadEmail || 'Belirtilmedi'}`,
      '',
      'SERVİS BİLGİLERİ',
      `Servis Bölgesi: ${leadDistrict}`,
      `Servis Türü: ${leadServiceType}`,
      `Talep Tarihi: ${submittedAt}`,
      '',
      'ARIZA AÇIKLAMASI',
      leadMessage,
      '',
      'ÖNERİLEN AKSİYON',
      'Müşteri telefon veya e-posta üzerinden hızlıca aranarak randevu planlanmalıdır.',
    ].join('\n');
    const payload = {
      access_key: accessKey,
      subject: `Yeni Servis Talebi | ${leadServiceType} | ${leadDistrict}`,
      from_name: 'Gelişim Teknik Web Sitesi',
      name: leadName,
      phone: leadPhone,
      email: leadEmail,
      district: leadDistrict,
      serviceType: leadServiceType,
      message: formattedMessage,
      'Talep Durumu': 'Yeni Talep',
      'Talep Tarihi': submittedAt,
      'Ad Soyad': leadName,
      'Telefon': leadPhone,
      'E-posta': leadEmail || 'Belirtilmedi',
      'Servis Bölgesi': leadDistrict,
      'Servis Türü': leadServiceType,
      'Arıza Açıklaması': leadMessage,
    };

    if (leadEmail) {
      payload.replyto = leadEmail;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      let result = null;

      try {
        result = await response.json();
      } catch (parseError) {
        console.error('Web3Forms response could not be parsed as JSON.', {
          status: response.status,
          statusText: response.statusText,
          error: parseError,
        });
        setSubmitError(errorMessage);
        return;
      }

      if (!response.ok || !result.success) {
        console.error('Web3Forms submission failed.', {
          status: response.status,
          statusText: response.statusText,
          result,
        });
        setSubmitError(errorMessage);
        return;
      }
      trackConversion('lead_form_success', {
        service_type: form.serviceType,
        district: form.district,
      });
      trackConversion('lead_form_submit', {
        service_type: form.serviceType,
        district: form.district,
        form_location: 'contact_form',
      });
      setSuccess(contactSection.successMessage);
      setForm(initialForm);
    } catch (error) {
      console.error('Web3Forms request failed.', error);
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" className="section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={contactSection.subtitle} subtitle={contactSection.title} description={contactSection.description} />

        <div className="mt-7 grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="contact-panel">
            <h3 className="text-2xl font-black text-ink">Hızlı iletişim</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
              En hızlı dönüş için telefon veya WhatsApp bilgilerinizi kullanabilirsiniz.
            </p>
            <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-bold leading-6 text-amber-900">
              {legalNotice}
            </p>

            <div className="mt-5 space-y-3">
              <ContactRow icon={Phone} label="Telefon" value={company.phone} href={company.telHref} eventName="phone_click" />
              <ContactRow icon={Smartphone} label="WhatsApp" value={company.mobile} href={company.whatsappHref} eventName="whatsapp_click" />
              <ContactRow icon={Clock} label="Çalışma Saatleri" value={company.hours} />
              <ContactRow icon={MapPin} label="Servis Bölgeleri" value="Bornova, Bayraklı, Karşıyaka, Konak, Buca" />
              <ContactRow icon={Mail} label="E-posta" value={company.email} href={`mailto:${company.email}`} />
            </div>
          </div>

          <form className="contact-panel border-brand-100 shadow-soft" onSubmit={handleSubmit} noValidate>
            <p className="mb-5 rounded-md border border-brand-100 bg-brand-50 px-4 py-3 text-sm font-black leading-6 text-brand-900">
              Acil servis için en hızlı yöntem telefon veya WhatsApp'tır.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Ad Soyad *" error={errors.name}>
                <input value={form.name} onChange={(event) => updateField('name', event.target.value)} type="text" placeholder="Adınız ve soyadınız" autoComplete="name" />
              </Field>
              <Field label="Telefon *" error={errors.phone}>
                <input value={form.phone} onChange={(event) => updateField('phone', event.target.value)} type="tel" placeholder="05xx xxx xx xx" autoComplete="tel" />
              </Field>
              <Field label="Servis Bölgesi *" error={errors.district}>
                <select value={form.district} onChange={(event) => updateField('district', event.target.value)}>
                  <option value="">Bölge seçiniz</option>
                  {serviceAreas.map((area) => (
                    <option key={area.district} value={area.district}>
                      {area.district}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Servis Türü *" error={errors.serviceType}>
                <select value={form.serviceType} onChange={(event) => updateField('serviceType', event.target.value)}>
                  <option value="">Servis türü seçiniz</option>
                  {contactSection.serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="E-posta" className="sm:col-span-2">
                <input value={form.email} onChange={(event) => updateField('email', event.target.value)} type="email" placeholder="ornek@mail.com" autoComplete="email" />
              </Field>
            </div>

            <Field label="Arıza Açıklaması *" error={errors.message} className="mt-5">
              <textarea
                value={form.message}
                onChange={(event) => updateField('message', event.target.value.slice(0, 500))}
                placeholder="Cihaz türü, marka/model ve arızayı kısaca yazın"
                rows="5"
                maxLength="500"
              />
              <span className="mt-2 block text-right text-xs font-semibold text-slate-500">{form.message.length}/500</span>
            </Field>

            {success && <p className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">{success}</p>}
            {submitError && <p className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{submitError}</p>}

            <button className="btn btn-accent mt-6 w-full justify-center shadow-lg disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={isSubmitting}>
              <Send size={19} />
              {isSubmitting ? 'Gönderiliyor...' : 'Servis Talebi Gönder'}
            </button>
          </form>
        </div>

        <div className="contact-panel mt-5 overflow-hidden p-0">
          <div className="px-5 py-5 sm:px-7">
            <h3 className="text-2xl font-black text-ink">Gelişim Teknik - İzmir Bornova Özel Teknik Servis</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
              Yeşilova, Bornova / İzmir adresinden Bornova, Bayraklı, Karşıyaka, Konak ve Buca bölgelerine servis planlanır.
            </p>
          </div>
          <iframe
            className="h-72 w-full sm:h-80 lg:h-96"
            src="https://www.google.com/maps?q=Geli%C5%9Fim%20Teknik%20-%20%C4%B0zmir%20Bornova%20%C3%96zel%20Teknik%20Servis&output=embed"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gelişim Teknik - İzmir Bornova Özel Teknik Servis"
          />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, eventName }) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-800">
        <Icon size={21} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">{label}</span>
        <span className="mt-1 block break-words text-sm font-extrabold text-ink">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        className="contact-row"
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        onClick={() => eventName && trackConversion(eventName, { location: 'contact_row' })}
      >
        {content}
      </a>
    );
  }

  return <div className="contact-row">{content}</div>;
}

function Field({ label, error, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-black text-ink">{label}</span>
      {children}
      {error && <span className="mt-2 block text-xs font-bold text-red-600">{error}</span>}
    </label>
  );
}

export default Contact;
