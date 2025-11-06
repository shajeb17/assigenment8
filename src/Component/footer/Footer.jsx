import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex justify-between max-[715px]:grid max-[500px]:grid-cols-1 max-[715px]:grid-cols-2 bg-[#111827] text-gray-300 p-10">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">AppStore.io</h2>
        <p className="max-w-xs text-sm">
          Discover and download the best apps and games. Your one-stop platform
          for everything mobile!
        </p>

      </div>

      <div>
        <h6 className="text-[16px] text-white">Categories</h6>
        <p>Games</p>
        <p>Productivity</p>
        <p>Entertainment</p>
        <p>Education</p>
      </div>

      <div>
        <h6 className="text-[16px] text-white">Company</h6>
        <p>About Us</p>
        <p>Contact</p>
        <p>Careers</p>
        <p>Press Kit</p>
      </div>

      <div>
        <h2 className="text-[16px] text-white">Legal</h2>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
