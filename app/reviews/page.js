import Header from "../../components/Header";
import CustomerReviewsSection from "../../components/CustomerReviewsSection";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Customer Reviews",
  description: "Read customer review highlights and discover guest experiences at Queen Nails Spa in Waxhaw, North Carolina.",
};

export default function ReviewsPage() {
  return <><Header /><main><CustomerReviewsSection asPageHeading /></main><Footer /></>;
}
