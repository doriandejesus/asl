import React from 'react';
import './Home.css';
import Header from '../components/Header'
import useEmblaCarousel from 'embla-carousel-react'

const Home = () => {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div>
            <Header />
            <div className='home-header'>
                <h1 className='wave'>👋 </h1>
                <h1> Welcome to American Sign Learning</h1>
            </div>
            <p>American Sign Learning is a free resource for all, hoping to foster interest in American Sign Language as well as Deaf culture!</p>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">Slide 1</div>
                    <div className="embla__slide">Slide 2</div>
                    <div className="embla__slide">Slide 3</div>
                </div>
            </div>
        </div>
    );
};

export default Home;