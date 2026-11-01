import Header from "../../components/Header";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Our Waxhaw Nail Salon",
  description: "Meet Queen Nails Spa and discover our thoughtful approach to refined nail care and beauty services in Waxhaw, NC.",
};

export default function AboutPage() {
  return <><Header /><main><AboutSection asPageHeading /></main><Footer /></>;
}
