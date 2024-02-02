import React from "react";

export const Banner = () => {
  return (
    <div className="bg-neutral-200 mb-10">
      <div className=" flex items-center">
        <div clasName="">
          <img className="" src="/assets/images/sofa-bohemian.png" alt="" />
        </div>
        <div className="">
          <div className="mx-10 w-1/2">
            <h3 className="text-blue-600 mb-4">
              <b>SALE UP TO 35% OFF</b>
            </h3>
            <h1 className="text-5xl mb-4">HUNDREDS of New lower prices!</h1>
            <p className="mb-6">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <h3 className="">Shop Now</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
