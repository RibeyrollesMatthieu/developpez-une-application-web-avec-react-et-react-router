import '@/styles/components/hero.scss';

export const Hero = ({ children, imageName }) => {
  return (
    <section className='hero' style={{ backgroundImage: `url('/src/assets/${imageName}')` }}>
      <div className='hero-content'>{children}</div>
    </section>
  );
};
