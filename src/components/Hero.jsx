import { CheckCircle2, ChevronsDown, Phone } from 'lucide-react';
import { company, hero } from '../data/siteData.js';
import WhatsAppLogo from './WhatsAppLogo.jsx';

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-brand-950 pt-20 text-white lg:pt-24">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-start gap-8 px-4 pb-10 pt-8 sm:px-6 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8 lg:pb-16 lg:pt-10">
        <div className="hero-copy max-w-3xl min-w-0">
          <p className="mb-4 inline-flex max-w-full rounded-md bg-white/10 px-3 py-2 text-xs font-black text-blue-50 ring-1 ring-white/15 backdrop-blur sm:text-sm">
            {hero.eyebrow}
          </p>
          <h1 className="break-words text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.04]">{hero.title}</h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-blue-50 sm:mt-6 sm:text-lg sm:leading-8">{hero.description}</p>

          <div className="mt-7 grid gap-3 min-[380px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-row">
            <a className="btn btn-accent btn-xl w-full" href={company.telHref}>
              <Phone size={20} />
              Hemen Ara
            </a>
            <a className="btn btn-whatsapp btn-xl w-full" href={company.whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppLogo />
              WhatsApp
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
            {hero.badges.map((badge) => (
              <span key={badge} className="inline-flex min-w-0 items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs font-extrabold text-blue-50 ring-1 ring-white/15 backdrop-blur sm:text-sm">
                <CheckCircle2 size={17} className="text-blue-200" />
                {badge}
              </span>
            ))}
          </div>

          <a
            className="hidden"
            href="#hizmetler"
            aria-label="Hizmetlerimize kaydır"
          >
            <ChevronsDown size={30} />
          </a>
        </div>

        <div className="hero-visual min-w-0 lg:-mr-6 xl:-mr-10">
          <div className="relative rounded-md bg-white/10 p-2 shadow-hero ring-1 ring-white/15 backdrop-blur transition duration-300 hover:-translate-y-1 sm:p-3">
            <div className="absolute -inset-6 rounded-md bg-brand-600/10 blur-3xl" />
            <img
              className="relative aspect-[16/11] max-h-[320px] w-full rounded-md object-cover object-center shadow-2xl sm:max-h-none lg:min-h-[460px] xl:min-h-[520px]"
              src="/hero-service.png"
              alt="Teknik servis uzmanı beyaz eşya kontrolü yapıyor"
            />
            <div className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 shadow-soft sm:left-6 sm:top-6 sm:px-4 sm:py-3">
              <span className="block text-xs font-black uppercase tracking-wide text-slate-500">Bornova</span>
              <span className="mt-1 block text-sm font-black text-brand-900">Aynı gün servis</span>
            </div>
          </div>

          <div className="mt-3 grid w-full grid-cols-2 gap-3 sm:mt-4">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong className="block text-2xl font-black text-brand-900 sm:text-3xl">{stat.value}</strong>
                <span className="mt-2 block text-xs font-bold text-slate-700 sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
        <div className="overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-white/20">
          <div className="grid items-center gap-0 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="bg-[#c2412d] px-5 py-5 text-white sm:px-7 lg:px-8 lg:py-7">
              <span className="block text-xs font-black uppercase tracking-wide text-white/80">Güvenilir çözüm ortağı</span>
              <strong className="mt-2 block text-2xl font-black leading-tight sm:text-3xl">Yetkili Servisi</strong>
              <span className="mt-2 block text-sm font-semibold leading-6 text-white/90">Fieber ve Vestel servis talepleriniz için hızlı destek.</span>
            </div>

            <div className="grid grid-cols-2 items-stretch divide-x divide-slate-200 bg-white">
              <div className="flex min-h-32 items-center justify-center overflow-hidden px-4 py-6 sm:min-h-36 sm:px-8">
                <img
                  className="max-h-24 w-full max-w-[280px] scale-[2.35] object-contain drop-shadow-sm sm:max-h-28 sm:scale-[2.6]"
                  src="/fieber.png"
                  alt="Fieber yetkili servisi logo"
                  loading="lazy"
                />
              </div>
              <div className="flex min-h-32 items-center justify-center px-4 py-6 sm:min-h-36 sm:px-8">
                <img
                  className="max-h-20 w-full max-w-[220px] object-contain drop-shadow-sm sm:max-h-24"
                  src="/vestel.png"
                  alt="Vestel yetkili servisi logo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        className="absolute right-28 top-[calc(100vh-5.5rem)] z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white shadow-lg ring-1 ring-white/20 backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-blue-200 lg:flex xl:right-32"
        href="#hizmetler"
        aria-label="Hizmetlerimize kaydır"
      >
        <ChevronsDown size={30} />
      </a>
    </section>
  );
}

export default Hero;
