import Header from "../../components/Header";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata({
  title: "About Our Waxhaw Nail Salon",
  description: "Meet Queen Nails Spa and discover our thoughtful approach to refined nail care and beauty services in Waxhaw, NC.",
  path: "/about",
});

export default function AboutPage() {
  return <><Header /><main><AboutSection asPageHeading /></main><Footer /></>;
}
