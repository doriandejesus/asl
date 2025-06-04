import React from 'react';
import Header from '../components/Header';
import './Fingerspelling.css'; // Assuming you have a CSS file for styling
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

const Fingerspelling = () => {
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
                            <img src='https://e7.pngegg.com/pngimages/809/881/png-clipart-american-sign-language-letter-fingerspelling-letter-f-miscellaneous-english-thumbnail.png' alt='Fingerspelling' />
                        </div>

                        <div className='settings'>
                            <div className='options'>
                                <h2>Settings</h2>
                                <div className='option-indivs'>
                                    <h3>Letter Speed:</h3>
                                    <h3>Word Size:</h3>
                                    <select>
                                        <option value="random">Random</option>
                                        <option value="three">3</option>
                                        <option value="four">4</option>
                                        <option value="five">5</option>
                                        <option value="six">6</option>
                                        <option value="more">7+</option>
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
                            <button className='skip-button'>Skip</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Fingerspelling;