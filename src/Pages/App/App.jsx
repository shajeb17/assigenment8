import React from "react";
import { useDataHook } from "../../hooks/useDataHook";
import SingleCard from "../Home/SingleCard";

const App = () => {
  let { data } = useDataHook();
  let collectData = data?.data;
  console.log(collectData);

  return (
    <div className="w-10/12 m-auto">
      <div className="text-center py-5">
        <h1 className="font-bold text-3xl">Our All Applications</h1>
        <p className="mt-3 text-[#0000007b]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between pt-8">
        <h2>Apps Found ({collectData?.length})</h2>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search App" />
        </label>
      </div>

      <div className="grid grid-cols-4 gap-3 pt-5">
        {collectData?.map((mydata) => (
          <SingleCard key={mydata?.id} mydata={mydata}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default App;
