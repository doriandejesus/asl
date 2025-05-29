import React from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className='header'>
            <div className='logo'> 
                <h1 className='large'>ASL</h1>
                <p className='small'>
                    American<br/>
                    Sign<br/>
                    Learning<br/>
                </p>
            </div>

            <button
                className='hamburger'
                aria-label='Toggle navigation menu'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>

            <div className={`nav${menuOpen ? ' open' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/lessons">Lessons</a></li>
                    <li><a href="/resources">Resources</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;