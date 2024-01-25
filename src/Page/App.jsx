import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OtpInput from "otp-input-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BG from "../assets/Image/bgLogin.png";
import { setToken } from "../store/authSlice";
import auth from "./firebase.config";

function App() {
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errPh, setErrorPh] = useState(false);
  const [errOTP, setErrorOTP] = useState(false);

  const nav = useNavigate();

  function onSingUp(e) {
    setLoading(true);
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, e.target, {
        size: "invisible",
      });
    }

    signInWithPhoneNumber(auth, `+${phone}`, window.recaptchaVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        toast.success("Successfully!");
        setShowOTP(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setErrorPh(true);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        nav("/");
        dispatch(setToken(res.user.accessToken));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setErrorOTP(true);
        setLoading(false);
      });
  }

  return (
    <>
      <Toaster toastOptions={{ duration: 2000 }} />
      <div className="relative h-full w-full grid place-items-center">
        <div className="absolute bg-white rounded-2xl max-lg:mx-5">
          <div className="p-8">
            {showOTP ? (
              <div>
                <p className="text-3xl my-font-bold gap-1">
                  Xác minh số điện thoại
                </p>
                <p className="text-gray-600">
                  Nhập mã pin chúng tôi vừa gửi cho bạn
                </p>
                <div className="py-6">
                  <p className="my-font-semi-bold">Mã pin</p>
                  <OtpInput
                    className="custom-code"
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    value={otp}
                    onChange={setOtp}
                  />
                </div>
                {errOTP && (
                  <p className="font-bold text-red-500">
                    Vui lòng nhập lại mã OTP
                  </p>
                )}

                <button
                  onClick={onOTPVerify}
                  className="bg-purple-100 rounded-[999px] flex gap-1 justify-center px-6 py-3 w-full"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}

                  <span className="text-white my-font-bold">Tiếp tục</span>
                </button>
              </div>
            ) : (
              <div>
                <p className="text-3xl my-font-bold gap-1 mb-1">
                  Chào mừng bạn
                </p>
                <p className="max-w-[416px] text-gray-600">
                  Vui lòng nhập số điện thoại của bạn. Bạn sẽ nhận được một tin
                  nhắn văn bản để xác minh tài khoản của bạn.
                </p>
                <div className="py-6">
                  <p className="my-font-semi-bold">Phone number</p>
                  <PhoneInput
                    country={"vn"}
                    value={phone}
                    onChange={setPhone}
                  />
                </div>

                {errPh && (
                  <p className="text-red-500 font-bold">
                    Vui lòng kiểm tra lại số điện thoại
                  </p>
                )}

                <button
                  onClick={onSingUp}
                  className="bg-purple-100 rounded-[999px] flex gap-1 justify-center px-6 py-3 w-full"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}

                  <span className="text-white my-font-bold">Tiếp tục</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <img
          className="w-screen h-screen object-cover object-center"
          src={BG}
          alt=""
        />
      </div>
    </>
  );
}

export default App;
