import React from "react";
import LogoBTLS1 from "../assets/Image/logoBTLS(1).png";
import LogoBTLS from "../assets/Image/logoBTLS.png";
import LogoBTMT from "../assets/Image/logoBTMT.png";
import LogoBTTDT from "../assets/Image/logoBTTDT.png";
import LogoBTTPHCM from "../assets/Image/logoBTTPHCM.png";
import LogoSVH from "../assets/Image/logoSVH.png";
import LogoTTBTDT from "../assets/Image/logoTTBTDT.png";
import LogoHue from "../assets/Image/logoHue.png";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const NameUnitCard = () => {
  return (
    <div>
      <div className="py-12 max-lg:hidden">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl px-6 py-8 cursor-pointer hover:bg-purple-300 transition hover:text-white h-32 gap-2">
              <img src={LogoHue} alt="" />
              <p>SỞ VĂN HOÁ VÀ THỂ THAO TỈNH THỪA THIÊN HUẾ</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl px-6 py-8 cursor-pointer hover:bg-purple-300 transition hover:text-white h-32 gap-2">
              <img src={LogoSVH} alt="" />
              <p>SỞ VĂN HOÁ VÀ THỂ THAO THÀNH PHỐ HỒ CHÍ MINH</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl px-6 py-8 cursor-pointer hover:bg-purple-300 transition hover:text-white h-32 gap-2">
              <img src={LogoTTBTDT} alt="" />
              <p>TRUNG TÂM BẢO TỒN DI TÍCH THÀNH PHỐ HỒ CHÍ MINH</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl px-6 py-8 cursor-pointer hover:bg-purple-300 transition hover:text-white h-32 gap-2">
              <img src={LogoBTTDT} alt="" />
              <p>BẢO TÀNG TÔN ĐỨC THẮNG</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl px-6 py-8 cursor-pointer hover:bg-purple-300 transition hover:text-white h-32 gap-2">
              <img src={LogoBTLS} alt="" />
              <p>BẢO TÀNG LỊCH SỬ THÀNH PHỐ HỒ CHÍ MINH</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl px-6 py-8 cursor-pointer hover:bg-purple-300 transition hover:text-white h-32 gap-2">
              <img src={LogoBTMT} alt="" />
              <p>BẢO TÀNG MỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl px-6 py-8 cursor-pointer hover:bg-purple-300 transition hover:text-white h-32 gap-2">
              <img src={LogoBTTPHCM} alt="" />
              <p>BẢO TÀNG THÀNH PHỐ HỒ CHÍ MINH</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-12 lg:hidden">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl p-3 cursor-pointer h-16 hover:bg-purple-300 transition hover:text-white gap-2">
              <img src={LogoHue} alt="" />
              <p className="text-xs ">
                SỞ VĂN HOÁ VÀ THỂ THAO <br /> TỈNH THỪA THIÊN HUẾ
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl p-3 cursor-pointer h-16 hover:bg-purple-300 transition hover:text-white gap-2">
              <img src={LogoSVH} alt="" />
              <p className="text-xs ">
                SỞ VĂN HOÁ VÀ THỂ THAO <br /> THÀNH PHỐ HỒ CHÍ MINH
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl p-3 cursor-pointer h-16 hover:bg-purple-300 transition hover:text-white gap-2">
              <img src={LogoTTBTDT} alt="" />
              <p className="text-xs ">
                TRUNG TÂM BẢO TỒN DI TÍCH <br /> THÀNH PHỐ HỒ CHÍ MINH
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl p-3 cursor-pointer h-16 hover:bg-purple-300 transition hover:text-white gap-2">
              <img src={LogoBTTDT} alt="" />
              <p className="text-xs ">BẢO TÀNG TÔN ĐỨC THẮNG</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl p-3 cursor-pointer h-16 hover:bg-purple-300 transition hover:text-white gap-2">
              <img src={LogoBTLS1} alt="" />
              <p className="text-xs ">
                BẢO TÀNG LỊCH SỬ <br /> THÀNH PHỐ HỒ CHÍ MINH
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl p-3 cursor-pointer h-16 hover:bg-purple-300 transition hover:text-white gap-2">
              <img src={LogoBTMT} alt="" />
              <p className="text-xs ">
                BẢO TÀNG MỸ THUẬT <br /> THÀNH PHỐ HỒ CHÍ MINH
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex place-items-center border border-gray-300 rounded-2xl p-3 cursor-pointer h-16 hover:bg-purple-300 transition hover:text-white gap-2">
              <img src={LogoBTTPHCM} alt="" />
              <p className="text-xs ">BẢO TÀNG THÀNH PHỐ HỒ CHÍ MINH</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NameUnitCard;
