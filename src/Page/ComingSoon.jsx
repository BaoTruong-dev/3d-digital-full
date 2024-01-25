import React from "react";
import Image from "../assets/Image/comingSoon.avif";

const ComingSoon = () => {
  return (
    <div className="rounded-lg border cursor-pointer border-gray-300">
      <img
        loading="lazy"
        className="lg:h-80 max-lg:h-40 w-full object-cover object-center"
        src={Image}
        alt=""
      />
      <div className="p-5">
        <p className="my-font-bold">Coming Soon</p>
        <p className="text-sm truncate-2 text-gray-600">Coming Soon.....</p>
      </div>
    </div>
  );
};

export default ComingSoon;
