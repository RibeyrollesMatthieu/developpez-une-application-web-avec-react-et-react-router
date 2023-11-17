import { Spinner } from '@/components/Spinner';
import { CarouselButton } from '@/components/icons/CarouselButton';
import '@/styles/components/carousel.scss';
import { useState } from 'react';

export const Carousel = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previous = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const next = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className='carousel'>
      {images.length > 1 && (
        <div className='carousel-controller'>
          <div className='carousel-buttons'>
            <button className='carousel-button carousel-button-previous' onClick={previous}>
              <CarouselButton />
            </button>
            <button className='carousel-button carousel-button-next' onClick={next}>
              <CarouselButton />
            </button>
          </div>

          <div className='carousel-indicator'>
            {currentSlide + 1} / {images.length}
          </div>
        </div>
      )}

      <div className='carousel-slider'>
        <div className='carousel-slide'>
          {images.length === 0 && <Spinner />}
          <img src={images[currentSlide]} alt='' />
        </div>
      </div>
    </div>
  );
};
