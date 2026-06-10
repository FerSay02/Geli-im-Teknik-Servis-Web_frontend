import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { company, navLinks } from '../data/siteData.js';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-950/90 text-white shadow-[0_12px_35px_rgba(2,6,23,0.22)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:h-24 lg:gap-6 lg:px-8">
        <a href="#hero" className="flex min-w-0 max-w-[calc(100%-3.25rem)] items-center gap-2 sm:gap-3 lg:max-w-none lg:shrink-0" onClick={closeMenu}>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-visible sm:h-16 sm:w-16 lg:h-20 lg:w-20">
            <img className="h-full w-full scale-[1.7] object-contain brightness-0 invert drop-shadow-xl lg:scale-[1.85]" src="/site-logo.png" alt={`${company.shortName} logo`} />
          </span>
          <span className="min-w-0 max-w-[180px] sm:max-w-[360px] lg:max-w-[480px] xl:max-w-[560px]">
            <span className="block truncate text-sm font-black leading-none tracking-[0.05em] text-white sm:text-lg lg:text-xl">GELİŞİM TEKNİK</span>
            <span className="mt-1 block truncate text-[10px] font-bold uppercase leading-tight tracking-[0.04em] text-blue-100/80 sm:text-xs">
              Isıtma Soğutma VRF Sistemleri Beyaz Eşya Televizyon Bilgisayar
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn btn-light min-h-11 px-4" href={company.telHref}>
            <Phone size={18} />
            Hemen Ara
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 transition hover:bg-white/10 lg:hidden"
          type="button"
          aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="animate-fade-up border-t border-white/10 bg-brand-950/95 px-4 pb-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 pt-3" aria-label="Mobil menü">
            {navLinks.map((link) => (
              <a key={link.href} className="rounded-md px-3 py-3 text-sm font-bold text-blue-50 transition hover:bg-white/10" href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a className="btn btn-accent mt-3 justify-center" href={company.telHref} onClick={closeMenu}>
              <Phone size={18} />
              Hemen Ara
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
