import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        <div className="about__visual" aria-label="Queen Nails manicure experience">
          <div className="about__image about__image--main">
            <Image
              src="/images/about-us/woman-showing-floral-manicure-with-rose-nail-art-garden.jpg"
              alt="Floral manicure with rose nail art in a garden"
              fill
              sizes="(max-width: 820px) 76vw, 390px"
            />
          </div>
          <div className="about__image about__image--detail">
            <Image
              src="/images/about-us/woman-showing-her-nail-art-fingernails-with-purse.jpg"
              alt="Elegant nail art styled with a purse"
              fill
              sizes="(max-width: 820px) 34vw, 180px"
            />
          </div>
          <span className="about__corner about__corner--top" aria-hidden="true" />
          <span className="about__corner about__corner--bottom" aria-hidden="true" />
          <span className="about__light about__light--top" aria-hidden="true" />
          <span className="about__light about__light--bottom" aria-hidden="true" />
        </div>

        <div className="about__content">
          <p className="about__eyebrow">Our Story</p>
          <h2 id="about-title">Beauty should feel <em>personal.</em></h2>
          <div className="about__rule" aria-hidden="true"><span /></div>
          <p className="about__lead">
            Queen Nails Spa brings thoughtful nail care and refined artistry together in a calm, welcoming setting.
          </p>
          <p className="about__body">
            Every visit is unhurried, attentive, and finished with care down to the smallest detail.
          </p>

          <div className="about__info">
            <div className="about__hours">
              <p>Opening Hours</p>
              <dl>
                <div><dt>Tue – Sat</dt><dd>9:30 AM – 7 PM</dd></div>
                <div><dt>Sunday</dt><dd>10:30 AM – 5 PM</dd></div>
                <div><dt>Monday</dt><dd>Closed</dd></div>
              </dl>
            </div>

            <div className="about__socials">
              <p>Follow Queen Nails</p>
              <div>
                <a href="https://www.facebook.com/queennailswaxhaw/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <img src="/icons/brands/facebook.svg" alt="" />
                </a>
                <a href="https://www.instagram.com/bareluxenailspa_waxhawnc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src="/icons/brands/instagram.svg" alt="" />
                </a>
                <a href="https://maps.google.com/?cid=12497902247688058167" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
                  <img src="/icons/brands/google-maps.svg" alt="" />
                </a>
              </div>
            </div>
          </div>

          <a className="about__link" href="/services">
            Discover Our Services
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
