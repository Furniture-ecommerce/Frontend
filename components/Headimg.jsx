import React from "react";

export const Headimg = ({ img, title, desc }) => {
  return (
    <div className="relative">
      <img className="w-full pb-10" src={img} alt="" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 font-bold">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl">{desc}</p>
      </div>
    </div>
  );
};
