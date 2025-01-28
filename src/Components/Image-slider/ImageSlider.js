import React, { useEffect, useState, useCallback } from "react";
import Loader from "../Loader/Loader";

const ImageSlider = () => {
  const [imagedata, setImageData] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImageData = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`https://picsum.photos/v2/list`);
    const data = await response.json();
    setImageData(data);
    data.forEach((image) => {
      const img = new Image();
      img.src = image.download_url;
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchImageData();
  }, [fetchImageData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-3xl h-[400px]">
        {/* Image */}
        {loading ? (
          <Loader />
        ) : (
          imagedata[index] && (
            <img
              src={imagedata[index]?.download_url}
              alt="SliderImage"
              className="w-full h-full object-cover rounded shadow-md"
            />
          )
        )}

        {/* Navigation Buttons */}
        <button
          onClick={() => setIndex(index > 0 ? index - 1 : imagedata.length - 1)}
          disabled={loading || imagedata.length === 0}
          className={`absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 rounded-full shadow-md ${
            loading || imagedata.length === 0
              ? "bg-gray-300"
              : "bg-white hover:bg-gray-200"
          }`}
        >
          Left
        </button>
        <button
          onClick={() => setIndex(index < imagedata.length - 1 ? index + 1 : 0)}
          disabled={loading || imagedata.length === 0}
          className={`absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 rounded-full shadow-md ${
            loading || imagedata.length === 0
              ? "bg-gray-300"
              : "bg-white hover:bg-gray-200"
          }`}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

// import React, { useEffect, useState } from "react";
// import Loader from "../Loader/Loader";

// const ImageSlider = () => {
//   const [imagedata, setImageData] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [loading, setLoading] = useState(false);

//   async function fetchImageData() {
//     setLoading(true);
//     const response = await fetch(`https://picsum.photos/v2/list`);
//     const data = await response.json();
//     console.log(data);
//     setImageData(data);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchImageData();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="relative w-full max-w-3xl h-[400px]">
//         {/* Image */}
//         {loading?<Loader/> :imagedata[index] && (
//           <img
//             src={imagedata[index]?.download_url}
//             alt="SliderImage"
//             className="w-full h-full object-cover rounded shadow-md"
//           />
//         )}

//         {/* Navigation Buttons */}
//         <button
//           onClick={() => setIndex(index > 0 ? index - 1 : imagedata.length - 1)}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
//         >
//           Left
//         </button>
//         <button
//           onClick={() => setIndex(index < imagedata.length - 1 ? index + 1 : 0)}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
//         >
//           Right
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
