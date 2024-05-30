import React from "react";

export const Blog = () => {
  return (
    <div className="mb-20 px-4">
      <div className="py-10 flex flex-col md:flex-row justify-between items-center">
        <div className="flex-initial w-full md:w-auto mb-4 md:mb-0">
          <div className="text-4xl text-center md:text-left">
            <b className="text-black">Articles</b>
          </div>
        </div>
        <div className="flex-initial w-full md:w-auto text-black text-center md:text-right">
          More Articles
        </div>
      </div>
      <div className="flex flex-col md:flex-row place-content-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <img
            className="w-full md:w-[500px] h-auto"
            src="/assets/images/LivingRoom.png"
            alt="Living Room"
          />
          <p className="text-center">7 ways to decor your home</p>
          <h2 className="text-center text-blue-600 cursor-pointer">
            Read More
          </h2>
        </div>
        <div className="flex-1">
          <img
            className="w-full md:w-[500px] h-auto"
            src="/assets/images/kitchen-set.png"
            alt="Kitchen Set"
          />
          <p className="text-center">Kitchen organization</p>
          <h2 className="text-center text-blue-600 cursor-pointer">
            Read More
          </h2>
        </div>
        <div className="flex-1">
          <img
            className="w-full md:w-[500px] h-auto"
            src="/assets/images/Bedroom.png"
            alt="Bedroom"
          />
          <p className="text-center">Decor your bedroom</p>
          <h2 className="text-center text-blue-600 cursor-pointer">
            Read More
          </h2>
        </div>
      </div>
    </div>
  );
};
