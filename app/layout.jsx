import "@styles/globals.css";

import Header from "@components/Header";
// import Provider from "@components/Provider";

export const metadata = {
  title: "Elegant",
  description: "ecommerce for furniture",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Header />
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;
