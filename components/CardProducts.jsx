// CardProducts.jsx
import React from "react";

export const CardProducts = ({
  name,
  image,
  isNew,
  discount,
  rating,
  reviews,
  price,
  originalPrice,
}) => {
  return (
    <div className="max-w-md mx-auto bg-neutral-200 mb-10">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={image} alt="Product" />
        {isNew && (
          <div className="absolute top-0 left-0 bg-white text-black p-2 mt-2 ml-2">
            <p className="font-bold">NEW</p>
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-0 right-0 bg-green-500 text-white p-2 mt-2 mr-2">
            <p className="font-bold">-{discount}%</p>
          </div>
        )}
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-4 h-4 fill-current text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 0l2.5 6h6l-5 4.5L15 20l-5-4.5L5 20l1.5-9L0 6h6z" />
            </svg>
          ))}
          <span className="text-gray-600 ml-2">
            {rating} ({reviews} reviews)
          </span>
        </div>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-lg">${price}</span>{" "}
          {discount > 0 && (
            <del className="text-sm text-gray-500">${originalPrice}</del>
          )}
        </p>
      </div>
    </div>
  );
};
