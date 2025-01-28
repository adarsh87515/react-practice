import React from "react";
import { Link } from "react-router-dom";

const BlogNavbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to={"/"}>
          <h3 className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors">
            MERN Blog App
          </h3>
        </Link>

        <ul className="flex space-x-6">
          <Link to={"/"}>
            <li className="text-lg font-semibold text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">
              Home
            </li>
          </Link>
          <Link to={"/addBlog"}>
            <li className="text-lg font-semibold text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">
              Add Blog
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default BlogNavbar;

