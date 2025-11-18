import React from 'react';
import './Speller.css'; // Assuming you have a CSS file for styling
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dictionary = () => {
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
            <Header />
            <main >
                <div>
                <h2 className='title'>Finger Speller</h2>
                <div className='input-container'>
                    <input 
                        type="text" 
                        className='text-input'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder='Type word here...' 
                    />
                </div>
                <div className='letters_container'>
                    {/* Map through the characters of the inputValue and display each letter */}
                    {Array.from(inputValue).map((char, idx) => {
                        // if (!char.trim()) return null; // skip whitespace
                        const letter = char.toLowerCase();
                        const index = letter.charCodeAt(0) - 97; // 0-25 for a-z
                        const imgSrc = index >= 0 && index < 26
                            ? `./letters/pngegg (${index + 1}).png`
                            : null; // no image for non a-z characters
                        return (
                            <div key={`${letter}-${idx}`} className='letterspelled'>
                                {imgSrc ? <img src={imgSrc} alt={letter} /> : <div className="no-image">{char}</div>}
                                <span>{char.toUpperCase()}</span>
                            </div>
                        );
                    })}
                </div>
            </div> 
             
        </main>
        <Footer />
    </div>
);
}

export default Dictionary;