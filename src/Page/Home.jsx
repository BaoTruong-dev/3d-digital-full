import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import React, { useState } from "react";
import Card from "./Card";
import ProductUnit from "./ProductsUnit";
import NameUnitCard from "./NameUnitCard";
import CardDe from "./CardDe";
import CardPicture from "./CardPicture";
import ComingSoon from "./ComingSoon";
import ProductsUnitQTG from "./ProductsUnitQTG";
import ProductsUnitPBC from "./ProductsUnitPBC";
import ProductsUnitDHT from "./ProductsUnitDHT";
import ProductsUnitW1 from "./ProductsUnitW1";
import ProductsUnitW2 from "./ProductsUnitW2";

const Home = () => {
  const [see, setSee] = useState(false);
  const [button, setButton] = useState(true);
  const handleSee = () => {
    setSee(!see);
    setButton(false);
  };

  return (
    <div className="lg:px-16 max-lg:p-5">
      <div className="text-center lg:py-16">
        <p className="text-8xl max-lg:text-3xl my-font-bold">Số Hoá Di Sản</p>
        <p className="text-6xl my-font-bold text-transparent bg-clip-text bg-purple-200 lg:pt-4 lg:pb-6 max-lg:text-2xl">
          Công Nghệ 3D
        </p>
        <div className="grid place-items-center">
          <p className="max-w-[900px] self-auto text-xl max-lg:text-sm text-gray-600">
            Công nghệ 3D đã giúp tái tạo chi tiết, kích thước và hình dáng của
            các đối tượng cổ điển, di tích lịch sử một cách chân thực và hấp
            dẫn.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 py-16 max-lg:hidden">
        <ProductUnit />
        <ProductsUnitQTG />
        <ProductsUnitPBC />
        <ProductsUnitDHT />
        <ProductsUnitW1 />
        <ProductsUnitW2 />
      </div>

      <div className="lg:hidden select-none py-5">
        <ScrollingCarousel>
          <ProductUnit />
          <ProductsUnitQTG />
          <ProductsUnitPBC />
          <ProductsUnitDHT />
          <ProductsUnitW1 />
          <ProductsUnitW2 />
        </ScrollingCarousel>
      </div>
      <div className="lg:py-16">
        <p className="text-5xl max-lg:text-xl my-font-bold text-center">
          Các bảo tàng liên kết
        </p>
        <NameUnitCard />
        <div className="grid lg:grid-cols-4 gap-8 max-lg:gap-5">
          <Card />
          <CardDe />
          <CardPicture />
          <ComingSoon />
        </div>

        {see && (
          <div className="grid lg:grid-cols-4 mt-8 gap-8 max-lg:gap-5">
            <ComingSoon />
            <ComingSoon />
            <ComingSoon />
            <ComingSoon />
            <ComingSoon />
            <ComingSoon />
            <ComingSoon />
            <ComingSoon />
          </div>
        )}
        {button && (
          <div className="text-center">
            <button
              onClick={handleSee}
              className="px-6 py-3 bg-purple-100 text-white text-xl my-font-bold cursor-pointer transition hover:opacity-70 mt-12 rounded-[999px]"
            >
              Xem thêm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
