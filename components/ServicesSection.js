"use client";

import { useState } from "react";

const serviceGroups = [
  {
    id: "pedicure",
    label: "Pedicure",
    note: "A considered collection of restorative foot rituals, finished with meticulous nail care.",
    featured: true,
    items: [
      { name: "Queen Spa Pedicure", price: "$42", copy: "Sea salt soak, shaping, cuticle care, callus removal, sugar scrub, mud mask, hot towel and lotion massage." },
      { name: "Deluxe Spa Pedicure", price: "$52", copy: "The complete essential ritual elevated with hot rocks, scented oil and an extended lotion massage." },
      { name: "Tropical Spa Pedicure", price: "$62", copy: "Collagen crystal sea salt, collagen scrub and mask, paraffin wax, hot rocks and serum lotion." },
      { name: "Collagen Spa Pedicure", price: "$75", copy: "Our most indulgent herbal spa treatment with detox care, fresh orange scrub, hot stone oil candle massage and hot towel." },
    ],
  },
  {
    id: "manicure",
    label: "Manicure",
    note: "Polished essentials and modern enhancements, tailored to your natural nails and personal style.",
    sections: [
      { title: "Natural Nail Services", rows: [["Regular Manicure", "$32"], ["Gel Manicure", "$42"], ["Regular Polish — Hand & Toe", "$20"], ["Gel Polish — Hand & Toe", "$30"], ["Nail Cut", "$10"], ["Gel Polish / Dip Removal", "$10"], ["Paraffin Wax / Collagen Gloves", "$10"]] },
      { title: "Nail Enhancements", rows: [["Builder Gel Full Set", "$60+"], ["Builder Gel Fill In", "$50+"], ["Acrylic Full Set", "$55+"], ["Acrylic Fill In", "$45+"], ["Gel X", "$60+"], ["Gel X Fill In", "$50+"], ["Dip Powder", "$50+"]] },
    ],
  },
  {
    id: "kids",
    label: "Kids",
    note: "A cheerful, gentle mini-service menu created especially for guests under 10.",
    rows: [["Kids Regular Manicure", "$18"], ["Kids Gel Manicure", "$28"], ["Kids Regular Polish — Hand", "$10"], ["Kids Gel Polish — Hand", "$20"], ["Kids Regular Pedicure", "$25"], ["Kids Gel Pedicure", "$35"]],
  },
  {
    id: "waxing",
    label: "Waxing",
    note: "Smooth, precise waxing services delivered with a gentle touch.",
    rows: [["Eyebrows", "$15"], ["Lip", "$8"], ["Chin", "$12"], ["Full Face", "$35"], ["Under Arms", "$25"], ["Half Arms", "$30"], ["Half Legs", "$45"]],
  },
  {
    id: "addons",
    label: "Add-ons",
    note: "Finishing details to make your service unmistakably yours.",
    rows: [["Almond / Coffin Shape", "$5"], ["Stiletto Shape", "$8"], ["Extra Length", "$5"], ["French", "$10"], ["Ombre", "$20"], ["Metallic Chrome", "$12"], ["Cat Eye Colors", "$10"], ["Designs", "$10+"], ["More Than 3 Colors", "$5"], ["Gel Add-on", "+$15"]],
  },
];

function PriceRows({ rows }) {
  return <div className="services__rows">{rows.map(([name, price]) => (
    <div className="services__row" key={name}><span>{name}</span><i aria-hidden="true" /><strong>{price}</strong></div>
  ))}</div>;
}

export default function ServicesSection() {
  const [active, setActive] = useState("pedicure");
  const group = serviceGroups.find((item) => item.id === active);

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__glow services__glow--one" aria-hidden="true" />
      <div className="services__glow services__glow--two" aria-hidden="true" />
      <div className="services__inner">
        <header className="services__header">
          <p className="services__eyebrow">The Queen Nails Menu</p>
          <h2 id="services-title">Rituals of <em>care & beauty.</em></h2>
          <p>Thoughtfully designed treatments, refined techniques and beautiful results—select the experience that feels right for you.</p>
        </header>

        <div className="services__tabs" role="tablist" aria-label="Service categories">
          {serviceGroups.map((item, index) => (
            <button key={item.id} type="button" role="tab" aria-selected={active === item.id} aria-controls={`panel-${item.id}`} id={`tab-${item.id}`} onClick={() => setActive(item.id)}>
              <span>0{index + 1}</span>{item.label}
            </button>
          ))}
        </div>

        <div className="services__panel" role="tabpanel" id={`panel-${group.id}`} aria-labelledby={`tab-${group.id}`} key={group.id}>
          <div className="services__panel-head">
            <div><p>Curated Service Menu</p><h3>{group.label}</h3></div>
            <p>{group.note}</p>
          </div>

          {group.featured && <div className="services__pedicure-grid">{group.items.map((item, index) => (
            <article className="services__service-card" key={item.name}>
              <span className="services__number">0{index + 1}</span>
              <div className="services__service-title"><h4>{item.name}</h4><strong>{item.price}</strong></div>
              <p>{item.copy}</p>
            </article>
          ))}</div>}

          {group.sections && <div className="services__columns">{group.sections.map((section) => (
            <div className="services__price-block" key={section.title}><h4>{section.title}</h4><PriceRows rows={section.rows} /></div>
          ))}</div>}

          {group.rows && <div className="services__single-list"><PriceRows rows={group.rows} /></div>}

          <div className="services__footer">
            <span>Gel add-on to spa pedicure +$15</span>
            <a href="#contact">Reserve your ritual <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}
