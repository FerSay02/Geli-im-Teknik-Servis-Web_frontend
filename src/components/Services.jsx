import { Check, Flame, Refrigerator, Snowflake, ThermometerSun, WashingMachine, Waves, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { services, servicesIntro } from '../data/siteData.js';

const icons = [WashingMachine, Refrigerator, Waves, Flame, Snowflake, ThermometerSun, Wrench];

function Services() {
  return (
    <section id="hizmetler" className="section bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading {...servicesIntro} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] || Wrench;
            return (
              <article key={service.title} className={`service-card ${index === services.length - 1 ? 'xl:col-start-2' : ''}`}>
                <div className="icon-box">
                  <Icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm font-semibold text-slate-700">
                      <Check size={17} className="mt-0.5 shrink-0 text-action-500" />
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
