import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const distanceFromBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
      setIsVisible(distanceFromBottom < 240);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <a
      className={`fixed bottom-44 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-900 text-white shadow-2xl ring-4 ring-brand-900/15 transition duration-200 hover:-translate-y-1 hover:bg-brand-800 focus:outline-none focus:ring-4 focus:ring-blue-200 md:bottom-28 md:right-6 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
      href="#hero"
      aria-label="Sayfanın en üstüne çık"
    >
      <ArrowUp size={24} />
    </a>
  );
}

export default ScrollToTopButton;
