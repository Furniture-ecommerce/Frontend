import { Carousel } from "@components/Carousel";
import { Sliding } from "@components/Sliding";
import { BannerGrid } from "@components/BannerGrid";
import { Card } from "@components/Card";
import { Banner } from "@components/Banner";
import { Blog } from "@components/Blog";
import { NewsLetter } from "@components/NewsLetter";

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <Carousel />
        <BannerGrid />
        <Sliding />
        <Card />
      </div>
      <Banner />
      <div className="mx-auto max-w-screen-xl">
        <Blog />
      </div>
      <NewsLetter />
    </>
  );
};

export default Home;
