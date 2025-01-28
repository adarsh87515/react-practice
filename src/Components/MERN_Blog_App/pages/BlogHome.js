import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../BlogCard";
import { Link } from "react-router-dom";

const BlogHome = () => {
  const [blogData, setBlogData] = useState([]);

  async function fetchBlogData() {
    try {
      const blogs = await axios.get(`http://localhost:4000/api/v1/`);
      setBlogData(blogs.data.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Blog Posts
        </h1>
        {blogData && blogData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((blog) => (
              <BlogCard
                key={blog._id}
                blog={blog}
                fetchBlogData={fetchBlogData}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">No Blog Found</p>
            <Link
              to="/addBlog"
              className="text-white bg-blue-500 px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
              Add Blogs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogHome;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import BlogCard from "../BlogCard";
// import { Link } from "react-router-dom";

// const BlogHome = () => {
//   const [blogData, setBlogData] = useState([]);

//   async function fetchBlogData() {
//     const blogs = await axios.get(`http://localhost:4000/api/v1/`);

//     setBlogData(blogs.data.data);
//     console.log(blogData);
//   }

//   useEffect(() => {
//     fetchBlogData();
//   }, []);

//   return (
//     <div>
//       {blogData && blogData.length > 0 ? (
//         blogData.map((blog) => (
//           <div key={blog._id}>
//             <BlogCard blog={blog} fetchBlogData={fetchBlogData}  />
//           </div>
//         ))
//       ) : (
//         <>
//           <div> No Blog Found</div>
//           <div className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white  ">
//             <Link to={"/addBlog"}>Add Blogs</Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default BlogHome;
