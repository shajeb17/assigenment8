import React, { useEffect, useState } from "react";
import { useDataHook } from "../../hooks/useDataHook";
import SingleInstall from "./SingleInstall";

const Installation = () => {
  let { data } = useDataHook();
  let [storeData, setStoreData] = useState();

  let addData = data?.data;

  useEffect(() => {
    let collectData = JSON.parse(localStorage.getItem("appid"));
    let filterData = addData?.filter((mydta) => collectData.includes(mydta.id));
    setStoreData(filterData);
  }, [addData]);

  let handleLow = () => {
    let lowto = [...storeData].sort((a, b) => a.size - b.size);
    setStoreData(lowto);
  };

  let handleHigh = () => {
    let highto = [...storeData].sort((a, b) => b.size - a.size);
    setStoreData(highto);
  };

  return (
    <div className="w-10/12 m-auto">
      <div className="text-center py-5">
        <h1 className="font-bold text-3xl">Your Installed Apps</h1>
        <p className="mt-3 text-[#0000007b]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="w-full py-8">
        <div className="flex items-center justify-between">
          <h1>App Found ({storeData?.length})</h1>

          <select
            className="border rounded-md px-4"
            onChange={(e) => {
              if (e.target.value === "low") {
                handleLow();
              } else if (e.target.value === "high") {
                handleHigh();
              }
            }}
          >
            <option value="">Sort by size</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </div>

        <div className="mt-6 py-3.5">
          {storeData?.map((asdData) => (
            <SingleInstall key={asdData.id} asdData={asdData}></SingleInstall>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
