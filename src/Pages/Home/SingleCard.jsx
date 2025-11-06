import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SingleCard = ({ mydata }) => {
  let { image, companyName, downloads, ratingAvg, title ,id} = mydata;
  console.log(mydata);

  return (
    <Link to={"/sinpleProduct"} state={mydata}>

    <div className="bg-white p-2.5 rounded-lg w-full shadow-xl">
      <div className="w-full h-[180px]">
        <img
          src={image}
          alt=""
          className="bg-[#f5f5f5] w-full h-full object-cover"
        />
      </div>
      <h2 className="py-3">
        {title}: {companyName}
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 px-1.5 text-green-400 items-center text-[13px] bg-[#f5f5f5]">
          <FaDownload></FaDownload> {downloads}
        </div>
        <div className="text-[13px] px-1.5 bg-[#f5f5f5] flex items-center gap-1 text-red-400">
          <FaStar> </FaStar> {ratingAvg}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SingleCard;
