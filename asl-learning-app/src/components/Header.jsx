import React from 'react';
import './Header.css';
import { GoHomeFill } from "react-icons/go";


const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className='header'>
            <div 
            className='logo'
            onClick={() => {
                window.location.href = '/';
                document.body.style.cursor = 'pointer';
                setMenuOpen(false);
            }}>
                <h1 className='large'>ASL</h1>
                <p className='small'>
                    American<br/>
                    Sign<br/>
                    Learning<br/>
                </p>
            </div>

            <GoHomeFill
                className='menu-icon'
                onClick={() => setMenuOpen(!menuOpen)}
                size={30}
            />

        </div>
    );
};

export default Header;