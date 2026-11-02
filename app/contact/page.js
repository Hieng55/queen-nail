import Header from "../../components/Header";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Contact & Book a Nail Appointment",
  description: "Contact Queen Nails Spa at (704) 243-4698, find our Waxhaw salon, view opening hours, or book your next nail appointment.",
  path: "/contact",
});

export default function ContactPage() {
  return <><Header /><main><ContactSection asPageHeading /></main><Footer /></>;
}
