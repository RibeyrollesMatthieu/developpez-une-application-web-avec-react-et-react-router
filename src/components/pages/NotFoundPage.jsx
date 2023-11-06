import { Link } from 'react-router-dom';
import '@/styles/pages/not-found.scss';

export const NotFoundPage = () => {
  return (
    <div className='not-found'>
      <p className='not-found-code'>404</p>
      <p className='not-found-message'>Oups! La page que vous demandez n&apos;existe pas</p>
      <Link to='/'>Retourner sur la page d&apos;accueil</Link>
    </div>
  );
};
