import { Phone } from 'lucide-react';
import { company, footer } from '../data/siteData.js';

function Footer() {
  return (
    <footer className="bg-brand-950 pb-24 text-white md:pb-8">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-visible sm:h-20 sm:w-20">
                <img className="h-full w-full scale-[1.9] object-contain drop-shadow-2xl sm:scale-[2.1]" src="/site-logo.png" alt={`${company.shortName} logo`} />
              </span>
              <div className="min-w-0">
                <strong className="block text-xl font-black">GELİŞİM TEKNİK</strong>
                <span className="mt-1 block max-w-xs break-words text-xs font-bold uppercase leading-5 text-blue-100">
                  Isıtma Soğutma VRF Sistemleri Beyaz Eşya Televizyon Bilgisayar
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm break-words text-sm leading-6 text-slate-300">{footer.description}</p>
          </div>

          <FooterList title="Hizmetler" items={footer.services} />
          <FooterList title="Kurumsal" items={footer.corporate} />

          <div>
            <h3 className="text-sm font-black uppercase tracking-wide text-white">İletişim</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a className="footer-link" href={company.telHref}>{company.phone}</a>
              </li>
              <li>
                <a className="footer-link" href={company.mobileHref}>{company.mobile}</a>
              </li>
              <li>Yeşilova, Bornova / İzmir</li>
            </ul>
            <a className="btn btn-accent mt-5 w-full justify-center sm:w-auto" href={company.telHref}>
              <Phone size={18} />
              Hemen Ara
            </a>
          </div>
        </div>

        <div className="mt-10 break-words border-t border-white/10 pt-6 text-sm text-slate-400">{footer.copyright}</div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-wide text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-300">
        {items.map((item) => {
          const label = typeof item === 'string' ? item : item.label;
          const href = typeof item === 'string' ? '#hizmetler' : item.href;
          return (
            <li key={label}>
              <a className="footer-link" href={href}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
