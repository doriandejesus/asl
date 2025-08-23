import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Fingerspelling.css'; // Assuming you have a CSS file for styling
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import { ImFire } from "react-icons/im";
import { LuTurtle } from "react-icons/lu";
import { LuRabbit } from "react-icons/lu";
import { generate } from "random-words";

const Fingerspelling = () => {
    const [randomWord, setRandomWord] = React.useState(''); 
    const [wordLength, setWordLength] = React.useState(5);
    const [letterSpeed, setLetterSpeed] = React.useState(800); // Default speed
    const [score, setScore] = React.useState(0);
    const [inputValue, setInputValue] = React.useState('');
    const [highestStreak, setHighestStreak] = React.useState(0);
    const [currentStreak, setCurrentStreak] = React.useState(0);
    const [isCorrect, setIsCorrect] = React.useState(false);
    const [isIncorrect, setIsIncorrect] = React.useState(false);
    const [practiceMode, setPracticeMode] = React.useState(false);
    const [currentLetterIndex, setCurrentLetterIndex] = React.useState(0);

    const letterImages = {
        a: "./letters/pngegg (1).png",
        b: "./letters/pngegg (2).png",
        c: "./letters/pngegg (3).png",
        d: "./letters/pngegg (4).png",
        e: "./letters/pngegg (5).png",
        f: "./letters/pngegg (6).png",
        g: "./letters/pngegg (7).png",
        h: "./letters/pngegg (8).png",
        i: "./letters/pngegg (9).png",
        j: "./letters/pngegg (10).png",
        k: "./letters/pngegg (11).png",
        l: "./letters/pngegg (12).png",
        m: "./letters/pngegg (13).png",
        n: "./letters/pngegg (14).png",
        o: "./letters/pngegg (15).png",
        p: "./letters/pngegg (16).png",
        q: "./letters/pngegg (17).png",
        r: "./letters/pngegg (18).png",
        s: "./letters/pngegg (19).png",
        t: "./letters/pngegg (20).png",
        u: "./letters/pngegg (21).png",
        v: "./letters/pngegg (22).png",
        w: "./letters/pngegg (23).png",
        x: "./letters/pngegg (24).png",
        y: "./letters/pngegg (25).png",
        z: "./letters/pngegg (26).png"
    };

    const getNewWord = (length) => {
        const word = generate({ exactly: 1, minLength: length, maxLength: length })[0];
        setRandomWord(word);
    };

    const compare = (input, word) => {
        if (input === word) {
            setScore(score + 1);
            setCurrentStreak(currentStreak + 1);
            if (currentStreak + 1 > highestStreak) {
                setHighestStreak(currentStreak + 1);
            }

            setIsCorrect(true);
            setTimeout(() => setIsCorrect(false), 500);
            
            document.getElementById('answer-input').value = ''; //if correct, clear input
            getNewWord(wordLength); // Fetch a new word after correct
        } else {
            setIsIncorrect(true);
            setTimeout(() => setIsIncorrect(false), 500);
            setCurrentStreak(0);
             
        }
        setInputValue(''); // Clear input after comparison
        
    };

    const playWord = () => {
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
        }, (1600 - letterSpeed)); //change image every 1000 ms (1 second)
    };  

    React.useEffect(() => {
        if (randomWord) playWord(); // Start playing the word when it changes (since thats when useEffect runs)
    }, [randomWord]);

    React.useEffect(() => { //when first load page
        getNewWord(wordLength); 
    }, []);

    React.useEffect(() => { 
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === 'r') {
                e.preventDefault();
                setCurrentLetterIndex(0); // Reset to the first letter
                playWord(); // Play the word when Ctrl + R is pressed
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    })

    return (
        <>
            <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`background-video ${currentStreak > 0 ? 'visible' : ''}`}
                >
                    <source src="/videos/embers.mp4" type="video/mp4" />
                    Your browser does not support the video tag. 
            </video>
            <Header />
            <main>
                <div className='main-modal'>
                    <div className='main-modal-header'>
                        <h1 >{"Fingerspelling Practice".toUpperCase()}</h1>
                        <LocalLibraryOutlinedIcon 
                            className='dictionary-icon'
                            onClick={() => {
                                window.location.href = '/dictionary';
                                document.body.style.cursor = 'pointer';
                            }}
                        />
                    </div>
                    
                    <div className='middle-content'>
                        <div className='sign-image'>
                            {randomWord ? (
                                <img 
                                    src={letterImages[randomWord[currentLetterIndex]]}
                                    alt={`Letter ${randomWord[currentLetterIndex] }`}
                                    className='letter-image'
                                />
                            ) : (
                                <p className='loading-text'>Loading...</p>
                            )}
                            <h2
                            className={`practice-text ${practiceMode ? 'on' : ''}`}>{randomWord[currentLetterIndex] ? randomWord[currentLetterIndex].toUpperCase() : ''}</h2>
                            <div
                            className='replay-container'
                            title='(CTRL + R)'
                            onClick={() => {
                                playWord();
                                document.body.style.cursor = 'pointer';
                            }}
                            >   
                                <ReplayIcon
                                className='replay-icon'
                                />
                                <span className='replay-text'>Replay</span>
                            </div>
                        </div>

                        <div className='settings'>
                            <div className='options'>
                                <h2>Settings</h2>
                                <div className='option-indivs'>
                                    <h3>Letter Speed</h3>
                                    <Slider
                                        aria-label="Letter Speed"
                                        value={letterSpeed}
                                        onChange={(e, value) => setLetterSpeed(value)}
                                        color='white'
                                        step={300}
                                        marks
                                        min={200}
                                        max={1400}
                                    />
                                    <div className='speed-icons'>
                                        <LuTurtle />
                                        <LuRabbit />
                                    </div>
                                    <div className='size-container'>
                                        <h3>Word Size</h3>
                                        <select
                                            value={wordLength}
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
                                    <div className='practice-container'>
                                        <h3>Assist Mode</h3>
                                        <Switch
                                            checked={practiceMode}
                                            onChange={(e) => {
                                                setPracticeMode(e.target.checked);
                                            }}
                                            color="primary"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='score'>
                                <h2 className='score-title'>Score</h2>
                                <div className='score-indivs'>
                                    <div className='score-text-1'>
                                        <h3> Total Correct: </h3>
                                        <h3 className={`score-text ${isCorrect ? 'correct' : ''}`}>{score}</h3>
                                    </div>
                                    <div className='streak-text-1'>
                                        <h3>Current Streak: </h3>
                                        <h3 className={`streak-text ${isIncorrect ? 'incorrect' : isCorrect ? 'correct' : ''}`}>{currentStreak}</h3>
                                        <h3 className={`streak-fire ${(currentStreak > 0) ? 'streak' : ''}`}><ImFire /></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bottom-content'>
                        <input
                            type="text"
                            className={`answer-input ${isCorrect ? 'correct' : isIncorrect ? 'incorrect' : ''}`}
                            placeholder="Type your answer..."
                            autoComplete="off"
                            id='answer-input'
                            onChange={(e, value) => {setInputValue(e.target.value.toLowerCase());}}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    compare(inputValue, randomWord);
                                }}
                            }                                          
                        />
                        <div className='buttons'>
                            <button 
                                className='submit-button'
                                onClick= {() => compare(inputValue, randomWord)}>
                                    Submit
                            </button>
                            <button 
                                className='skip-button'
                                onClick={() => {getNewWord(wordLength);
                                    document.getElementById('answer-input').value = '';
                                }}>Skip</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Fingerspelling;