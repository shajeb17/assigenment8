import React from "react";
import { useLocation } from "react-router";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const SingleProduct = () => {
  let location = useLocation();
  let mydata = location.state;
  let {
    companyName,
    description,
    downloads,
    image,
    ratingAvg,
    ratings,
    title,
    reviews,
    size,
  } = mydata;
  console.log(ratings);

  return (
    <div className="w-10/12 m-auto">
      <div className=" p-6 rounded-xl shadow-lg flex flex-row  items-center  gap-14 w-full max-[705px]:flex-col  mx-auto">
        <div className="flex-shrink-0 w-50 h-40  flex items-center justify-center bg-white rounded-lg">
          <img src={image} alt="" />
        </div>

        <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-full border-b border-b-gray-400">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
              {title}: {companyName}
            </h2>
            <p className="text-gray-500 text-sm mb-4 ">
              Developed by :
              <span className="text-blue-600 font-medium"> {companyName}</span>
            </p>
          </div>

          <div className="flex justify-around md:justify-start gap-6 w-full mb-6 mt-2.5">
            <div className="flex flex-col items-center">
              <div className="text-green-500 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <span className="text-gray-800 text-xl font-bold">
                {downloads}
              </span>
              <span className="text-gray-500 text-xs">Downloads</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-orange-400 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.31 6.91.99-5 4.88 1.18 6.88L12 18.06l-6.18 3.25L7 14.18l-5-4.88 6.91-.99L12 2z" />
                </svg>
              </div>
              <span className="text-gray-800 text-xl font-bold">
                {ratingAvg}
              </span>
              <span className="text-gray-500 text-xs">Average Ratings</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-purple-500 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.05 6L11 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7c0-.28 0-.55-.02-.82M18 10V6h-4M18 6l-5.6 5.6"
                  />
                </svg>
              </div>
              <span className="text-gray-800 text-xl font-bold">{reviews}</span>
              <span className="text-gray-500 text-xs">Total Reviews</span>
            </div>
          </div>

          <button className="w-full md:w-auto px-8 py-3 bg-teal-400 text-white font-semibold rounded-lg shadow-md hover:bg-teal-500 transition-colors text-base">
            Install Now ( {size} MB)
          </button>
        </div>
      </div>

      <div className="py-8">
        <h2 className="py-2 pl-16 pt-5">Ratings</h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={ratings}
            layout="vertical" // 🔹 makes it vertical
            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" reversed />
            <Tooltip />
            <Bar
              dataKey="count"
              fill="#3b82f6"
              barSize={30}
              radius={[0, 6, 6, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="pb-7 flex gap-2.5">
           description :  <p className="text-[#00000066]">{description}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
