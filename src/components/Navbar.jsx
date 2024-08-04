// src/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'; 
import { useAuth } from '../store/Auth';

export const Navbar = () => {
    const {isLoggedIn} = useAuth();
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo"><NavLink to="/">MERNWEB</NavLink></h1>
                <nav>
                    <ul>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        {isLoggedIn ?
                        <li><NavLink to="/logout">Logout</NavLink></li>:
                        <>
                        <li><NavLink to="/signin">Login</NavLink></li>
                        <li><NavLink to="/signup">Signup</NavLink></li>
                        </>
                        }
                        
                        

                    </ul>
                </nav>
            </div>
        </header>
    );
};


















