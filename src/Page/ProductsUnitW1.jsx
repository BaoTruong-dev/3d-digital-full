import React from "react";
import Image from "../assets/Image/qtg.jpeg";
import Ellipse from "../assets/SVG/Ellipse1.svg";
import { useNavigate } from "react-router-dom";

const ProductsUnitW1 = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/w1");
  };
  return (
    <div
      onClick={handleClick}
      className="rounded-lg max-lg:w-60 border cursor-pointer border-gray-300 mr-5"
    >
      <img
        loading="lazy"
        className="object-cover object-center max-lg:h-44 lg:h-80"
        src="https://mynghengochoi.com/wp-content/uploads/2017/05/moc-ban.jpg"
        alt=""
      />
      <div className="p-5">
        <img className="mb-3" src={Ellipse} alt="" />
        <p className="my-font-bold max-lg:text-sm">Mộc Bản 1</p>
        <p className="text-sm truncate-2 max-lg:text-xs text-gray-600">
          Bảo tàng Mộc Bản, thường được viết bằng chữ Hán là 木板, mang đến cho du khách một hành trình ngược thời gian đầy hấp dẫn trong lòng thành phố Huế. Nằm yên tại số 1 đường 23 tháng 8, nơi này không chỉ là một bảo tàng lịch sử và văn hóa, mà còn là một khám phá đắm chìm trong hồn quê Việt, nơi những truyền thống và câu chuyện xưa được tái hiện sống động.
          Mộc Bản là một tượng điêu khắc ngoại cảnh của cuộc sống dân dụ xưa, nơi những mái nhà truyền thống, những cánh đồng lúa bát ngát và những chiếc gánh nước lưng bát ngát tạo nên một bức tranh hòa quyện giữa con người và thiên nhiên. Các triển lãm tại đây không chỉ là những bảo vật cổ kính, mà còn là những câu chuyện lịch sử được kể qua từng chiếc cửa, từng bức tượng gốc và từng dòng suối uốn lượn.
          Nhìn chung, Mộc Bản không chỉ là một nơi giữ gìn di sản quý báu, mà còn là một chặng đường du lịch văn hóa đẹp như tranh, là lời kể của một quá khứ đẹp đẽ, lưu giữ trong trái tim của người Việt và là cầu nối giữa thế hệ hiện tại và những dấu tích quý giá của quá khứ.
        </p>
      </div>
    </div>
  );
};

export default ProductsUnitW1;
