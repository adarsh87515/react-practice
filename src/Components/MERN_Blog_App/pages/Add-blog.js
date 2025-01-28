import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../../RECIPE-APP/context";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const { isEdit, setIsEdit } = useContext(GlobalContext);

  const navigate = useNavigate();
  const location = useLocation();

  async function handleSaveBlogToDatabase() {
    try {
      const response = isEdit
        ? await axios.put(
            `http://localhost:4000/api/v1/updateBlog/${location.state.blog._id}`,
            {
              title: formData.title,
              description: formData.description,
            }
          )
        : await axios.post(`http://localhost:4000/api/v1/createBlog`, {
            title: formData.title,
            description: formData.description,
          });

      const result = await response.data;
      if (result) {
        setIsEdit(false);
      }
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  }

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const currentBlog = location.state.blog;
      setFormData({
        title: currentBlog.title,
        description: currentBlog.description,
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 w-[400px]">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {isEdit ? "Edit Blog" : "Add a Blog"}
        </h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
            placeholder="Enter Blog Title"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
            placeholder="Enter Description"
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSaveBlogToDatabase}
            className="bg-blue-500 text-white rounded-lg px-6 py-2 font-medium hover:bg-blue-600 transition-colors duration-300"
          >
            {isEdit ? "Edit Blog" : "Add a Blog"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Addblog = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//   });

//   console.log("form Data", formData);

//   const navigate = useNavigate();

//   async function handleSaveBlogToDatabase() {
//     const response = await axios.post(
//       `http://localhost:4000/api/v1/createBlog`,
//       {
//         title: formData.title,
//         description: formData.description,
//       }
//     );

//     const result = await response.data;
//     console.log(result);
//     navigate("/");
//   }

//   return (
//     <div>
//       <h1 className="font-bold text-[20px] my-3">Add a Blog</h1>
//       <div className="flex flex-col gap-3 w-[400px]">
//         <input
//           type="text"
//           name="title"
//           id="title"
//           value={formData.title}
//           onChange={(event) =>
//             setFormData({ ...formData, title: event.target.value })
//           }
//           placeholder="Enter Blog Title"
//           className="border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <textarea
//           name="description"
//           id="description"
//           value={formData.description}
//           onChange={(event) =>
//             setFormData({ ...formData, description: event.target.value })
//           }
//           placeholder="Enter Description here"
//           className="border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleSaveBlogToDatabase}
//           className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
//         >
//           Add New Blog
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Addblog;
