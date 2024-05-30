import React from "react";

export const NewsLetter = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full"
          src="/assets/images/header-temp.png"
          alt="Header Image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Join Our Newsletter
            </h1>
            <br />
            <p className="text-sm sm:text-base md:text-lg">
              Sign up for deals, new products and promotions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
