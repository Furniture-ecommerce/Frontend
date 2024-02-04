import React from "react";

export const Banner = ({ title, desc, sale }) => {
  return (
    <div className="bg-neutral-200 mb-10">
      <div className=" flex items-center">
        <div clasName="">
          <img className="" src="/assets/images/sofa-bohemian.png" alt="" />
        </div>
        <div className="">
          <div className="mx-10 w-[52%]">
            <h3 className="text-blue-600 mb-4">
              <b>{sale}</b>
            </h3>
            <h1 className="text-5xl mb-4">{title}</h1>
            <p className="mb-6">{desc}</p>
            <h3 className="">Shop Now</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
