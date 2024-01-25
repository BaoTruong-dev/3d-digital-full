import React from "react";
import Logo from "../assets/Image/logo.png";
import LogoHue from "../assets/Image/logoHue.png";

const Header = () => {
  return (
    <div className="mx-16 py-10 flex gap-6 max-lg:mx-5 max-lg:py-6 cursor-pointer">
      <img src={LogoHue} alt="" />
      <img src={Logo} alt="" />
      <p className="grid place-items-center">Di sản bảo tồn liên kết </p>
    </div>
  );
};

export default Header;
