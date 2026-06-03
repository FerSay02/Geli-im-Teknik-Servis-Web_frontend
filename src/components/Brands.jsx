import SectionHeading from './SectionHeading.jsx';
import { brandsSection } from '../data/siteData.js';

const brandLogos = [
  { name: 'Arçelik', src: '/brands/arcelik-vector-logo.png', className: 'scale-[1.75]' },
  { name: 'Beko', src: '/brands/beko-logo-vector.png', className: 'scale-[1.55]' },
  { name: 'Vestel', src: '/brands/vestel--eps--vector-logo.png', className: 'scale-[1.45]' },
  { name: 'Bosch', src: '/brands/bosch-vector.png', className: 'scale-[1.12]' },
  { name: 'Siemens', src: '/brands/siemens-ag-vector-logo.png', className: 'scale-[1.65]' },
  { name: 'Profilo', src: '/brands/Profilo-logo.png', className: 'scale-[1.2]' },
  { name: 'Samsung', src: '/brands/samsung-group-vector-logo.png', className: 'scale-[1.75]' },
  { name: 'LG', src: '/brands/lg-logo.svg', className: 'scale-[1.08]' },
  { name: 'Altus', src: '/brands/altus_logo_pink.png', className: 'scale-[1.45]' },
  { name: 'Regal', src: '/brands/regal-vector-logo.png', className: 'scale-[1.55]' },
  { name: 'Hoover', src: '/brands/hoover-logo-vector-01.png', className: 'scale-[1.15]' },
  { name: 'Indesit', src: '/brands/indesit-logo.png', className: 'scale-[1.08]' },
  { name: 'Ariston', src: '/brands/ariston-black-vector-logo.png', className: 'scale-[1.8]' },
  { name: 'Hotpoint', src: '/brands/hotpoint-new-vector-logo.png', className: 'scale-[1.65]' },
];

function Brands() {
  return (
    <section id="markalar" className="section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={brandsSection.title} subtitle={brandsSection.subtitle} description={brandsSection.description} />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {brandLogos.map((brand) => (
            <div key={brand.name} className="brand-card group" title={brand.name}>
              <img
                className={`max-h-12 max-w-[78%] object-contain transition duration-300 group-hover:scale-125 group-hover:drop-shadow-xl ${brand.className}`}
                src={brand.src}
                alt={`${brand.name} logo`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
