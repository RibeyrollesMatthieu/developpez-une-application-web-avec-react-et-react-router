import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const HousingPage = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  });

  return <>This is a sample housing page.</>;
};
