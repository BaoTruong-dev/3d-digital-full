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
import image from "../assets/Image/to.png";

const Model3d = ({ url }) => {
  const { scene } = useGLTF(url);
  scene.position.set(0, 0, 0);
  return <primitive object={scene} />;
};

const ProducW1 = () => {
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
      <div className="lg:h-[684px] lg:mt-8 max-lg:mt-6 max-lg:h-[316px] relative  bg-gray-200">
        <Canvas
          // camera={{
          //   position: [0, 10, 100],
          //   near: 0.1,
          //   far: 100,
          //   fov: 45,
          // }}
          camera={{
            // position: [0, 15, 70],
            position: [0, 0, 50],
            near: 0.1,
            far: 1000,
            fov: 45,
          }}


        >

          <Suspense fallback={null}>
            {/* <Environment preset="forest" background blur={0.5} /> */}
            <directionalLight position={[0, 30, 70]} />
            <ambientLight intensity={3} />
            <Model3d
              url={
                isMobile ? 'models/go_1.glb' : '/models/go_1.glb'
              }
            />

            <OrbitControls
              // target={[0, 0, 0]}
              // maxDistance={200}
              // minDistance={50}
              // minPolarAngle={0.5}
              // maxPolarAngle={5}

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
      <div className="my-4">
        <p className="my-font-bold max-lg:text-base lg:text-2xl">
          Mộc Bản 1
        </p>
        <p className="max-lg:text-xs lg:text-xl text-gray-600">
          <br />
          Bảo tàng Mộc Bản, thường được viết bằng chữ Hán là 木板, mang đến cho du khách một hành trình ngược thời gian đầy hấp dẫn trong lòng thành phố Huế. Nằm yên tại số 1 đường 23 tháng 8, nơi này không chỉ là một bảo tàng lịch sử và văn hóa, mà còn là một khám phá đắm chìm trong hồn quê Việt, nơi những truyền thống và câu chuyện xưa được tái hiện sống động.
          Mộc Bản là một tượng điêu khắc ngoại cảnh của cuộc sống dân dụ xưa, nơi những mái nhà truyền thống, những cánh đồng lúa bát ngát và những chiếc gánh nước lưng bát ngát tạo nên một bức tranh hòa quyện giữa con người và thiên nhiên. Các triển lãm tại đây không chỉ là những bảo vật cổ kính, mà còn là những câu chuyện lịch sử được kể qua từng chiếc cửa, từng bức tượng gốc và từng dòng suối uốn lượn.
          Nhìn chung, Mộc Bản không chỉ là một nơi giữ gìn di sản quý báu, mà còn là một chặng đường du lịch văn hóa đẹp như tranh, là lời kể của một quá khứ đẹp đẽ, lưu giữ trong trái tim của người Việt và là cầu nối giữa thế hệ hiện tại và những dấu tích quý giá của quá khứ.
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

export default ProducW1;
