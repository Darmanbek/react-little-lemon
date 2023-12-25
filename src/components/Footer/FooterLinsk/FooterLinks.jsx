import React from 'react';
import "./footerLinks.css";

const FooterLinks = ({ title, links }) => {
    return (
        <nav className="footer-links">
            <h3>{title}</h3>
            <ul>
                {links.map((item, index) => (
                    <li key={index+1}>{item}</li>
                ))}
            </ul>
        </nav>
    )
}

export default FooterLinks