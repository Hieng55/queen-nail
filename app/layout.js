import { Forum, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
  display: "swap",
});

export const metadata = {
  title: "Queen Nails Spa",
  description: "Queen Nails Spa — royal beauty, refined care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${forum.variable}`}>
      <body>{children}</body>
    </html>
  );
}
