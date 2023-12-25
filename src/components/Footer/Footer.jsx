import React from 'react';
import { Logo } from "../../assets";
import FooterLinks from './FooterLinsk/FooterLinks';
import { contactList, impLinks, socLinks } from './linksData';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-title">
                        <div className="footer-image">
                            <img src={Logo} alt="Logo Image" />
                        </div>
                        <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                    </div>
                    <FooterLinks 
                        title={"Important Links"}
                        links={impLinks}
                        />
                    <FooterLinks 
                        title={"Contact"}
                        links={contactList}
                    />
                    <FooterLinks 
                        title={"Social Media Links"}
                        links={socLinks}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer