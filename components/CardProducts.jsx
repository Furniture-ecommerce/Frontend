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
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      {/* Gambar Produk */}
      <div className="relative">
        <img className="w-full h-64 object-cover" src={image} alt="Product" />
        {/* Teks Diskon */}
        {isNew && (
          <div className="absolute shadow-lg top-3 left-2 bg-white text-black mb-2 p-2 items-center">
            <p className="font-bold">NEW</p>
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-14 left-2 bg-green-500 text-white p-2 items-center">
            <p className="font-bold">-{discount}%</p>
          </div>
        )}
      </div>

      {/* Informasi Produk */}
      <div className="px-6 py-4">
        {/* Nama Produk */}
        <div className="font-bold text-xl mb-2">{name}</div>

        {/* Rating Bintang */}
        <div className="flex items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-4 h-4 fill-current text-black"
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

        {/* Harga Produk */}
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
