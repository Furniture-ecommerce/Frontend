import "@styles/globals.css";

import Header from "@components/Header";
import { Carousel } from "@components/BannerCarousel";
// import Provider from "@components/Provider";

export const metadata = {
  title: "Elegant",
  description: "ecommerce for furniture",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="bg-white">
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
