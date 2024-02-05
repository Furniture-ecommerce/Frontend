import { Headimg } from "@components/Headimg";
import { NewsLetter } from "@components/NewsLetter";
import { Flexblog } from "@components/Flexblog";
import React from "react";

const blogs = [
  {
    id: 1,
    date: "February 03, 2024",
    image: "/assets/images/LivingRoom.png",
    desc: "7 ways to decor your home like a professional",
  },
  {
    id: 2,
    date: "February 03, 2024",
    image: "/assets/images/kitchen-set.png",
    desc: "7 ways to decor your home like a professional",
  },
  {
    id: 3,
    date: "February 03, 2024",
    image: "/assets/images/Bedroom.png",
    desc: "7 ways to decor your home like a professional",
  },
  {
    id: 4,
    date: "February 03, 2024",
    image: "/assets/images/grey-lr.png",
    desc: "7 ways to decor your home like a professional",
  },
  {
    id: 5,
    date: "February 03, 2024",
    image: "/assets/images/yellow-chairs.png",
    desc: "7 ways to decor your home like a professional",
  },
  {
    id: 6,
    date: "February 03, 2024",
    image: "/assets/images/oval-mirror.png",
    desc: "7 ways to decor your home like a professional",
  },
  {
    id: 7,
    date: "February 03, 2024",
    image: "/assets/images/brown-lr.png",
    desc: "7 ways to decor your home like a professional",
  },
  {
    id: 8,
    date: "February 03, 2024",
    image: "/assets/images/mix-lr.png",
    desc: "7 ways to decor your home like a professional",
  },
  {
    id: 8,
    date: "February 03, 2024",
    image: "/assets/images/soft-bedroom.png",
    desc: "7 ways to decor your home like a professional",
  },
];

const Blog = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <Headimg
          title="Our Blog"
          desc="Home Ideas And Design Inspiration"
          img="/assets/images/blog-header.png"
        />
        <div className="flex justify-end mb-4">
          <div className="relative">
            <select
              className=" px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              // value={sortBy}
              // onChange={(e) => handleSortBy(e.target.value)}
            >
              <option value="sortbydate">Sort By Date</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <Flexblog key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="flex items-center justify-center py-10">
          <button className="border border-black rounded-xl px-4 py-2 transition duration-300 hover:bg-black hover:text-white">
            <b>Show More</b>
          </button>
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default Blog;
