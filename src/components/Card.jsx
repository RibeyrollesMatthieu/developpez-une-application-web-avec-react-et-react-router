import '@/styles/components/card.scss';

export const Card = ({ title, cover }) => {
  return (
    <div className='card' style={{ backgroundImage: `url('${cover}')` }}>
      {title && <p>{title}</p>}
    </div>
  );
};
