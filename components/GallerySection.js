"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const galleryItems = [
  { src: "/images/gallery/45.png", alt: "Queen Nails manicure inspiration", title: "Polished Elegance", category: "Signature Set" },
  { src: "/images/gallery/46.png", alt: "Queen Nails nail art inspiration", title: "Artful Details", category: "Nail Art" },
  { src: "/images/gallery/47.png", alt: "Luxury manicure look by Queen Nails", title: "Modern Muse", category: "Manicure" },
  { src: "/images/gallery/48.png", alt: "Detailed manicure design by Queen Nails", title: "Fine Lines", category: "Details" },
  { src: "/images/gallery/49.png", alt: "Elegant nail design by Queen Nails", title: "Golden Hour", category: "Nail Art" },
  { src: "/images/gallery/50.png", alt: "Queen Nails signature manicure", title: "The Perfect Finish", category: "Signature Set" },
  { src: "/images/gallery/51.png", alt: "Creative nail art from Queen Nails", title: "Color Story", category: "Nail Art" },
  { src: "/images/gallery/52.png", alt: "Refined manicure inspiration from Queen Nails", title: "Quiet Luxury", category: "Manicure" },
  { src: "/images/gallery/53.png", alt: "Queen Nails beauty detail", title: "Made to Be Yours", category: "Details" },
  { src: "/images/gallery/54.png", alt: "Statement manicure by Queen Nails", title: "Statement Style", category: "Signature Set" },
  { src: "/images/gallery/55.png", alt: "Fresh nail design inspiration", title: "Freshly Polished", category: "Manicure" },
  { src: "/images/gallery/56.png", alt: "Detailed nail art by Queen Nails", title: "Finishing Touch", category: "Nail Art" },
];

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export default function GallerySection({ asPageHeading = false, full = false }) {
  const Heading = asPageHeading ? "h1" : "h2";
  const items = full ? galleryItems : galleryItems.slice(0, 6);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (activeImage === null) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowLeft") setActiveImage((current) => (current - 1 + items.length) % items.length);
      if (event.key === "ArrowRight") setActiveImage((current) => (current + 1) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage, items.length]);

  const move = (direction) => setActiveImage((current) => (current + direction + items.length) % items.length);

  return (
    <section className={`gallery${full ? " gallery--page" : ""}`} id="gallery" aria-labelledby="gallery-title">
      <div className="gallery__inner">
        <header className="gallery__header">
          <div>
            <p className="gallery__eyebrow">The Queen Nails Lookbook</p>
            <Heading id="gallery-title">{asPageHeading ? <>Nail art & manicure <em>gallery.</em></> : <>Beauty in <em>every detail.</em></>}</Heading>
          </div>
          <p>A glimpse into the color, care, and artistry behind every Queen Nails experience.</p>
        </header>

        <div className="gallery__grid">
          {items.map((item, index) => (
            <button className="gallery__item" type="button" onClick={() => setActiveImage(index)} aria-label={`Open image ${index + 1} of ${items.length}`} key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 34vw" priority={full && index < 2} />
            </button>
          ))}
        </div>

        {!full && <div className="gallery__footer"><p>Discover more moments from our salon and signature services.</p><a href="/gallery">Explore the gallery <Arrow /></a></div>}
      </div>

      {activeImage !== null && createPortal(
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`Gallery image ${activeImage + 1} of ${items.length}`} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveImage(null); }}>
          <button className="gallery-lightbox__close" type="button" onClick={() => setActiveImage(null)} aria-label="Close gallery">×</button>
          <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" onClick={() => move(-1)} aria-label="Previous image"><span aria-hidden="true">←</span></button>
          <div className="gallery-lightbox__image">
            <Image src={items[activeImage].src} alt={items[activeImage].alt} fill sizes="96vw" priority />
          </div>
          <button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" onClick={() => move(1)} aria-label="Next image"><span aria-hidden="true">→</span></button>
          <span className="gallery-lightbox__count">{String(activeImage + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        </div>,
        document.body
      )}
    </section>
  );
}
