import React from "react";

export default function Footer() {
  return (
    <div className="pt-20 pb-8 px-4 sm:px-8 md:px-20 lg:px-40 bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex items-center space-x-8 mb-4 md:mb-0">
          <div>3legant.</div>
          <div className="h-6 border-l border-gray-700 mx-4"></div>
          <div>Gift & Decoration Store</div>
        </div>
        <div className="flex space-x-4 md:space-x-8">
          <div>Home</div>
          <div>Shop</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
      <hr className="border-gray-700 mb-8" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">Copyright</div>
        <div className="flex space-x-4">
          <div>Sosmed</div>
          <div>Sosmed</div>
          <div>Sosmed</div>
        </div>
      </div>
    </div>
  );
}
