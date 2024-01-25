import React from "react";
import Image from "../assets/Image/pbc.jpeg";
import Ellipse from "../assets/SVG/Ellipse1.svg";
import { useNavigate } from "react-router-dom";

const ProductsUnitPBC = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav('/pbc');
  };
  return (
    <div className="rounded-lg max-lg:w-60 border cursor-pointer border-gray-300 mr-5" onClick={handleClick}>
      <img
        loading="lazy"
        className="object-cover object-center max-lg:h-44 lg:h-80"
        src={Image}
        alt=""
      />
      <div className="p-5">
        <img className="mb-3" src={Ellipse} alt="" />
        <p className="my-font-bold max-lg:text-sm">Lăng mộ cụ Phan Bội Châu</p>
        <p className="text-sm truncate-2 max-lg:text-xs text-gray-600">
          Lăng mộ cụ Phan Bội Châu: Lăng mộ được cụ Phan Bội Châu định vị sẵn từ
          năm 1934, nằm ngay phía trước ngôi nhà ở và chính giữa khu vườn. Sau
          khi cụ Phan qua đời (29/10/1940) với số tiền phúng điếu của đồng bào
          trong cả nước, cụ Huỳnh Thúc Kháng đã đứng ra xây dựng ngôi mộ và nhà
          thờ. Mộ có chiều dài 7m, ngang 5m, có 5 bậc tam cấp cao 0,8m, cách
          bình phong phía đầu mộ chừng 1m là tấm bia cao 1,8m, rộng 0,8m, trên
          mặt bia có bài “Tự Minh” bằng chữ Hán do cụ Phan viết năm 1934
        </p>
      </div>
    </div>
  );
};

export default ProductsUnitPBC;
