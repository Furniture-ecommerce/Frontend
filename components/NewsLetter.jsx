import React from "react";

export const NewsLetter = () => {
  return (
    <div className="mb-20">
      <div className="relative">
        <img className="w-full" src="/assets/images/header-temp.png" alt="" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Join Our Newsletter</h1>
            <br />
            <p>Sign up for deals, new products and promotions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
