import React from "react";
import appEror from "../../assets/App-Error.png"
import { Link } from "react-router";
const ComponentError = () => {
  return (
    <div>
      <div className="w-10/12 m-auto text-center">
        <img src={appEror} className="flex m-auto w-[300px]" />
        <h1 className="text-3xl font-bold">OPPS!! APP NOT FOUND</h1>
        <p className="text-[13px] text-[#00000088] py-3">
          The App you are requesting is not found on our system.  please try another apps
        </p>
  
        <Link to={"/"}>
          <button className="btn btn-primary mb-5">Go back</button>
        </Link>
      </div>
    </div>
  );
};

export default ComponentError;
