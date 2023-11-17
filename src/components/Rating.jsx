import { Star } from '@/components/icons/Star';
import '@/styles/components/rating.scss';

const getStars = (note, max) => {
  const stars = [];

  for (let i = 0; i < note; i++) {
    stars.push(<Star key={`star-${i}`} isFilled />);
  }

  for (let i = 0; i < max - note; i++) {
    stars.push(<Star />);
  }

  return stars;
};

export const Rating = ({ note = 0, max = 5 }) => {
  return <div className='rating'>{getStars(note, max)}</div>;
};
