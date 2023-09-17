'use client';
import Autoplay from 'embla-carousel-autoplay';

export const Carousel = ({ data }) => {
  const [emblaRef] = useEmblaCarousel([Autoplay()]);

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {data.map(({ header, description, img }, index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__number'>
                <span>{index + 1}</span>
              </div>
              <h4>{header}</h4>
              <h2>{description}</h2>
              <img className='embla__slide__img' src={img} alt='Your alt text' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
