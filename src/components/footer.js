// src/components/Footer.js
import React from 'react';
import './footer.css'; // Create this CSS file if you need to style the footer separately

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>NebulaReads</h2>
                    <p>Discover endless literary treasures.<br/>
                    Dive into our extensive catalog of books and articles.<br/>
                    Whether you seek knowledge or fiction, we have it all.<br/>
                    Begin your journey into knowledge with NebulaReads.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/browse">Browse</a></li>
                        <li><a href="/membership">Membership</a></li>
                        <li><a href="#recommendations">Recommendations</a></li>
                        <li><a href="#my-books">My Books</a></li>
                        <li><a href="/login">Register/Login</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: support@nebulareads.com</p>
                    <p>Phone: +91 9442548799</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 NebulaReads | Designed by Rad
            </div>
        </footer>
    );
};

export default Footer;
