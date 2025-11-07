import React from "react";
import playstore from "../../assets/google-play.png";
import heroPng from "../../assets/hero.png";

const Herotop = () => {
  return (
    <div className="w-10/12 m-auto text-center">
      <h1 className="m-auto flex flex-col font-bold text-5xl max-[575px]:text-4xl max-[575px]:pt-3 pt-9 pb-3.5">
        We Build
        <div className="flex gap-2.5 m-auto">
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
            Productive
          </span>
          Apps
        </div>
      </h1>
      <p className="w-[790px] max-[975px]:w-full m-auto text-[#898080]">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex items-center gap-5 justify-center mt-5">
        <button className="btn bg-white text-black border-[#e5e5e5] flex items-center">
          <img src={playstore} alt="playstore" width={15} height={15} />

          <a href="https://play.google.com/store/games?hl=en">Google Play</a>
        </button>

        <button className="btn bg-white text-black border-[#e5e5e5] flex items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="playstore" width={15} height={15} />

          <a href="https://www.apple.com/app-store/"> App Store</a>
        </button>
      </div>

      <img src={heroPng} alt="hero png" width={500} className="m-auto mt-6" />
    </div>
  );
};

export default Herotop;
