import Header from "../../components/Header";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Manicure, Pedicure & Waxing Services",
  description: "Explore manicure, spa pedicure, kids, waxing, nail enhancement, and add-on services at Queen Nails Spa in Waxhaw, NC.",
};

export default function ServicesPage() {
  return <><Header /><main><ServicesSection asPageHeading /></main><Footer /></>;
}
