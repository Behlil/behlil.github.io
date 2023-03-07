import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <h1> Ouassim behlil</h1>
            </div>
            <div className="header__right">
                <a href="https://github.com/behlil"><FaGithub /></a>
                <a href="https://twitter.com/behlil"><FaTwitter /></a>
                <a href="https://linkedin.com/in/behlil"><FaLinkedinIn /></a>
            </div>
        </div>
    );
}

