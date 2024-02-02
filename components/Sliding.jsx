"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Scrollbar } from "swiper/modules";
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "/assets/images/sofa-loveseat.png",
    description: "Description of Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    image: "/assets/images/small-lamp.png",
    description: "Description of Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    image: "/assets/images/lamp.png",
    description: "Description of Product 3",
  },
  {
    id: 4,
    name: "Product 4",
    image: "/assets/images/bask.png",
    description: "Description of Product 4",
  },
  {
    id: 5,
    name: "Product 5",
    image: "/assets/images/toaster.png",
    description: "Description of Product 5",
  },
  {
    id: 6,
    name: "Product 1",
    image: "/assets/images/sofa-loveseat.png",
    description: "Description of Product 1",
  },
  {
    id: 7,
    name: "Product 2",
    image: "/assets/images/small-lamp.png",
    description: "Description of Product 2",
  },
  {
    id: 8,
    name: "Product 3",
    image: "/assets/images/lamp.png",
    description: "Description of Product 3",
  },
  {
    id: 9,
    name: "Product 4",
    image: "/assets/images/bask.png",
    description: "Description of Product 4",
  },
  {
    id: 10,
    name: "Product 5",
    image: "/assets/images/toaster.png",
    description: "Description of Product 5",
  },
];

export const Sliding = () => {
  return (
    <div className="mb-14">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwipper"
      >
        <>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex flex-col gap-6 mb-20 text-white px-6 h-[215px] w-[262px] lg:h-[433px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <h1 className="text-xl lg:text-2xl">{product.name} </h1>
                  <p className="lg:text-[18px]">{product.name} </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};
