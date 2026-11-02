"use client";

import { useEffect, useMemo, useState } from "react";

const reviews = [
  { text: "My nails look great and very natural.", name: "Lisa Tilton", detail: "Manicure guest", source: "https://salondiscover.com/sephora-nail-salon-28173/" },
  { text: "The best gel nails I’ve ever had.", name: "Bekah Turbeville", detail: "Gel manicure guest", source: "https://salondiscover.com/sephora-nail-salon-28173/" },
  { text: "The staff was very friendly and professional.", name: "Alice G.", detail: "Manicure & pedicure guest", source: "https://salondiscover.com/sephora-nail-salon-28173/" },
  { text: "A comfortable pedicure finished with a beautiful flower detail.", name: "Pedicure Guest", detail: "Public review highlight", source: "https://salondiscover.com/sephora-nail-salon-28173/" },
  { text: "Nam is awesome.", name: "Verified Guest", detail: "Superpages review", source: "https://reviews.birdeye.com/bare-luxe-nail-spa-170111116174483" },
  { text: "A nice, relaxing place for thoughtful nail care.", name: "Verified Guest", detail: "Superpages review", source: "https://reviews.birdeye.com/bare-luxe-nail-spa-170111116174483" },
  { text: "Attentive work, natural-looking results, and time taken on every detail.", name: "Manicure Guest", detail: "Public review highlight", source: "https://salondiscover.com/sephora-nail-salon-28173/" },
  { text: "The appointment began promptly and the experience felt genuinely welcoming.", name: "Family Visit Guest", detail: "Public review highlight", source: "https://salondiscover.com/sephora-nail-salon-28173/" },
];

function getPositions(total, visible) {
  const last = Math.max(0, total - visible);
  const positions = [];
  for (let index = 0; index <= last; index += visible) positions.push(Math.min(index, last));
  if (positions[positions.length - 1] !== last) positions.push(last);
  return [...new Set(positions)];
}

export default function CustomerReviewsSection({ asPageHeading = false }) {
  const [visible, setVisible] = useState(3);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const positions = useMemo(() => getPositions(reviews.length, visible), [visible]);
  const activePage = Math.max(0, positions.indexOf(active));
  const Heading = asPageHeading ? "h1" : "h2";

  useEffect(() => {
    const updateVisible = () => setVisible(window.innerWidth <= 620 ? 1 : window.innerWidth <= 960 ? 2 : 3);
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => setActive(0), [visible]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setActive((current) => {
        const page = positions.indexOf(current);
        return positions[(page + 1) % positions.length];
      });
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, positions]);

  const move = (direction) => {
    const nextPage = (activePage + direction + positions.length) % positions.length;
    setActive(positions[nextPage]);
  };

  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="reviews__glow" aria-hidden="true" />
      <div className="reviews__inner">
        <header className="reviews__header">
          <div><p className="reviews__eyebrow">Customer Reviews</p><Heading id="reviews-title">{asPageHeading ? <>Queen Nails Spa reviews <em>in Waxhaw.</em></> : <>Kind words from <em>our guests.</em></>}</Heading></div>
          <div className="reviews__summary" aria-label="4.2 out of 5 from 119 reviews"><strong>4.2</strong><div><span aria-hidden="true">★★★★☆</span><p>119 reviews</p></div></div>
        </header>

        <div className="reviews__carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} aria-roledescription="carousel" aria-label="Customer review highlights">
          <div className="reviews__viewport">
            <div className="reviews__track" style={{ "--active": active, "--visible": visible }} aria-live="polite">
              {reviews.map((review, index) => (
                <article className={`reviews__card${index % 3 === 1 ? " reviews__card--featured" : ""}`} key={`${review.name}-${index}`} aria-hidden={index < active || index >= active + visible}>
                  <span className="reviews__quote" aria-hidden="true">“</span>
                  <div className="reviews__stars">Public review</div>
                  <blockquote>{review.text}</blockquote>
                  <footer><span><i>{review.name.slice(0, 1)}</i></span><div><strong>{review.name}</strong><small>{review.detail}</small></div></footer>
                  <a href={review.source} target="_blank" rel="noopener noreferrer" tabIndex={index < active || index >= active + visible ? -1 : 0}>View source</a>
                </article>
              ))}
            </div>
          </div>

          <div className="reviews__controls">
            <div>
              <button type="button" onClick={() => move(-1)} aria-label="Previous reviews"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H6M11 6l-6 6 6 6" /></svg></button>
              <button type="button" onClick={() => move(1)} aria-label="Next reviews"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg></button>
            </div>
            <div className="reviews__dots" aria-label="Choose review page">
              {positions.map((position, index) => <button type="button" className={active === position ? "active" : ""} onClick={() => setActive(position)} aria-label={`Show review page ${index + 1}`} aria-current={active === position ? "true" : undefined} key={position} />)}
            </div>
            <span>{String(activePage + 1).padStart(2, "0")} / {String(positions.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="reviews__footer"><p>Eight public review highlights from the salon at this location.</p><a href="https://maps.google.com/?cid=12497902247688058167" target="_blank" rel="noopener noreferrer">Share your experience<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg></a></div>
      </div>
    </section>
  );
}
