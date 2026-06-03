import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { company, navLinks } from '../data/siteData.js';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-950/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex min-w-0 items-center gap-3 sm:gap-4" onClick={closeMenu}>
          <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-visible sm:h-28 sm:w-28 lg:h-32 lg:w-32">
            <img className="h-full w-full scale-[2.25] object-contain drop-shadow-2xl" src="/site-logo.png" alt={`${company.shortName} logo`} />
          </span>
          <span className="min-w-0 max-w-[210px] sm:max-w-[360px] lg:max-w-none">
            <span className="block text-base font-black leading-tight tracking-wide text-white sm:text-xl">GELİŞİM TEKNİK</span>
            <span className="mt-1 block text-[10px] font-extrabold uppercase leading-snug text-blue-100 sm:text-xs">
              Isıtma Soğutma VRF Sistemleri Beyaz Eşya Televizyon Bilgisayar
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn btn-light" href={company.telHref}>
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
        <div className="animate-fade-up border-t border-white/10 bg-brand-950 px-4 pb-5 shadow-2xl lg:hidden">
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
