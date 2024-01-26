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
import image from "../assets/Image/qtg.jpg";

const Model3d = ({ url }) => {
  const { scene } = useGLTF(url);
  scene.position.set(0, 0, 0);
  return <primitive object={scene} />;
};

const ProductW2 = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const nav = useNavigate();
  const handleBack = () => {
    nav("/");
  };

  return (
    <div className="lg:px-16 max-lg:px-6">
      {/* <button
        onClick={handleBack}
        className="flex rounded-[999px] gap-2 border border-primary-500 px-4 py-2"
      >
        <img src={Back} alt="" />
        <p>Quay lại</p>
      </button> */}
      {/* <img className="mt-8" src={Rectangle41} alt="" /> */}
      <div className="lg:h-[684px] lg:mt-8 max-lg:mt-6 max-lg:h-[316px] relative bg-gray-200">
        <Canvas

          camera={{
            position: [0, 0, 50],
            near: 0.1,
            far: 1000,
            fov: 45,
          }}
        >
          <directionalLight position={[0, 30, 70]} />
          <ambientLight intensity={2.5} />
          <Suspense fallback={null}>
            {/* <Environment preset="forest" background blur={0.5} /> */}
            <Model3d
              url={
                isMobile ? 'models/go_2.glb' : '/models/go_2.glb'
              }
            />
            <OrbitControls
              target={[0, 0, 0]}
              maxDistance={80}
              minDistance={30}
              minPolarAngle={0.5}
              maxPolarAngle={5}
            />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
      {/* <div className="my-4">
        <p className="my-font-bold max-lg:text-base lg:text-2xl">
          Mộc Bản 2
        </p>
        <p className="max-lg:text-xs lg:text-xl text-gray-600">
          <br />
          Mộc Bản, còn được biết đến với chữ Hán là 木板, nằm ở số 1 đường 23 tháng 8, thành phố Huế, là điểm đến lý tưởng để khám phá văn hóa và lịch sử Việt Nam. Đây là một không gian lưu giữ và trưng bày những di tích, vật dụng cổ kính, tái hiện cuộc sống dân dụ xưa qua từng chi tiết nhỏ. Được UNESCO ghi tên vào danh mục Di sản thế giới từ ngày 11 tháng 12 năm 1993, Mộc Bản là điểm đến thu hút du khách, mang đến trải nghiệm tuyệt vời về văn hóa và lịch sử đậm chất Việt Nam.
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
      </div> */}
    </div>
  );
};

export default ProductW2;
