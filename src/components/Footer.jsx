// src/Footer.js

import React from 'react';
import '../css/Footer.css'; // If you want to include some custom CSS

export const Footer = () => {
    return (
        <footer className="footer ">
            <div className="container ">
                <p className='text-center'> &copy; {new Date().getFullYear()} MERNWEB. All rights reserved.</p>
                {/* <nav>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/service">Privacy Policy</a></li>
                    </ul>
                </nav> */}
            </div>
        </footer>
    );
};


