const bookingUrl = "https://www.lldtek.org/salon/appt/VGtOZk1USTFNRE09";
const mapsUrl = "https://maps.google.com/?cid=12497902247688058167";

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export default function ContactSection({ asPageHeading = false }) {
  const Heading = asPageHeading ? "h1" : "h2";

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__glow" aria-hidden="true" />
      <div className="contact__inner">
        <header className="contact__header">
          <p className="contact__eyebrow">Contact Us</p>
          <Heading id="contact-title">Your next ritual <em>starts here.</em></Heading>
          <p>Reserve online, call the salon, or stop by Queen Nails in Waxhaw.</p>
        </header>

        <div className="contact__frame">
          <div className="contact__booking">
            <span className="contact__booking-number">01</span>
            <div>
              <p>Ready when you are</p>
              <h3>Make time for a little care.</h3>
              <span>Choose your service and preferred appointment time through our online booking page.</span>
            </div>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Book an appointment <Arrow /></a>
            <span className="contact__booking-mark" aria-hidden="true">Q</span>
          </div>

          <div className="contact__details">
            <div className="contact__detail">
              <span>Visit</span>
              <h3>Queen Nails Spa</h3>
              <address>3905 Providence Road South<br />Suite D, Waxhaw, NC 28173</address>
              <a className="contact__brand-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <img src="/icons/brands/google-maps.svg" alt="" />
                <span>Open in Google Maps</span>
                <Arrow />
              </a>
            </div>

            <div className="contact__detail">
              <span>Call</span>
              <h3>Speak with the salon</h3>
              <a className="contact__phone" href="tel:+17042434698">(704) 243-4698</a>
              <p>Questions about a service or your appointment? We’re happy to help.</p>
            </div>

            <div className="contact__detail contact__detail--hours">
              <span>Hours</span>
              <dl>
                <div><dt>Tuesday – Saturday</dt><dd>9:30 AM – 7 PM</dd></div>
                <div><dt>Sunday</dt><dd>10:30 AM – 5 PM</dd></div>
                <div><dt>Monday</dt><dd>Closed</dd></div>
              </dl>
            </div>

            <div className="contact__detail contact__detail--social">
              <span>Follow</span>
              <div>
                <a href="https://www.facebook.com/queennailswaxhaw/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <img src="/icons/brands/facebook.svg" alt="" />
                </a>
                <a href="https://www.instagram.com/bareluxenailspa_waxhawnc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src="/icons/brands/instagram.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
