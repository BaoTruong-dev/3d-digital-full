import React from "react";
import PinInput from "react-pin-input";
import BackgroundLogin from "../assets/Image/bgLogin.png";

const Verify = () => {
  return (
    <div className="relative grid place-items-center">
      <div className="py-10 px-8 bg-white rounded-2xl absolute mx-11">
        <p className="text-3xl font-bold gap-1">Xác minh số điện thoại</p>
        <p className="max-w-[416px] mt-1">
          Nhập mã pin chúng tôi vừa gửi cho bạn
        </p>
        <div>
          <p className="font-bold mt-6">Mã pin</p>
        </div>
        <PinInput
          length={6}
          initialValue=""
          secret
          secretDelay={100}
          onChange={(value, index) => {}}
          type="numeric"
          inputMode="number"
          style={{ padding: "10px" }}
          inputStyle={{ borderColor: "gray" }}
          inputFocusStyle={{ borderColor: "blue" }}
          onComplete={(value, index) => {}}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
        <p className="text-center text-white bg-purple-100 p-3 rounded-[999px]">
          Tiếp tục
        </p>
      </div>

      <img
        className="w-screen h-screen object-cover object-center"
        src={BackgroundLogin}
        alt=""
      />
    </div>
  );
};

export default Verify;
