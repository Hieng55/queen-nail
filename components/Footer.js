import Image from "next/image";

const bookingUrl = "https://www.lldtek.org/salon/appt/VGtOZk1USTFNRE09";

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__cta">
          <div>
            <p>The finishing touch</p>
            <h2>Ready for your next set?</h2>
          </div>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Reserve your ritual <Arrow /></a>
        </div>

        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a href="/" aria-label="Queen Nails Spa — Home">
              <Image src="/images/logo/logo (5).png" alt="Queen Nails Spa" width={923} height={665} />
            </a>
            <p>Thoughtful nail care, refined artistry, and time made just for you.</p>
            <div className="site-footer__socials">
              <a href="https://www.facebook.com/queennailswaxhaw/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src="/icons/brands/facebook.svg" alt="" /></a>
              <a href="https://www.instagram.com/bareluxenailspa_waxhawnc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src="/icons/brands/instagram.svg" alt="" /></a>
              <a href="https://maps.google.com/?cid=12497902247688058167" target="_blank" rel="noopener noreferrer" aria-label="Google Maps"><img src="/icons/brands/google-maps.svg" alt="" /></a>
            </div>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            <p>Explore</p>
            <div>
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/services">Services</a>
              <a href="/reviews">Reviews</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>

          <div className="site-footer__visit">
            <p>Visit Queen Nails</p>
            <address>3905 Providence Road South<br />Suite D, Waxhaw, NC 28173</address>
            <a href="tel:+17042434698">(704) 243-4698</a>
            <small>Tuesday – Saturday: 9:30 AM – 7 PM<br />Sunday: 10:30 AM – 5 PM</small>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 Queen Nails Spa. All rights reserved.</p>
          <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
