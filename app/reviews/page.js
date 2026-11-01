import Header from "../../components/Header";
import CustomerReviewsSection from "../../components/CustomerReviewsSection";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Customer Reviews | Queen Nails Spa",
  description: "Read public customer review highlights for Queen Nails Spa in Waxhaw.",
};

export default function ReviewsPage() {
  return <><Header /><main><CustomerReviewsSection /></main><Footer /></>;
}
