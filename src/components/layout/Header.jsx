import { Logo } from '@/components/Logo';
import '@/styles/layout/header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='root-header'>
      <div className='content'>
        <Logo />

        <nav>
          <ul>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/about'>À propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
