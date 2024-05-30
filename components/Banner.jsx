import React from "react";

export const Banner = ({ title, desc, sale }) => {
  return (
    <div className="bg-neutral-200 mb-10 px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto"
            src="/assets/images/sofa-bohemian.png"
            alt="Sofa Bohemian"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="mx-4 md:mx-10">
            <h3 className="text-blue-600 mb-4">
              <b>{sale}</b>
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">{title}</h1>
            <p className="mb-6">{desc}</p>
            <h3 className="text-blue-600 cursor-pointer">Shop Now</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
