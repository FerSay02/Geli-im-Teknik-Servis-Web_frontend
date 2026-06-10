import { company } from '../data/siteData.js';
import WhatsAppLogo from './WhatsAppLogo.jsx';

function FloatingButtons() {
  return (
    <a
      className="fixed bottom-6 right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_14px_32px_rgba(15,23,42,0.22)] ring-4 ring-[#25d366]/15 transition duration-200 hover:-translate-y-1 hover:bg-[#1fbd5a] focus:outline-none focus:ring-4 focus:ring-emerald-200 md:flex"
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile teknik servis talebi oluştur"
    >
      <WhatsAppLogo className="relative h-10 w-10" />
    </a>
  );
}

export default FloatingButtons;
