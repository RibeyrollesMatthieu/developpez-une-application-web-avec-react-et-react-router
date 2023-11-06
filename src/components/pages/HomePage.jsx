import { Hero } from '@/components/Hero';
import { Card } from '@/components/Card';
import { useFetch } from '@/hooks/useFetch';
import '@/styles/pages/homepage.scss';

export const HomePage = () => {
  const { data } = useFetch('/api/housings.json');

  return (
    <>
      <Hero imageName='homepage-hero-image.jpg'>
        <p>Chez vous, partout et ailleurs</p>
      </Hero>

      {data && (
        <div className='housings-list'>
          {data.map((housing) => (
            <Card key={housing.id} {...housing} />
          ))}
        </div>
      )}
    </>
  );
};
