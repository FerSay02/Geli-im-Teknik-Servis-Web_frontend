import { Phone } from 'lucide-react';
import { company } from '../data/siteData.js';
import WhatsAppLogo from './WhatsAppLogo.jsx';

function MobileActions() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 px-3 pt-3 shadow-[0_-12px_35px_rgba(15,23,42,0.18)] backdrop-blur md:hidden"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <a className="btn btn-primary min-h-12 justify-center rounded-md shadow-md" href={company.telHref}>
        <Phone size={19} />
        Telefon Et
      </a>
      <a className="btn btn-whatsapp min-h-12 justify-center rounded-md shadow-md" href={company.whatsappHref} target="_blank" rel="noreferrer">
        <WhatsAppLogo />
        WhatsApp
      </a>
    </div>
  );
}

export default MobileActions;
