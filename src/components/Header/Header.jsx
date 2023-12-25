import React from 'react';
import { Layout, Menu } from "antd";
import { Logo } from "../../assets";
import { navItems } from './navItems';
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-logo">
                        <a href="/"><img src={Logo} alt="Logo" /></a>
                    </div>
                    <nav className="header-nav">
                        <ul>
                            {navItems.map(item => (
                                <li key={item.key}><a href="/">{item.label}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>      
        </header>
    )
}

export default Header;