import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../RECIPE-APP/context";

const BlogCard = ({ blog, fetchBlogData }) => {
  const navigate = useNavigate();
  const { isEdit, setIsEdit } = useContext(GlobalContext);
  async function handleBlogDelete(id) {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/deleteBlog/${id}`
    );
    console.log(response.data);
    if (response.data?.message) {

      fetchBlogData();
    }
  }

  async function handleBlogUpdate(blog) {
    setIsEdit(true);
    console.log(blog); 

    navigate("/addBlog", { state: { blog } });
    console.log("I am After Navigate")
  }

  return (
    <div>
      <div className=" max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image Section */}
        <div className="h-[180px]">
          <img
            src={blog.image}
            alt="Blog"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 truncate">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {blog.description}
          </p>

          {/* Button Section */}
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => handleBlogUpdate(blog)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Update Blog
            </button>
            <button
              onClick={() => handleBlogDelete(blog._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              Delete Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
