import React from "react";
import Image from "../assets/Image/de.png";
import { useNavigate } from "react-router-dom";

const CardDe = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/de");
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
        <p className="my-font-bold">Đôn Sứ Vuông</p>
        <p className="text-sm truncate-2 text-gray-600">
          Đôn sứ vuông thuộc dòng sứ màu, có niên đại khoảng giữa thế kỉ XIX,
          xuất sứ từ Trung Quốc. Đôn Sứ được dùng để trang trí nội ngoại thất
          các cung điện, được trang trí hoạ tiết hoa văn phong phú gồm nhiều bố
          cục hoa văn.
        </p>
      </div>
    </div>
  );
};

export default CardDe;
