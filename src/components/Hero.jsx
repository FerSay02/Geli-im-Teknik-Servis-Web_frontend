import { CheckCircle2, Phone, ShieldCheck, Wrench } from 'lucide-react';
import { company, hero, services } from '../data/siteData.js';
import { trackConversion } from '../lib/tracking.js';
import WhatsAppLogo from './WhatsAppLogo.jsx';

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-brand-950 pt-20 text-white lg:pt-24">
      <div className="absolute inset-0 hero-pattern" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-8 pt-8 sm:px-6 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1fr_0.86fr] lg:gap-12 lg:px-8 lg:py-12">
        <div className="hero-copy max-w-3xl min-w-0">
          <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs font-black text-blue-50 ring-1 ring-white/15 sm:text-sm">
            <Wrench size={16} />
            {hero.eyebrow}
          </p>

          <h1 className="break-words text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.04]">
            {hero.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-blue-50 sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 sm:max-w-xl">
            <a
              className="btn btn-accent btn-xl w-full"
              href={company.telHref}
              onClick={() => trackConversion('phone_click', { location: 'hero' })}
            >
              <Phone size={21} />
              Hemen Ara
            </a>
            <a
              className="btn btn-whatsapp btn-xl w-full"
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackConversion('whatsapp_click', { location: 'hero' })}
            >
              <WhatsAppLogo />
              WhatsApp Destek
            </a>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {hero.badges.map((badge) => (
              <span key={badge} className="inline-flex min-w-0 items-center gap-2 rounded-md bg-white/10 px-3 py-3 text-sm font-extrabold text-blue-50 ring-1 ring-white/15">
                <CheckCircle2 size={18} className="shrink-0 text-emerald-300" />
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:max-w-lg">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-md bg-white p-4 text-ink shadow-card">
                <strong className="block text-2xl font-black text-brand-900">{stat.value}</strong>
                <span className="mt-1 block text-xs font-bold leading-5 text-slate-700">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual min-w-0">
          <div className="overflow-hidden rounded-md bg-white shadow-hero ring-1 ring-white/15">
            <img
              className="aspect-[4/3] w-full object-cover object-center lg:aspect-[5/6]"
              src="/hero-service.png"
              alt="İzmir Bornova teknik servis ekibi beyaz eşya arızası kontrol ediyor"
              width="760"
              height="912"
              fetchPriority="high"
            />
            <div className="grid grid-cols-2 gap-px bg-slate-200">
              {hero.trustBadges.map((badge) => (
                <div key={badge} className="flex min-h-16 items-center gap-2 bg-white px-3 py-3 text-sm font-black text-brand-900">
                  <ShieldCheck size={18} className="shrink-0 text-emerald-600" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-md bg-white p-4 text-ink shadow-card">
            <p className="text-sm font-black uppercase tracking-wide text-brand-800">En çok talep edilen servisler</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {services.map((service) => (
                <a key={service.title} className="rounded-md bg-slate-100 px-3 py-2 text-xs font-black text-slate-800 transition hover:bg-brand-50 hover:text-brand-900" href="#hizmetler">
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
