import React from "react";
import Image from "../assets/Image/qtg.jpeg";
import Ellipse from "../assets/SVG/Ellipse1.svg";
import { useNavigate } from "react-router-dom";

const ProductsUnitW2 = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/w2");
  };
  return (
    <div
      onClick={handleClick}
      className="rounded-lg max-lg:w-60 border cursor-pointer border-gray-300 mr-5"
    >
      <img
        loading="lazy"
        className="object-cover object-center max-lg:h-44 lg:h-80"
        src="https://toquoc.mediacdn.vn/2019/1/31/5-dai-nam-nhat-thong-chi-15489284343381013431450.jpg"
        alt=""
      />
      <div className="p-5">
        <img className="mb-3" src={Ellipse} alt="" />
        <p className="my-font-bold max-lg:text-sm">Mộc bản 2</p>
        <p className="text-sm truncate-2 max-lg:text-xs text-gray-600">
          Mộc Bản, còn được biết đến với chữ Hán là 木板, nằm ở số 1 đường 23 tháng 8, thành phố Huế, là điểm đến lý tưởng để khám phá văn hóa và lịch sử Việt Nam. Đây là một không gian lưu giữ và trưng bày những di tích, vật dụng cổ kính, tái hiện cuộc sống dân dụ xưa qua từng chi tiết nhỏ. Được UNESCO ghi tên vào danh mục Di sản thế giới từ ngày 11 tháng 12 năm 1993, Mộc Bản là điểm đến thu hút du khách, mang đến trải nghiệm tuyệt vời về văn hóa và lịch sử đậm chất Việt Nam.
        </p>
      </div>
    </div>
  );
};

export default ProductsUnitW2;
