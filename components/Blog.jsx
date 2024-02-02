import React from "react";

export const Blog = () => {
  return (
    <div className="mb-20">
      <div className="py-10 flex">
        <div className="flex-initial w-full">
          <div className="text-4xl">
            <b className="text-black">Articles</b>
          </div>
        </div>
        <div className="flex-initial w-full text-black mt-auto text-right">
          More Articles
        </div>
      </div>
      <div className="flex place-content-center space-x-4">
        <div>
          <img
            className="w-[500px]"
            src="/assets/images/LivingRoom.png"
            alt=""
          />
          <p>7 ways to decor your home</p>
          <h2>Read More</h2>
        </div>
        <div>
          <img
            className="w-[500px]"
            src="/assets/images/kitchen-set.png"
            alt=""
          />
          <p>Kitchen organization</p>
          <h2>Read More</h2>
        </div>
        <div>
          <img className="w-[500px]" src="/assets/images/Bedroom.png" alt="" />
          <p>Decor your bedroom</p>
          <h2>Read More</h2>
        </div>
      </div>
    </div>
  );
};
