import { Carousel } from "@components/Carousel";
import { Sliding } from "@components/Sliding";
import { BannerGrid } from "@components/BannerGrid";
import { Card } from "@components/Card";
import { Banner } from "@components/Banner";
import { Blog } from "@components/Blog";
import { NewsLetter } from "@components/NewsLetter";
import Footer from "@components/Footer";

const icons = [
  {
    id: 1,
    name: "Free Shipping",
    image: "/assets/icons/ship.png",
    description: "Order above $200",
  },
  {
    id: 2,
    name: "Money Back",
    image: "/assets/icons/money.png",
    description: "30 days guarantee",
  },
  {
    id: 3,
    name: "Secure Payements",
    image: "/assets/icons/lock.png",
    description: "Secured by stripe",
  },
  {
    id: 4,
    name: "24/7 Support",
    image: "/assets/icons/phone.png",
    description: "Phone and email support",
  },
];

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <Carousel />
        <BannerGrid />
        <Sliding />
        <div className="flex">
          {icons.map((icon) => (
            <Card key={icon.id} icon={icon} />
          ))}
        </div>
      </div>
      <Banner
        title="HUNDREDS of New lower prices!"
        desc="It’s more affordable than ever to give every room in your home a
              stylish makeover"
        sale="SALE UP TO 35% OFF"
      />
      <div className="mx-auto max-w-screen-xl">
        <Blog />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
