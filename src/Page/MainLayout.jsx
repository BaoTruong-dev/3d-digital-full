import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MainLayout = () => {
  const { pathname } = useLocation();
  const { token } = useSelector((state) => state.auth);
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  //  || localStorage.getItem("token")

  useEffect(() => {
    if (token) {
      nav("/");
    } else {
      nav("/login");
    }
  }, [token, nav]);
  return (
    <div className="flex justify-between flex-col h-full">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
