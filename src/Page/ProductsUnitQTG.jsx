import React from "react";
import Image from "../assets/Image/qtg.jpeg";
import Ellipse from "../assets/SVG/Ellipse1.svg";
import { useNavigate } from "react-router-dom";

const ProductsUnitQTG = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/qtg");
  };
  return (
    <div
      onClick={handleClick}
      className="rounded-lg max-lg:w-60 border cursor-pointer border-gray-300 mr-5"
    >
      <img
        loading="lazy"
        className="object-cover object-center max-lg:h-44 lg:h-80"
        src={Image}
        alt=""
      />
      <div className="p-5">
        <img className="mb-3" src={Ellipse} alt="" />
        <p className="my-font-bold max-lg:text-sm">Quốc Tử Giám</p>
        <p className="text-sm truncate-2 max-lg:text-xs text-gray-600">
          Quốc Tử Giám (chữ Hán: 國子監) ở Huế, nay là Bảo tàng Lịch sử và Cách
          mạng tỉnh Thừa Thiên Huế, hiện ở số 1 đường 23 tháng 8, thành phố Huế,
          Việt Nam. <br />
          Đây là di tích trường đại học duy nhất thời phong kiến còn tồn tại ở
          Việt Nam, và là một di tích lịch sử, văn hóa có giá trị cao. Ngày 11
          tháng 12 năm 1993, Quốc Tử Giám cùng với hệ thống di tích cung đình
          triều Nguyễn đã được ghi tên vào danh mục Di sản thế giới của UNESCO.
        </p>
      </div>
    </div>
  );
};

export default ProductsUnitQTG;
