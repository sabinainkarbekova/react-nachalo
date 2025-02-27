import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <h1 className="logo">{'{Finsweet}'}</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="newsletter">
                    <p>Subscribe to our newsletter to get latest updates and news</p>
                    <div className="newsletter-box">
                        <input type="email" placeholder="Enter Your Email" />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Finstreet 118 2561 Fintown</p>
                    <p>Hello@finsweet.com | 020 7993 2905</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
