import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import CustomerReviewsSection from "../components/CustomerReviewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CustomerReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
