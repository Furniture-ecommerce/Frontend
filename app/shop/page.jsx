"use client";

import React, { useState } from "react";
import { Headimg } from "@components/Headimg";
import { Dropdown } from "@components/Dropdown";
import { CardProducts } from "@components/CardProducts";
import { NewsLetter } from "@components/NewsLetter";

const productData = [
  {
    id: 1,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 2,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 3,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 4,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 5,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 6,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 7,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 8,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 9,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 10,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 11,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 12,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
  {
    id: 13,
    name: "Product 1",
    image: "assets/images/sofa-loveseat.png",
    isNew: true,
    discount: 20,
    rating: 4.5,
    reviews: 200,
    price: 50,
    originalPrice: 62.5,
  },
];

const Shop = () => {
  const [visibleProducts, setVisibleProducts] = useState(12);

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 12);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <Headimg
          title="Shop Page"
          desc="Let’s design the place you always imagined."
          img="/assets/images/shop-header.png"
        />

        <div className="flex justify-between items-end">
          <div className="flex space-x-4">
            {/* Dropdown 1 */}
            <div className="relative inline-block text-left">
              <Dropdown
                kind="CATEGORIES"
                title="Living Room"
                items="Living Room"
              />
            </div>

            {/* Dropdown 2 */}
            <div className="relative inline-block text-left">
              <Dropdown kind="PRICE" title="All Price" items="All Price" />
            </div>
          </div>

          {/* Dropdown 3 (on the right, smaller and at the bottom) */}
          <div className="relative inline-block text-left">
            <details className="dropdown">
              <summary className="w-[150px] shadow-none border-none bg-white hover:text-white text-black m-1 btn flex items-center">
                Sort by Date
                <span className="ml-2" role="img" aria-label="down-arrow">
                  ˅
                </span>
              </summary>
              <ul className="p-2 bg-white shadow menu dropdown-content z-[1] border border-black rounded-box w-52">
                <li>
                  <a>Desc</a>
                </li>
                <li>
                  <a>Asc</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productData.slice(0, visibleProducts).map((product) => (
              <CardProducts
                key={product.id}
                name={product.name}
                image={product.image}
                isNew={product.isNew}
                discount={product.discount}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>

          {visibleProducts < productData.length && (
            <div className="text-center mt-4 mb-4">
              <button
                className="border border-black rounded-xl px-4 py-2 transition duration-300 hover:bg-black hover:text-white"
                onClick={handleShowMore}
              >
                <b>Show More</b>
              </button>
            </div>
          )}
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default Shop;
