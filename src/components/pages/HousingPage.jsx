import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '@/styles/pages/housingpage.scss';
import { Tag } from '@/components/Tag';
import { Dropdown } from '@/components/Dropdown';
import { Rating } from '@/components/Rating';
import { Host } from '@/components/Host';
import { Carousel } from '@/components/Carousel';
import { Spinner } from '@/components/Spinner';

export const HousingPage = () => {
  const { id } = useParams();
  const { data: housings } = useFetch('/api/housings.json');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!housings) return;

    setData(housings.find((housing) => housing.id === id));
  }, [housings, id]);

  return (
    <>
      <div className='housing-content'>
        <div className='housing-carousel'>
          <Carousel images={data?.pictures} />
        </div>

        {!data && <Spinner />}

        {data && (
          <>
            <div className='housing-details'>
              <div className='housing-details-start'>
                <p className='housing-title'>{data.title}</p>
                <p className='housing-location'>{data.location}</p>
                <div className='housing-tags'>
                  {data.tags.map((tag) => (
                    <Tag label={tag} key={tag} />
                  ))}
                </div>
              </div>

              <div className='housing-details-end'>
                <div className='housing-rating'>
                  <Rating note={data.rating} />
                </div>

                <div className='housing-host'>
                  <Host {...data.host} />
                </div>
              </div>
            </div>

            <div className='housing-dropdowns'>
              <Dropdown title='Description' content={data.description} />
              <Dropdown title='Équipements' contentList={data.equipments} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
