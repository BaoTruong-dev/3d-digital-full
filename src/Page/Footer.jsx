import React from "react";

const Footer = () => {
  return (
    <div className="grid lg:gap-8 border-t lg:py-12 lg:px-40 max-lg:px-5 max-lg:py-8">
      <div className="lg:text-center max-lg:py-3">
        <p className="my-font-bold max-lg:text-lg lg:text-xl">
          Bảo tàng liên kết
        </p>
      </div>
      <div className="lg:flex lg:place-content-center lg:gap-20 max-lg:grid max-lg:gap-3">
        <div className="grid gap-3 text-gray-600">
          <p>Sở Văn Hoá và Thể Thao TP. HCM</p>
          <p>Trung Tâm Bảo Tồn Di Tích TP. HCM</p>
          <p>Bảo Tàng Lịch Sử TP. HCM</p>
        </div>
        <div className="grid gap-3 text-gray-600">
          <p>Bảo Tàng Mỹ Thuật TP. HCM</p>
          <p>Bảo Tàng Tôn Đức Thắng</p>
          <p>Bảo Tàng Tôn Đức Thắng</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
