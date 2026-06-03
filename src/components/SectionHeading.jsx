function SectionHeading({ title, subtitle, description, align = 'center' }) {
  return (
    <div className={align === 'left' ? 'section-heading text-left' : 'section-heading mx-auto text-center'}>
      <span className="section-kicker">{subtitle}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SectionHeading;
