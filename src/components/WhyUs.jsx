import { BadgeCheck, CalendarCheck, Clock, ShieldCheck, Sparkles, Tags } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { whyUsSection } from '../data/siteData.js';

const icons = [Clock, ShieldCheck, BadgeCheck, Tags, Sparkles, CalendarCheck];

function WhyUs() {
  return (
    <section id="neden-biz" className="section bg-brand-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={whyUsSection.title} subtitle={whyUsSection.subtitle} description={whyUsSection.description} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUsSection.items.map((item, index) => {
            const Icon = icons[index] || BadgeCheck;
            return (
              <article key={item.title} className="why-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-brand-800">
                  <Icon size={25} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
