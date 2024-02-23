import { Environment, Loader, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../assets/SVG/Back.svg';
import Card from './Card';
import CardDe from './CardDe';
import CardPicture from './CardPicture';
import ComingSoon from './ComingSoon';
import { useMediaQuery } from './hook';
import image from '../assets/Image/nhakyliem.jpeg';

const Model3d = ({ url }) => {
  const { scene } = useGLTF(url);
  scene.position.set(0, 0, 0);
  scene.rotation.set(0, -Math.PI, 0);
  return <primitive object={scene} />;
};

const ProductNLN = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  const nav = useNavigate();
  const handleBack = () => {
    nav('/');
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
            position: [0, 10, 30],
            near: 0.1,
            far: 1000,
            fov: 45,
          }}
        >
          <directionalLight color="white" position={[-50, 10, 25]} />
          <directionalLight color="white" position={[50, 10, 25]} />
          <Suspense fallback={null}>
            <Environment preset="forest" background blur={0.5} />
            <Model3d
              url={
                isMobile ? 'models/nlnhcmfull.glb' : '/models/nlnhcmfull.glb'
              }
            />
            <OrbitControls
              target={[0, 0, 0]}
              maxDistance={50}
              minDistance={10}
              minPolarAngle={0.5}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
      <div className="mt-4">
        <p className="my-font-bold max-lg:text-base lg:text-2xl">
          {' '}
          Nhà lưu niệm Chủ tịch Hồ Chí Minh
        </p>
        <p className="max-lg:text-xs lg:text-xl text-gray-600">
          <br />
          Năm 1894, ông Nguyễn Sinh Sắc (thân sinh Chủ tịch Hồ Chí Minh) thi đỗ
          Cử nhân ở trường thi Hương Nghệ An, năm 1895 ông vào Huế thi Hội nhưng
          không đỗ. Để chuẩn bị cho kỳ thi sau, ông xin vào học trường Quốc Tử
          Giám - Huế và được chấp nhận. Để có điều kiện chăm sóc con cái, và gia
          đình cũng là nguồn động viện ông trong những tháng ngày đèn sách, ông
          về quê, cùng vợ là bà Hoàng Thị Loan đưa hai con trai là Nguyễn Sinh
          Khiêm và Nguyễn Sinh Cung vào Huế. Nhờ người quen giới thiệu, ông thuê
          được một gian nhà nhỏ ở đường Đông Ba (là ngôi nhà di tích hiện nay).
        </p>
      </div>
      <img className="mx-auto py-3" src={image} alt="" />
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

export default ProductNLN;
