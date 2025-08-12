import React from 'react';
import './Dictionary.css'; // Assuming you have a CSS file for styling
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dictionary = () => (
    <div>
        <Header />
        <main >
            <div>
                <h2>Fingerspelling Alphabet</h2>
                <div className='letters'>
                    {/* Map through the alphabet and display each letter */}
                    {Array.from(Array(26)).map((_, index) => {
                        const letter = String.fromCharCode(97 + index); // Get letter a-z
                        return (
                            <div key={letter} className='letter'>
                                <img src={`/src/components/letters/pngegg (${index + 1}).png`} alt={letter} />
                                <span>{letter.toUpperCase()}</span>
                            </div>
                        );
                    })}
                </div>
                <input type="text" placeholder="Enter a word" />
            </div>  
        </main>
        <Footer />
    </div>
);

export default Dictionary;