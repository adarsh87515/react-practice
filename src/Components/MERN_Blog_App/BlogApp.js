import React from "react";
import { Route, Routes } from "react-router-dom";

import BlogHome from "./pages/BlogHome";
import Addblog from "./pages/Add-blog";
import BlogNavbar from "./BlogNavbar";

const BlogApp = () => {
  return (
    <div>
      <BlogNavbar />
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/addBlog" element={<Addblog />} />
      </Routes>
    </div>
  );
};

export default BlogApp;
