import { BannerCarousel } from "@components/BannerCarousel";
import { ProductCarousel } from "@components/ProductCarousel";

const Home = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div>
        <BannerCarousel />
      </div>
      <div class="py-10 place-content-center flex items-center justify-center">
        <div class="flex-initial w-full">
          <div className="text-7xl">
            <b className="text-black">
              Simply Unique<span className="text-gray-600">/</span> <br />
              Simply Better<span className="text-gray-600">.</span>
            </b>
          </div>
        </div>
        <div class="flex-initial w-full ">
          <div>
            <span className="text-black">
              <b>3legant </b>
            </span>
            is a gift & decorations store based in HCMC, Vietnam. Est since
            2019.
          </div>
        </div>
      </div>
      <div class="grid grid-rows-2 grid-flow-col gap-3">
        <div class="row-span-2 col-span-2">
          <img
            src="/assets/images/elements/loveseat.png"
            class="w-full h-full object-cover"
            alt="loveseat"
          />
        </div>
        <div class="col-span-2">
          <img
            src="/assets/images/elements/small-cupboards.png"
            class="w-full h-full object-cover"
            alt="small-cupboards"
          />
        </div>
        <div class="col-span-2">
          <img
            src="/assets/images/elements/toaster.png"
            class="w-full h-full object-cover"
            alt="toaster"
          />
        </div>
      </div>
      <div class="py-10 flex">
        <div class="flex-initial w-full">
          <div className="text-4xl">
            <b className="text-black">
              New
              <br />
              Arrivals
            </b>
          </div>
        </div>
        <div class="flex-initial w-full text-black mt-auto text-right">
          More Product
        </div>
      </div>
      <ProductCarousel/>
    </div>
  );
};

export default Home;
