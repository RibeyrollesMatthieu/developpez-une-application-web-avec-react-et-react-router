import { RootLayout } from '@/components/layout/RootLayout';
import { NotFoundPage } from '@/components/pages/NotFoundPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        lazy: async () => {
          let { HomePage } = await import('@/components/pages/HomePage');
          return { Component: HomePage };
        },
      },
      {
        path: 'about',
        lazy: async () => {
          let { AboutPage } = await import('@/components/pages/AboutPage');
          return { Component: AboutPage };
        },
      },
      {
        path: 'housings/:id',
        lazy: async () => {
          let { HousingPage } = await import('@/components/pages/HousingPage');
          return { Component: HousingPage };
        },
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
