import React from "react";

export const BannerGrid = () => {
  return (
    <div>
      <div className="py-10 place-content-center flex items-center justify-center">
        <div clasName="flex-initial w-full">
          <div className="text-7xl">
            <b className="">
              Simply Unique<span className="text-gray-600">/</span> <br />
              Simply Better<span className="text-gray-600">.</span>
            </b>
          </div>
        </div>
        <div>
          <div>
            <b>3legant </b>
            <span className="text-neutral-400">
              is a gift & decorations store based in HCMC, Vietnam. Est since
              2019.
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-3">
        <div className="row-span-2 col-span-2">
          <img
            src="/assets/images/elements/loveseat.png"
            class="w-full h-full object-cover"
            alt="loveseat"
          />
        </div>
        <div className="col-span-2">
          <img
            src="/assets/images/elements/small-cupboards.png"
            className="w-full h-full object-cover"
            alt="small-cupboards"
          />
        </div>
        <div className="col-span-2">
          <img
            src="/assets/images/elements/toaster.png"
            className="w-full h-full object-cover"
            alt="toaster"
          />
        </div>
      </div>
      <div className="py-10 flex">
        <div className="flex-initial w-full">
          <div className="text-4xl">
            <b className="text-black">
              New
              <br />
              Arrivals
            </b>
          </div>
        </div>
        <div className="flex-initial w-full text-black mt-auto text-right">
          More Product
        </div>
      </div>
    </div>
  );
};
