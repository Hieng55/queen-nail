import Header from "../../components/Header";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact & Book an Appointment",
  description: "Contact Queen Nails Spa at (704) 243-4698, find our Waxhaw salon, view opening hours, or book your next nail appointment.",
};

export default function ContactPage() {
  return <><Header /><main><ContactSection asPageHeading /></main><Footer /></>;
}
