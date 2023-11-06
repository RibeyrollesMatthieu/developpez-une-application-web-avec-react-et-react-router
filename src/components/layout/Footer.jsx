import { Logo } from '@/components/Logo';
import '@/styles/layout/footer.scss';

export const Footer = () => {
  return (
    <footer className='root-footer'>
      <Logo iswhite />

      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
