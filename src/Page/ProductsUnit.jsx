import React from "react";
import Image from "../assets/Image/ngomon.jpeg";
import Ellipse from "../assets/SVG/Ellipse1.svg";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/products");
  };
  return (
    <div
      onClick={handleClick}
      className="rounded-lg max-lg:w-60 border cursor-pointer border-gray-300 mr-5"
    >
      <img
        loading="lazy"
        className="object-cover object-center w-full max-lg:h-44 lg:h-80"
        src={Image}
        alt=""
      />
      <div className="p-5">
        <img className="mb-3" src={Ellipse} alt="" />
        <p className="my-font-bold max-lg:text-sm">Ngọ Môn</p>
        <p className="text-sm truncate-2 max-lg:text-xs text-gray-600">
          Ngọ Môn (tên chữ Hán: 午門) là cổng chính phía nam của Hoàng thành
          Huế. Hiện nay là một trong những di tích kiến trúc thời Nguyễn trong
          quần thể di tích cố đô Huế.
        </p>
      </div>
    </div>
  );
};

export default Card;
