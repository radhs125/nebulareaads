import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import book1 from '../assets/book2.jpg';
import book2 from '../assets/book3.jpg';
import book3 from '../assets/book6.jpg';
import book4 from '../assets/book1.jpg';
import book5 from '../assets/book4.jpg';
import book6 from '../assets/book5.jpg';
import book7 from '../assets/book7.jpg';
import book8 from '../assets/book8.jpg';
import book9 from '../assets/book9.jpg';
import book10 from '../assets/book10.jpg';
import digitalbook from '../assets/digitalbook.jpeg';
import EReader from './EReader';
import NavBar from './navbar';

const books = [
    { id: 1, src: book1, title: "A MAN CALLED OVE", genre: "Novel, Humorous Fiction", isPremium: true, url: '', format: 'pdf' },
    { id: 2, src: book2, title: "VERITY", genre: "Psychological thriller", isPremium: true, url: '/path/to/book2.epub', format: 'epub' },
    { id: 3, src: book3, title: "THE STATIONARY SHOP AT TEHRAN", genre: "Historical, Romance novel", isPremium: false, url: '/path/to/book3.epub', format: 'epub' },
    { id: 4, src: book4, title: "IT ENDS WITH US", genre: "Romance", isPremium: false, url: 'https://icrrd.com/public/media/15-05-2021-052358It-Ends-with-Us.pdf', format: 'pdf' },
    { id: 5, src: book5, title: "THAT NIGHT", genre: "Thriller, Suspense", isPremium: false, url: '/path/to/book5.epub', format: 'epub' },
    { id: 6, src: book6, title: "THE GIRL WHO KNEW TOO MUCH", genre: "Fiction, Romance novel", isPremium: false, url: '/path/to/book6.epub', format: 'epub' },
    { id: 7, src: book7, title: "THE POWER OF YOUR SUBCONSCIOUS MIND", genre: "Self-help book", isPremium: false, url: '/path/to/book7.epub', format: 'epub' },
    { id: 8, src: book8, title: "WISE AND OTHERWISE", genre: "Non-Fiction, Anthology", isPremium: true, url: '/path/to/book8.epub', format: 'epub' },
    { id: 9, src: book9, title: "THREE MEN IN A BOAT", genre: "Novel, Fiction", isPremium: false, url: '/path/to/book9.epub', format: 'epub' },
    { id: 10, src: book10, title: "THE 5AM CLUB", genre: "Self-help, fiction story", isPremium: true, url: '/path/to/book10.epub', format: 'epub' },
];

const HomePage = ({ myBooks, setMyBooks,isAuthenticated }) => {
    const [isMember] = useState(false); // Simulating membership status
    const [currentBook, setCurrentBook] = useState(null);
    const [message, setMessage] = useState("");

    const toggleMyBook = (bookId) => {
        if (!isAuthenticated) {
            alert('Please log in to add books to MyBooks.');
            return;
        }
        setMyBooks(prevBooks => {
            let newBooks;
            if (prevBooks.includes(bookId)) {
                newBooks = prevBooks.filter(id => id !== bookId);
                setMessage("Removed from MyBooks");
            } else {
                newBooks = [...prevBooks, bookId];
                setMessage("Added to MyBooks");
            }
            setTimeout(() => setMessage(""), 2000);
            return newBooks;
        });
    };

    const handleReadNow = (book) => {
        if (book.isPremium ){
            alert('You need to log in to access this premium book.');
        } 
        else if(!isAuthenticated){
            alert('You need to login to access the books');
        }
        else if(!isMember){
            alert('You need to subscripe for premium')
        }
        else {
            if (book.format === 'pdf') {
                window.open(book.url, '_blank');
            } else {
                setCurrentBook(book);
            }
        }
    };

    const closeEReader = () => {
        setCurrentBook(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
            <div>
                <NavBar/>
                {currentBook && <EReader book={currentBook} onClose={closeEReader} />}
                {message && <div className="message">{message}</div>}
                <section className="landing-content">
                    <div className="overlay">
                        <h1 className="animated-text">
                            A JOURNEY <br />
                            THROUGH WORDS,<br />
                            FROM YOUR SCREEN,<br />
                            TO YOU.
                        </h1>
                        <a href="/browse" className="btn"><b>Begin Your Journey</b></a>
                    </div>
                </section>

                <section className="popular-books" id="popular-books">
                    <h2>POPULAR READS</h2>
                    <Slider {...settings}>
                        {books.map(book => (
                            <div className="book-card" key={book.id}>
                                <img src={book.src} alt={book.title} onClick={() => handleReadNow(book)} />
                                <h4>{book.title}</h4>
                                <h3>GENRE : {book.genre}</h3>
                                <p>{book.isPremium ? 'Premium !!' : 'Read Now !!'}</p>
                                <div className="book-actions">
                                    <button onClick={() => handleReadNow(book)}>Read Now</button>
                                    {/* {book.format === 'pdf' && (
                                        <a href={book.url} download target="_blank" rel="noopener noreferrer">
                                            <button>Download</button>
                                        </a>
                                    )} */}
                                </div>
                                <span
                                    className={myBooks.includes(book.id) ? 'thumbs-up' : 'plus'}
                                    onClick={() => toggleMyBook(book.id)}
                                >
                                    {myBooks.includes(book.id) ? '✔' : '♡'}
                                </span>
                            </div>
                        ))}
                    </Slider>
                </section>
                <div className="special-offer-container">
                    <div className="offer-details">
                        <h2>Special Offers</h2>
                        <h1>Free preview Read<br />In all premium books!</h1>
                        <p>
                            Discover your next great read with our free preview! Enjoy a sample of the book before you buy, so you can dive into the story and see if it's the perfect fit for you. Explore a world of new possibilities with just a click.
                        </p>
                        <Link to='/browse'>
                            <button className="shop-now">Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div className="about-us-container">
                    <div className="images-section">
                        <img src={digitalbook} alt="Team Member 1" className="image2" />
                    </div>
                    <div className="text-section">
                        <h2><b>About Us</b></h2>
                        <h1>Find Your Story in the Digital Cosmos.</h1>
                        <p>
                            Welcome to NebulaReads, your gateway to a universe of stories, articles, and knowledge.
                            Our mission is to provide a seamless and enriching reading experience for all book lovers.
                            Whether you're looking to dive into fiction, explore new topics, or stay informed with the latest articles, we have something for everyone.
                        </p>
                        <div className="experience">
                            <h3>5,000,000+</h3>
                            <p>Books</p>
                        </div>
                        <Link to='/browse'>
                            <div className="buttons">
                                <button className="button">Explore Now !</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <section className="testimonials" id="testimonials">
                    <h2>What Our Readers Say</h2>
                    <Slider {...settings}>
                        <div className="testimonial-card">
                            <p>"NebulaReads has transformed my reading experience. The selection of books is amazing!"</p>
                            <h3>- Ravi Singh, Bangalore</h3>
                        </div>
                        <div className="testimonial-card">
                            <p>"I love the user-friendly interface and the vast collection of genres available."</p>
                            <h3>- Rhyle, Chennai</h3>
                        </div>
                        <div className="testimonial-card">
                            <p>"A fantastic platform for book lovers. Highly recommend it to everyone!"</p>
                            <h3>- Aaron, New Delhi</h3>
                        </div>
                    </Slider>
                </section>
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-section about">
                            <h2>NebulaReads</h2>
                            <p>Discover endless literary treasures.<br />
                                Dive into our extensive catalog of books and articles.<br />
                                Whether you seek knowledge or fiction, we have it all.<br />
                                Begin your journey into knowledge with NebulaReads.</p>
                        </div>
                        <div className="footer-section links">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="/browse">Browse</a></li>
                                <li><a href="/membership">Membership</a></li>
                                <li><a href="/recommendations">Recommendations</a></li>
                                <li><a href="/mybooks">My Books</a></li>
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
            </div>
    );
};

export default HomePage;
