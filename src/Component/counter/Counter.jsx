import React from "react";

const Counter = () => {
  return (
    <div className="bg-purple-700 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="flex  justify-center items-start max-[550px]:flex-col max-[550px]:items-center  space-y-12">
          <div className="flex-1">
            <p className="text-[14px] uppercase tracking-wider opacity-80 mb-2">
              Total Downloads
            </p>
            <p className="text-5xl font-bold mb-1">29.6M</p>
            <p className="text-base text-green-300">21% More Than Last Month</p>
          </div>

          <div className="flex-1" >
            <p className="text-[14px] uppercase tracking-wider opacity-80 mb-2">
              Total Reviews
            </p>
            <p className="text-5xl font-bold mb-1">906K</p>
            <p className="text-base text-green-300">46% More Than Last Month</p>
          </div>

          <div className="flex-1 ">
            <p className="text-[14px] uppercase tracking-wider opacity-80 mb-2">
              Active Apps
            </p>
            <p className="text-5xl font-bold mb-1">132+</p>
            <p className="text-base text-green-300">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
