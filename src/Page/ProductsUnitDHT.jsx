import React from 'react';
import Image from '../assets/Image/nhakyliem.jpeg';
import Ellipse from '../assets/SVG/Ellipse1.svg';
import { useNavigate } from 'react-router-dom';

const ProductsUnitDHT = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav('/nln');
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
        <p className="my-font-bold max-lg:text-sm">
          Nhà lưu niệm Chủ tịch Hồ Chí Minh
        </p>
        <p className="text-sm truncate-2 max-lg:text-xs text-gray-600">
          Năm 1894, ông Nguyễn Sinh Sắc (thân sinh Chủ tịch Hồ Chí Minh) thi đỗ
          Cử nhân ở trường thi Hương Nghệ An, năm 1895 ông vào Huế thi Hội nhưng
          không đỗ. Để chuẩn bị cho kỳ thi sau, ông xin vào học trường Quốc Tử
          Giám - Huế và được chấp nhận. Để có điều kiện chăm sóc con cái, và gia
          đình cũng là nguồn động viện ông trong những tháng ngày đèn sách, ông
          về quê, cùng vợ là bà Hoàng Thị Loan đưa hai con trai là Nguyễn Sinh
          Khiêm và Nguyễn Sinh Cung vào Huế. Nhờ người quen giới thiệu, ông thuê
          được một gian nhà nhỏ ở đường Đông Ba.
        </p>
      </div>
    </div>
  );
};

export default ProductsUnitDHT;
