import '@/styles/components/host.scss';

const getCaps = (name) => {
  return name.match(/\b(\w)/g).join('');
};

export const Host = ({ name, picture }) => {
  return (
    <div className='host'>
      <p>
        {name.split(' ').map((part) => (
          <span key={part}>{part}</span>
        ))}
      </p>
      <img src={picture} alt={getCaps(name)} />
    </div>
  );
};
