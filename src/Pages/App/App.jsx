import React, { useEffect, useState } from "react";
import { useDataHook } from "../../hooks/useDataHook";
import SingleCard from "../Home/SingleCard";
import { FadeLoader } from "react-spinners";
import { Link } from "react-router";

const App = () => {
  let { data, loading } = useDataHook();
  let collectData = data?.data;

  let [storeData, setStoreData] = useState();
  let [inputChack,setInputChack]=useState("")
  useEffect(() => {
    setStoreData(collectData);
  }, [collectData]);

  let handleclick = (e) => {
    let inputVal = e.target.value;
    setInputChack(inputVal)
    let conVal = inputChack.trim().toLowerCase();
    let filter =
      collectData.filter((mydata) =>
        mydata.title.toLowerCase().includes(conVal)
      ) || [];
    setStoreData(filter);
  };
  let showall=()=>{
     setInputChack("")
     setStoreData(collectData)
  }

  return (
    <div className="w-10/12 m-auto">
      <div className="text-center py-5">
        <h1 className="font-bold text-3xl">Our All Applications</h1>
        <p className="mt-3 text-[#0000007b]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between pt-8">
        <h2>Apps Found ({storeData?.length})</h2>
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
          <input
            type="search"
            onChange={handleclick}
            required
            placeholder="Search App"
             value={inputChack}
          />
        </label>
      </div>

      {loading === true ? (
        <div className="w-full h-screen flex justify-center m-auto items-center text-center">
          <FadeLoader />
        </div>
        ) : storeData?.length > 0 ? (
        <div className="grid grid-cols-4 gap-3 pt-5">
          {
          storeData?.map((mydata) => (
          <SingleCard key={mydata?.id} mydata={mydata}></SingleCard>
          ))}
        </div>
      ) : (
        <div className=" w-full">
          <h1 className="text-center mt-10 font-bold text-3xl text-[#00000077]">There is no data found</h1>
        <button onClick={showall} className="btn btn-primary m-auto flex  mt-6">Show All App</button>
        </div>
      )}
    </div>
  );
};

export default App;