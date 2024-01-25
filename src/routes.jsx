import { createBrowserRouter } from 'react-router-dom';
import App from './Page/App';
import Home from './Page/Home';
import MainLayout from './Page/MainLayout';
import Product from './Page/Product';
import ProductMini from './Page/ProductMini';
import ProductMiniDe from './Page/ProductMiniDe';
import ProductMiniPicture from './Page/ProductMiniPicture';
import ProductQTG from './Page/ProductQTG';
import Verify from './Page/Verify';
import ProductNLN from './Page/ProductNLN';
import ProductW1 from './Page/ProductW1';
import ProductW2 from './Page/ProductW2';
import ProductPBC from './Page/ProductPBC';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Product />,
      },
      {
        path: '/mini',
        element: <ProductMini />,
      },
      {
        path: '/picture',
        element: <ProductMiniPicture />,
      },
      {
        path: '/de',
        element: <ProductMiniDe />,
      },
      {
        path: '/qtg',
        element: <ProductQTG />,
      },
      {
        path: '/pbc',
        element: <ProductPBC />,
      },
      { path: '/nln', element: <ProductNLN /> },
      {
        path: '/w1',
        element: <ProductW1 />,
      },
      {
        path: '/w2',
        element: <ProductW2 />,
      },
    ],
  },
  {
    path: '/verify',
    element: <Verify />,
  },
  {
    path: '/login',
    element: <App />,
  },
]);
