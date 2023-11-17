import { Hero } from '@/components/Hero';
import { Card } from '@/components/Card';
import { useFetch } from '@/hooks/useFetch';
import '@/styles/pages/homepage.scss';
import { Link } from 'react-router-dom';
import { Spinner } from '@/components/Spinner';

export const HomePage = () => {
  const { data } = useFetch('/api/housings.json');

  return (
    <>
      <Hero imageName='homepage-hero-image.jpg'>
        <p>Chez vous, partout et ailleurs</p>
      </Hero>

      <div className='housings-list'>
        {!data && <Spinner />}
        {data &&
          data.map((housing) => (
            <Link to={`/housings/${housing.id}`} key={housing.id}>
              <Card {...housing} />
            </Link>
          ))}
      </div>
    </>
  );
};
