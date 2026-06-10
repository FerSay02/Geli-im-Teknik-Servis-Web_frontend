import { Check, Fan, Flame, Microwave, Refrigerator, Snowflake, WashingMachine, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { services, servicesIntro } from '../data/siteData.js';

const icons = [WashingMachine, Refrigerator, DishwasherIcon, Microwave, Snowflake, Flame, Fan];

function DishwasherIcon({ size = 28, strokeWidth = 2.2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M5 8h14" />
      <path d="M8 6h.01" />
      <path d="M11 6h.01" />
      <circle cx="12" cy="14" r="4" />
      <path d="M9.5 14c1.5-1.4 3.5-1.4 5 0" />
    </svg>
  );
}

function Services() {
  return (
    <section id="hizmetler" className="section bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading {...servicesIntro} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] || Wrench;
            return (
              <article key={service.title} className={`service-card group ${index === 0 ? 'service-card-featured' : ''} ${index === services.length - 1 ? 'xl:col-span-3' : ''}`}>
                <div className="service-icon-box">
                  <Icon size={28} strokeWidth={2.2} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="my-6 border-t border-dashed border-slate-200" />

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm font-semibold leading-6 text-slate-800">
                      <Check size={17} className="service-check mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
