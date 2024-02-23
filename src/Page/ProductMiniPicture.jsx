import { Environment, Loader, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../assets/SVG/Back.svg";
import Card from "./Card";
import CardDe from "./CardDe";
import CardPicture from "./CardPicture";
import ComingSoon from "./ComingSoon";
import image from "../assets/Image/photo17.jpeg";

const Model3d = () => {
  const { scene } = useGLTF("/models/picture.glb");
  scene.position.set(-0.3, 0, 0);
  scene.rotation.set(Math.PI / 2, 0, 0);
  return <primitive object={scene} />;
};
const ProductMiniPicture = () => {
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
      <div className="lg:h-[684px] lg:mt-8 max-lg:mt-6 max-lg:h-[316px] relative bg-gray-200">
        <Canvas
          camera={{
            position: [0, 0, 20],
            near: 0.1,
            far: 1000,
            fov: 45,
          }}
        >
          <directionalLight intensity={1} position={[0, 10, 0]} />
          <ambientLight intensity={3} />
          <Suspense fallback={null}>
            {/* <Environment preset="sunset" background blur={0.5} /> */}
            <Model3d />
            <OrbitControls
              // target={[0, 15, 0]}
              maxDistance={200}
              minDistance={7}
            // minPolarAngle={0.5}
            // maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
      <div className="my-4">
        <p className="my-font-bold max-lg:text-base lg:text-2xl py-4">
          Tranh của Lê Bá Đảng
        </p>
        <p className="max-lg:text-xs lg:text-xl text-gray-600">
          Lê Bá Đảng là một họa sĩ nổi tiếng, ông sinh ra tại làng Bích La Đông,
          xã Triệu Đông, huyện Triệu Phong, tỉnh Quảng Trị; mất tại Paris, Cộng
          hòa Pháp, thọ 94 tuổi.
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

export default ProductMiniPicture;
