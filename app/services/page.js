import Header from "../../components/Header";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Nail Services & Prices in Waxhaw, NC",
  description: "Explore manicure, spa pedicure, kids, waxing, nail enhancement, and add-on services at Queen Nails Spa in Waxhaw, NC.",
  path: "/services",
});

export default function ServicesPage() {
  return <><Header /><main><ServicesSection asPageHeading /></main><Footer /></>;
}
