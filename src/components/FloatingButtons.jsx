import { company } from '../data/siteData.js';
import WhatsAppLogo from './WhatsAppLogo.jsx';

function FloatingButtons() {
  return (
    <a
      className="fixed bottom-24 right-4 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_0_34px_rgba(37,211,102,0.55)] ring-8 ring-[#25d366]/20 transition duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-[#1fbd5a] hover:shadow-[0_0_44px_rgba(37,211,102,0.7)] focus:outline-none focus:ring-4 focus:ring-emerald-200 md:bottom-6 md:right-6"
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile teknik servis talebi oluştur"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-25 animate-ping" />
      <span className="absolute -inset-2 rounded-full bg-[#25d366]/20 blur-md" />
      <WhatsAppLogo className="relative h-10 w-10" />
    </a>
  );
}

export default FloatingButtons;
