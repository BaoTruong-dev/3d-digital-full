import { Environment, Loader, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../assets/SVG/Back.svg";
import Card from "./Card";
import CardDe from "./CardDe";
import CardPicture from "./CardPicture";
import ComingSoon from "./ComingSoon";
import { useMediaQuery } from "./hook";
import image from "../assets/Image/pbc.jpeg";

const Model3d = ({ url }) => {
  const { scene } = useGLTF(url);
  scene.position.set(0, -5, 0);
  return <primitive object={scene} />;
};

const ProductPBC = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const nav = useNavigate();
  const handleBack = () => {
    nav("/");
  };

  return (
    <div className="lg:px-16 max-lg:px-6">
      <button
        onClick={handleBack}
        className="flex rounded-[999px] gap-2 border border-primary-500 px-4 py-2"
      >
        <img src={Back} alt="" />
        <p>Quay lại</p>
      </button>
      {/* <img className="mt-8" src={Rectangle41} alt="" /> */}
      <div className="lg:h-[684px] lg:mt-8 max-lg:mt-6 max-lg:h-[316px] relative">
        <Canvas
          camera={{
            position: [0, 10, 50],
            near: 0.1,
            far: 1000,
            fov: 45,
          }}
        >
          {/* <directionalLight color="white" position={[0, 100, 25]} /> */}

          <Suspense fallback={null}>
            <Environment preset="forest" background blur={0.5} />
            <Model3d url={isMobile ? "models/qtg.glb" : "/models/qtg.glb"} />
            <OrbitControls
              target={[0, 0, 0]}
              maxDistance={200}
              minDistance={50}
              minPolarAngle={0.5}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
      <div className="my-4">
        <p className="my-font-bold max-lg:text-base lg:text-2xl">
          Lăng mộ cụ Phan Bội Châu
        </p>
        <p className="max-lg:text-xs lg:text-xl text-gray-600">
          <br />
          Lăng mộ cụ Phan Bội Châu: Lăng mộ được cụ Phan Bội Châu định vị sẵn từ
          năm 1934, nằm ngay phía trước ngôi nhà ở và chính giữa khu vườn. Sau
          khi cụ Phan qua đời (29/10/1940) với số tiền phúng điếu của đồng bào
          trong cả nước, cụ Huỳnh Thúc Kháng đã đứng ra xây dựng ngôi mộ và nhà
          thờ. Mộ có chiều dài 7m, ngang 5m, có 5 bậc tam cấp cao 0,8m, cách
          bình phong phía đầu mộ chừng 1m là tấm bia cao 1,8m, rộng 0,8m, trên
          mặt bia có bài “Tự Minh” bằng chữ Hán do cụ Phan viết năm 1934
        </p>
      </div>
      <img className="mx-auto" src={image} alt="" />

      <div className="border border-gray-100 lg:hidden my-10"></div>
      <div className="lg:mt-16 lg:mb-12">
        <p className="my-font-bold lg:text-2xl max-lg:text-sm ">
          MỘT SỐ HIỆN VẬT KHÁC
        </p>
        <p className="text-gray-600 max-lg:text-xs lg:text-xl">
          Sở văn hoá và thể theo Thành phố Hồ Chí Minh
        </p>
      </div>
      <div className="grid lg:grid-cols-4 lg:gap-8 max-lg:gap-5 lg:mb-16 max-lg:my-6">
        <Card />
        <CardDe />
        <CardPicture />
        <ComingSoon />
      </div>
    </div>
  );
};

export default ProductPBC;
