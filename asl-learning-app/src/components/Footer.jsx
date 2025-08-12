// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <small>
            &copy; {new Date().getFullYear()} ASL Learning App. All rights reserved.
        </small>
    </footer>
);

export default Footer;
