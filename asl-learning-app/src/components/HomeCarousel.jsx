import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './HomeCarousel.css';
import { Link } from 'react-router-dom';


// DotButton Component
export const DotButton = ({ children, ...restProps }) => (
  <button type="button" {...restProps}>
    {children}
  </button>
);

// Custom hook: useDotButton
export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi
      .on('reInit', onInit)
      .on('reInit', onSelect)
      .on('select', onSelect);

    // Cleanup listeners on unmount
    return () => {
      emblaApi
        .off('reInit', onInit)
        .off('reInit', onSelect)
        .off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

// Main Component: HomeCarousel
const HomeCarousel = () => {
    const slides = [
        {
            image: "https://lead-academy.org/blog/wp-content/uploads/2023/01/Amercian-SIgn-Language.webp",
            title: "Fingerspelling Practice",
            link: "/Fingerspelling"
        },
        {
            image: "/images/signs.jpg",
            title: "Signs",
            link: "/signs"
        },
        {
            image: "https://sdhhns.org/wp-content/uploads/2024/07/yoodle_signtube_statement_banner3x.png",
            title: "Deaf Culture",
            link: "/deaf-culture"
        }
    ];

    const options = {
        loop: true
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    return (
        <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
            {slides.map((slide, index) => (
                <div className="embla__slide" key={index}>
                    <Link to={slide.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="embla__slide__img"
                    />
                    <div className="embla__slide__title">{slide.title}</div>
                    </Link>
                </div>
            ))}
            </div>
        </div>

        <div className="embla__controls">
            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={
                        'embla__dot' +
                        (index === selectedIndex ? ' embla__dot--selected' : '')
                    }
                    />
                ))}
            </div>
        </div>
        </section>
    );
};

export default HomeCarousel;
