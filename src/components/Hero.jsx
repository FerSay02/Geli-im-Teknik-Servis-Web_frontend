import { CheckCircle2, ChevronsDown, Phone } from 'lucide-react';
import { company, hero } from '../data/siteData.js';
import WhatsAppLogo from './WhatsAppLogo.jsx';

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-brand-950 pt-24 text-white">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-600/25 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-7xl items-start gap-10 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-16 lg:pt-10">
        <div className="hero-copy max-w-3xl">
          <p className="mb-4 inline-flex rounded-md bg-white/12 px-3 py-2 text-sm font-black text-emerald-100 ring-1 ring-white/20">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl">{hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-blue-50">{hero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-accent btn-xl" href={company.telHref}>
              <Phone size={20} />
              Hemen Ara
            </a>
            <a className="btn btn-whatsapp btn-xl" href={company.whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppLogo />
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {hero.badges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 text-sm font-black text-white ring-1 ring-white/20">
                <CheckCircle2 size={17} className="text-red-300" />
                {badge}
              </span>
            ))}
          </div>

          <a
            className="hidden"
            href="#hizmetler"
            aria-label="Hizmetlerimize kaydır"
          >
            <ChevronsDown className="animate-bounce" size={30} />
          </a>
        </div>

        <div className="hero-visual lg:-mr-10 xl:-mr-16">
          <div className="relative rounded-md bg-white/10 p-3 shadow-hero ring-1 ring-white/20 backdrop-blur transition duration-300 hover:-translate-y-2 hover:scale-[1.015]">
            <div className="absolute -inset-6 rounded-md bg-red-600/20 blur-3xl" />
            <img
              className="relative aspect-[16/11] w-full rounded-md object-cover shadow-2xl lg:min-h-[520px]"
              src="/hero-service.png"
              alt="Teknik servis uzmanı beyaz eşya kontrolü yapıyor"
            />
            <div className="absolute left-6 top-6 rounded-md bg-white px-4 py-3 shadow-soft">
              <span className="block text-xs font-black uppercase tracking-wide text-slate-500">Bornova</span>
              <span className="mt-1 block text-sm font-black text-brand-900">Aynı gün servis</span>
            </div>
          </div>

          <div className="mt-4 grid w-full grid-cols-2 gap-3">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong className="block text-3xl font-black text-brand-900">{stat.value}</strong>
                <span className="mt-2 block text-sm font-bold text-slate-700">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        className="absolute bottom-8 right-24 z-20 hidden h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_0_34px_rgba(220,38,38,0.45)] ring-8 ring-red-500/15 transition duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 lg:flex xl:right-32"
        href="#hizmetler"
        aria-label="Hizmetlerimize kaydır"
      >
        <ChevronsDown className="animate-bounce" size={30} />
      </a>
    </section>
  );
}

export default Hero;
