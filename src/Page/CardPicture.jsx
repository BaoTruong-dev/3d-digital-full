import React from "react";
import Image from "../assets/Image/picture.png";
import { useNavigate } from "react-router-dom";

const CardPicture = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/picture");
  };
  return (
    <div
      onClick={handleClick}
      className="rounded-lg border cursor-pointer border-gray-300"
    >
      <img
        loading="lazy"
        className="lg:h-80 max-lg:h-40 w-full object-cover object-center"
        src={Image}
        alt=""
      />
      <div className="p-5">
        <p className="my-font-bold">Tranh của Lê Bá Đảng</p>
        <p className="text-sm truncate-2 text-gray-600">
          Lê Bá Đảng là một họa sĩ nổi tiếng, ông sinh ra tại làng Bích La Đông,
          xã Triệu Đông, huyện Triệu Phong, tỉnh Quảng Trị; mất tại Paris, Cộng
          hòa Pháp, thọ 94 tuổi.
        </p>
      </div>
    </div>
  );
};

export default CardPicture;
