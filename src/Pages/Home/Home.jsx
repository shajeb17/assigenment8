import React from "react";
import Herotop from "../../Component/HeroSection/Herotop";
import Counter from "../../Component/counter/Counter";
import { useDataHook } from "../../hooks/useDataHook";
import SingleCard from "./SingleCard";
import { Link } from "react-router";

const Home = () => {
  let { data } = useDataHook();
  let dataAdd = data?.data?.slice(0,8);

  return (
    <div>
      <Herotop></Herotop>
      <Counter></Counter>

      <div className="w-10/12 m-auto mt-6">
        <div className="text-center py-5">
          <h1 className="font-bold text-3xl">Trending Apps</h1>
          <p className="mt-3 text-[#0000007b]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3.5">
          {dataAdd?.map((mydata) => (
            <SingleCard key={mydata?.id} mydata={mydata}></SingleCard>
          ))}
        </div>
      </div>
      <div className="w-full flex py-5">

      <Link to={"/app"} className=" btn px-7 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white m-auto text-center items-center justify-center ">
        Show All
      </Link>
      </div>
    </div>
  );
};

export default Home;
