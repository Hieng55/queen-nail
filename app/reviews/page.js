import Header from "../../components/Header";
import CustomerReviewsSection from "../../components/CustomerReviewsSection";
import Footer from "../../components/Footer";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Customer Reviews in Waxhaw, NC",
  description: "Read customer review highlights and discover guest experiences at Queen Nails Spa in Waxhaw, North Carolina.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return <><Header /><main><CustomerReviewsSection asPageHeading /></main><Footer /></>;
}
