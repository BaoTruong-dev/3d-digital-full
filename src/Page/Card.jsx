import React from "react";
import Image from "../assets/Image/TuongChamPa.png";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/mini");
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
        <p className="my-font-bold">Tượng ChămPa</p>
        <p className="text-sm truncate-2 text-gray-600">
          Điêu khắc đá ChămPa là một loại hình điêu khắc của nghệ thuật Chămpa.
          Các tác phẩm điêu khắc này thường được gắn liền với các công trình
          kiến trúc cổ Việt Nam, tạo thành một tổng thể nghệ thuật hoàn chỉnh.
          Các hiện vật điêu khắc đá Chămpa quý hiếm hiện được lưu giữ tại nhiều
          bảo tàng ở Việt Nam và các quốc gia khác trên thế giới.
        </p>
      </div>
    </div>
  );
};

export default Card;
