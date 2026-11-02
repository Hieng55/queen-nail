import Header from "../../components/Header";
import GallerySection from "../../components/GallerySection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Nail Art & Manicure Gallery in Waxhaw, NC",
  description: "Explore manicure, pedicure, nail art, and beauty inspiration from Queen Nails Spa in Waxhaw, NC.",
  path: "/gallery",
});

export default function GalleryPage() {
  return <><Header /><main><GallerySection asPageHeading full /><ContactSection /></main><Footer /></>;
}
