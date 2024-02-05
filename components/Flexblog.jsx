import React from "react";

export const Flexblog = ({ blog }) => {
  return (
    <div className="flex flex-col p-4">
      <img className="w-full mb-2" src={blog.image} alt={blog.image} />
      <h2>{blog.desc}</h2>
      <h6>{blog.date}</h6>
    </div>
  );
};
