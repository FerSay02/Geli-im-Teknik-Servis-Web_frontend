import { ShieldCheck, Timer, Wrench } from 'lucide-react';
import { faqs } from '../data/siteData.js';
import SectionHeading from './SectionHeading.jsx';

const timelineSteps = ['Talep Alınır', 'Arıza Tespiti', 'Onay Verilir', 'Tamir Yapılır'];

function ConversionSections() {
  return (
    <>
      <section id="surec" className="section bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Hizmet Süreci"
            subtitle="Hızlı servis akışı"
            description="Servis talebinden tamire kadar süreç kısa, net ve onayınıza bağlı ilerler."
          />

          <ol className="mt-7 grid gap-3 sm:grid-cols-4">
            {timelineSteps.map((step, index) => (
              <li key={step} className="relative flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm sm:block sm:text-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-900 text-sm font-black text-white sm:mx-auto">
                  {index + 1}
                </span>
                <strong className="text-sm font-black text-ink sm:mt-3 sm:block">{step}</strong>
                {index < timelineSteps.length - 1 && (
                  <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-lg font-black text-brand-700 sm:block">→</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="garanti" className="bg-brand-950 py-7 text-white sm:py-9">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-emerald-300">Garanti bilgileri</p>
            <h2 className="mt-2 text-2xl font-black leading-tight sm:text-4xl">1 Yıl İşçilik Garantisi</h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-blue-50">
              Yapılan işçilik için 1 yıl garanti sunarız. Parça değişimi gerektiğinde işlem öncesi bilgi verir, onayınız olmadan ilerlemeyiz.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <Badge icon={ShieldCheck} title="Garantili İşçilik" />
            <Badge icon={Timer} title="Aynı Gün Servis" />
            <Badge icon={Wrench} title="Yerinde Arıza Tespiti" />
          </div>
        </div>
      </section>

      <section id="sss" className="section bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sık Sorulan Sorular"
            subtitle="Servis öncesi"
            description="Randevu oluşturmadan önce en sık gelen soruları kısa ve net şekilde yanıtladık."
          />
          <div className="mt-7 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer text-base font-black text-ink">{faq.question}</summary>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Badge({ icon: Icon, title }) {
  return (
    <div className="rounded-md bg-white/10 p-4 ring-1 ring-white/15">
      <Icon size={24} className="text-emerald-300" />
      <strong className="mt-3 block text-sm font-black sm:text-base">{title}</strong>
    </div>
  );
}

export default ConversionSections;
