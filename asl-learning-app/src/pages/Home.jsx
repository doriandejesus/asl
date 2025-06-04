import React from 'react';
import './Home.css';
import Header from '../components/Header'
import HomeCarousel from '../components/HomeCarousel';

const Home = () => {
    
        
    return (
        <div>
            <Header />
            <div className='home-header'>
                <h1 className='wave'>👋 </h1>
                <h1> Welcome to American Sign Learning</h1>
            </div>
            <p>American Sign Learning is a free resource for all, hoping to foster interest in American Sign Language as well as Deaf culture!</p>

            <HomeCarousel/>
        </div>
    );
};

export default Home;