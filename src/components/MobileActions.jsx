import { Phone } from 'lucide-react';
import { company } from '../data/siteData.js';
import { trackConversion } from '../lib/tracking.js';
import WhatsAppLogo from './WhatsAppLogo.jsx';

function MobileActions() {
  return (
    <div
      className="mobile-actions"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <a className="btn btn-primary min-h-12 justify-center rounded-md shadow-md" href={company.telHref} onClick={() => trackConversion('phone_click', { location: 'sticky_mobile' })}>
        <Phone size={19} className="shrink-0" />
        <span className="min-w-0 truncate">Hemen Ara</span>
      </a>
      <a className="btn btn-whatsapp min-h-12 justify-center rounded-md shadow-md" href={company.whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackConversion('whatsapp_click', { location: 'sticky_mobile' })}>
        <WhatsAppLogo />
        <span className="min-w-0 truncate">WhatsApp</span>
      </a>
    </div>
  );
}

export default MobileActions;
