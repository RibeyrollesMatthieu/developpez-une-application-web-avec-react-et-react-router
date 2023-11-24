import { Logo } from '@/components/Logo';
import '@/styles/layout/header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='root-header'>
      <div className='content'>
        <a href='/'>
          <Logo />
        </a>

        <nav>
          <ul>
            <li>
              <NavLink to='/' exact>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' exact>
                À propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
