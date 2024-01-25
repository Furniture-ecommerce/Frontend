import "@styles/globals.css";

import Header from "@components/Header";
import { Carousel } from "@components/Carousel";
// import Provider from "@components/Provider";

export const metadata = {
  title: "Elegant",
  description: "ecommerce for furniture",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Header />
      
      {children}
    </body>
  </html>
);

export default RootLayout;
