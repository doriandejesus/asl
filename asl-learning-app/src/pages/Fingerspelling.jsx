import React from 'react';
import Header from '../components/Header';
import './Fingerspelling.css'; // Assuming you have a CSS file for styling
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

const Fingerspelling = () => {
    const [randomWord, setRandomWord] = React.useState('');
    const [wordLength, setWordLength] = React.useState(5);

    const [currentLetterIndex, setCurrentLetterIndex] = React.useState(0);

    const letterImages = {
        a: "./components/letters/pngegg (1).png",
        b: "./components/letters/pngegg (2).png",
        c: "./components/letters/pngegg (3).png",
        d: "./components/letters/pngegg (4).png",
        e: "./components/letters/pngegg (5).png",
        f: "./components/letters/pngegg (6).png",
        g: "./components/letters/pngegg (7).png",
        h: "./components/letters/pngegg (8).png",
        i: "./components/letters/pngegg (9).png",
        j: "./components/letters/pngegg (10).png",
        k: "./components/letters/pngegg (11).png",
        l: "./components/letters/pngegg (12).png",
        m: "./components/letters/pngegg (13).png",
        n: "./components/letters/pngegg (14).png",
        o: "./components/letters/pngegg (15).png",
        p: "./components/letters/pngegg (16).png",
        q: "./components/letters/pngegg (17).png",
        r: "./components/letters/pngegg (18).png",
        s: "./components/letters/pngegg (19).png",
        t: "./components/letters/pngegg (20).png",
        u: "./components/letters/pngegg (21).png",
        v: "./components/letters/pngegg (22).png",
        w: "./components/letters/pngegg (23).png",
        x: "./components/letters/pngegg (24).png",
        y: "./components/letters/pngegg (25).png",
        z: "./components/letters/pngegg (26).png"
    };

    const getNewWord = async (length) => {
        try {
            let url = `https://random-word-api.herokuapp.com/word?number=1&length=${length}`;
            const response = await fetch(url);
            const data = await response.json();
            setRandomWord(data[0]);
        }
        catch (error) {
            console.error('Error fetching random word:', error);
        }
        console.log(randomWord);
    };

    React.useEffect(() => {
        if (!randomWord) return;
        setCurrentLetterIndex(0);

        const interval = setInterval(() => {
            setCurrentLetterIndex((prev) => {
                if (prev < randomWord.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev; // Stop at the last letter
                }
            });
        }, 1000); //change image every 1000 ms (1 second)

        return () => clearInterval(interval); // Cleanup on unmount
    }, [randomWord]);

    return (
        <>
            <Header />
            <main>
                <div className='main-modal'>
                    <div className='main-modal-header'>
                        <h1>Fingerspelling Practice</h1>
                        <LocalLibraryOutlinedIcon 
                            className='dictionary-icon'
                            onClick={() => {
                                window.location.href = '/library';
                                document.body.style.cursor = 'pointer';
                            }}
                        />
                    </div>
                    
                    <div className='middle-content'>
                        <div className='sign-image'>
                            {randomWord ? (
                                <img 
                                    src={letterImages[randomWord[currentLetterIndex]]}
                                    alt={`Letter ${randomWord[currentLetterIndex].toUpperCase()}`}
                                    className='letter-image'
                                />
                            ) : (
                                <p className='loading-text'>Loading...</p>
                            )}
                            
                        </div>

                        <div className='settings'>
                            <div className='options'>
                                <h2>Settings</h2>
                                <div className='option-indivs'>
                                    <h3>Letter Speed:</h3>
                                    <h3>Word Size:</h3>
                                    <select
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (value === "random") {
                                                setWordLength(Math.floor(Math.random() * 5) + 3); // random 3-7
                                            } else if (value === "more") {
                                                setWordLength(7);
                                            } else {
                                                setWordLength(parseInt(value, 10));
                                            }
                                        }}
                                        className='word-size'
                                    >
                                        <option value="random">Random</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>

                                    </select>
                                </div>
                            </div>
                            <div className='score'>
                                <h2 className='score-title'>Score</h2>
                                <div className='score-indivs'>
                                    <h3>Total Correct: 15</h3>
                                    <h3>Highest Streak: 6</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bottom-content'>
                        <input
                            type="text"
                            className="answer-input"
                            placeholder="Type your answer..."
                            autoComplete="off"
                        />
                        <div className='buttons'>
                            <button className='submit-button'>Submit</button>
                            <button 
                                className='skip-button'
                                onClick={() => {getNewWord(wordLength);}}>Skip</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Fingerspelling;