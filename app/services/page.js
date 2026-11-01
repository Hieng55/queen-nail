import Header from "../../components/Header";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Services | Queen Nails Spa",
  description: "Explore Queen Nails Spa pedicure, manicure, kids, waxing, and add-on services.",
};

export default function ServicesPage() {
  return <><Header /><main><ServicesSection /></main><Footer /></>;
}
