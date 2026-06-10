import { Mail, MapPin, Phone, Send, Smartphone, Timer } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';
import WhatsAppLogo from './WhatsAppLogo.jsx';
import { company, contactSection } from '../data/siteData.js';
import { isSupabaseConfigured, supabase } from '../lib/supabase.js';

const initialForm = {
  name: '',
  phone: '',
  email: '',
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
    if (!form.serviceType) nextErrors.serviceType = 'Servis tÃ¼rÃ¼ seÃ§iniz.';
    if (!form.message.trim()) nextErrors.message = 'ArÄ±za aÃ§Ä±klamasÄ± gereklidir.';

    setErrors(nextErrors);
    setSuccess('');
    setSubmitError('');

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      setSubmitError('Servis talep sistemi henÃ¼z yapÄ±landÄ±rÄ±lmadÄ±. LÃ¼tfen telefon veya WhatsApp Ã¼zerinden iletiÅŸime geÃ§in.');
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('service_requests').insert({
        full_name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        service_type: form.serviceType,
        message: form.message.trim(),
      });

      if (error) {
        setSubmitError('Talebiniz gÃ¶nderilirken bir sorun oluÅŸtu. LÃ¼tfen daha sonra tekrar deneyin veya telefonla bize ulaÅŸÄ±n.');
        return;
      }

      setSuccess(contactSection.successMessage);
      setForm(initialForm);
    } catch {
      setSubmitError('Talebiniz gÃ¶nderilirken bir sorun oluÅŸtu. LÃ¼tfen daha sonra tekrar deneyin veya telefonla bize ulaÅŸÄ±n.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" className="section bg-gradient-to-b from-white via-brand-50 to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Servis talebi oluşturun"
          subtitle={contactSection.title}
          description="Telefon, WhatsApp veya form üzerinden bize ulaşın. Ekibimiz en kısa sürede sizinle iletişime geçecektir."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="contact-panel">
            <h3 className="text-2xl font-black text-ink">Hızlı iletişim</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
              Acil servis ihtiyaçlarınız için tek dokunuşla telefon veya WhatsApp üzerinden bize ulaşabilirsiniz.
            </p>

            <div className="mt-7 space-y-4">
              <ContactRow icon={Phone} label="Telefon" value={company.phone} href={company.telHref} />
              <ContactRow icon={Smartphone} label="Mobil / WhatsApp" value={company.mobile} href={company.whatsappHref} />
              <ContactRow icon={Mail} label="E-posta" value={company.email} href={`mailto:${company.email}`} />
              <ContactRow icon={MapPin} label="Adres" value={company.address} />
              <ContactRow icon={Timer} label="Çalışma Saatleri" value={company.hours} />
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a className="btn btn-primary justify-center" href={company.telHref}>
                <Phone size={19} />
                Telefon Et
              </a>
              <a className="btn btn-whatsapp justify-center" href={company.whatsappHref} target="_blank" rel="noreferrer">
                <WhatsAppLogo />
                WhatsApp
              </a>
            </div>
          </div>

          <form className="contact-panel border-brand-100 shadow-soft" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Ad Soyad *" error={errors.name}>
                <input value={form.name} onChange={(event) => updateField('name', event.target.value)} type="text" placeholder="Adınız ve soyadınız" />
              </Field>
              <Field label="Telefon *" error={errors.phone}>
                <input value={form.phone} onChange={(event) => updateField('phone', event.target.value)} type="tel" placeholder="05xx xxx xx xx" />
              </Field>
              <Field label="E-posta">
                <input value={form.email} onChange={(event) => updateField('email', event.target.value)} type="email" placeholder="ornek@mail.com" />
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
            </div>

            <Field label="Arıza Açıklaması *" error={errors.message} className="mt-5">
              <textarea
                value={form.message}
                onChange={(event) => updateField('message', event.target.value.slice(0, 500))}
                placeholder="Cihazınızda yaşadığınız arızayı kısaca anlatın"
                rows="6"
                maxLength="500"
              />
              <span className="mt-2 block text-right text-xs font-semibold text-slate-500">{form.message.length}/500</span>
            </Field>

            {success && (
              <p className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 shadow-sm">
                {success}
              </p>
            )}

            {submitError && (
              <p className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700 shadow-sm">
                {submitError}
              </p>
            )}

            <button className="btn btn-accent mt-6 w-full justify-center shadow-lg hover:shadow-card disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={isSubmitting}>
              <Send size={19} />
              {isSubmitting ? 'Gönderiliyor...' : 'Talebi Gönder'}
            </button>
          </form>
        </div>

        <div className="contact-panel mt-6 overflow-hidden p-0">
          <div className="px-5 py-5 sm:px-7">
            <h3 className="text-2xl font-black text-ink">Konumumuz</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
              Yeşilova, Bornova / İzmir adresimizden İzmir geneline teknik servis desteği sağlıyoruz.
            </p>
          </div>
          <iframe
            className="h-72 w-full sm:h-80 lg:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.238782539995!2d27.204723075517247!3d38.43595317380006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b962ea7b634809%3A0xf129ad11dfe1cc4d!2sVestel%20Yetkili%20Servisi%20-%20Bornova%20-%20Geli%C5%9Fim%20Teknik!5e0!3m2!1str!2str!4v1780469470501!5m2!1str!2str"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gelişim Teknik Servis Konum Haritası"
          />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
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
      <a className="contact-row" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
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
