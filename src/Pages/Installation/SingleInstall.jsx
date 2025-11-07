import React from "react";

const SingleInstall = ({ asdData,handleChange}) => {
  let { image, companyName, downloads, ratingAvg, title, size, id } = asdData;

  let handleClick = (id) => {
    let collectData = JSON.parse(localStorage.getItem("appid"));
    let filters = collectData.filter((data) => data !== id);
    localStorage.setItem("appid", JSON.stringify(filters));
  };

  return (
    <div className="bg-white p-4 mb-5 rounded-xl shadow-md flex items-center justify-between w-full max-w-2xl mx-auto">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
          <img src={image} alt="" />
        </div>

        <div className="flex flex-col">
          <p className="text-base font-medium text-gray-800 mb-1">
            {title}: {companyName}
          </p>

          <div className="flex items-center space-x-3 text-sm text-gray-500">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-green-500 mr-1"
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
              <span className="text-xs">{downloads}</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-400 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.31 6.91.99-5 4.88 1.18 6.88L12 18.06l-6.18 3.25L7 14.18l-5-4.88 6.91-.99L12 2z" />
              </svg>
              <span className="text-xs">{ratingAvg}</span>
            </div>

            <span className="text-xs">{size} MB</span>
          </div>
        </div>
      </div>

      {/* Right Section: Uninstall Button */}
      <button
        onClick={() => {handleClick(id);handleChange(id)}}
        className="flex-shrink-0 px-4 py-2 bg-emerald-500 text-white font-semibold text-sm rounded-full shadow-md hover:bg-emerald-600 transition-colors"
      >
        Uninstall
      </button>
    </div>
  );
};

export default SingleInstall;
