import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
