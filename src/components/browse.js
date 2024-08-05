import React, { useState,useEffect } from 'react';
import './browse.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaBook, FaSearch } from 'react-icons/fa';
import Footer from './footer';
import axios from 'axios';
import NavBar from './navbar';
import SearchBar from './SearchBar';
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
const initialBooks = [
  { id: 1, src: book1, title: "A MAN CALLED OVE", genre: "Novel, Humorous Fiction", isPremium: true, url: '', format: 'pdf' , image: book2 },
  { id: 2, src: book2, title: "VERITY", genre: "Psychological thriller", isPremium: true, url: '/path/to/book2.epub', format: 'epub', image: book3 },
  { id: 3, src: book3, title: "THE STATIONARY SHOP AT TEHRAN", genre: "Historical, Romance novel", isPremium: false, url: '/path/to/book3.epub', format: 'epub', image: book4 },
  { id: 4, src: book4, title: "IT ENDS WITH US", genre: "Romance", isPremium: false, url: 'https://icrrd.com/public/media/15-05-2021-052358It-Ends-with-Us.pdf', format: 'pdf', image: book5 },
  { id: 5, src: book5, title: "THAT NIGHT", genre: "Thriller, Suspense", isPremium: false, url: '/path/to/book5.epub', format: 'epub', image: book6 },
  { id: 6, src: book6, title: "THE GIRL WHO KNEW TOO MUCH", genre: "Fiction, Romance novel", isPremium: false, url: '/path/to/book6.epub', format: 'epub', image: book7 },
  { id: 7, src: book7, title: "THE POWER OF YOUR SUBCONSCIOUS MIND", genre: "Self-help book", isPremium: false, url: '/path/to/book7.epub', format: 'epub', image: book8 },
  { id: 8, src: book8, title: "WISE AND OTHERWISE", genre: "Non-Fiction, Anthology", isPremium: true, url: '/path/to/book8.epub', format: 'epub', image: book9 },
  { id: 9, src: book9, title: "THREE MEN IN A BOAT", genre: "Novel, Fiction", isPremium: false, url: '/path/to/book9.epub', format: 'epub', image: book10 },
  { id: 10, src: book10, title: "THE 5AM CLUB", genre: "Self-help, fiction story", isPremium: true, url: '/path/to/book10.epub', format: 'epub', image: book1 },
];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState(initialBooks);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books');
        console.log('Fetched books:', response.data); // Add this line
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.toLowerCase());
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/banner1.jpg",
    "/banner3.jpg",
    "/banner4.png",
    "/banner5.jpg",
  ];

  const sections = [
    {
    title: "What's India Reading This July?",
    books: [
      { id: 11, title: 'Atomic Habits', author: 'James Clear', author1: 'Read Now !', category: 'self-help', language: 'english', image: '../atomic.jpg' },
      { id: 12, title: 'The American Roommate Experiment', author: 'Elena Armas', author1: 'Read Now !', category: 'romance', language: 'english', image: '../americanroomate.jpg' },
      { id: 13, title: 'I Fell in Love with Hope', author: 'Lancas Deles', author1: 'Read Now !', category: 'romance', language: 'english', image: '../lovewithhope.png' },
      { id: 14, title: 'Never Have I Ever', author: 'Joshilyn Jackson', author1: 'Read Now !', category: 'fiction', language: 'english', image: '../nhie.jpg' },
      { id: 15, title: 'Haunting Adeline', author: 'H.D. Carlton', author1: 'Read Now !', category: 'thriller', language: 'english', image: '../haunting.jpg' },
      { id: 16, title: 'If I Had Told Her', author: 'Laura Nowlin', author1: 'Read Now !', category: 'romance', language: 'english', image: '../ihadtoldher.jpg' },
      { id: 17, title: 'Wretched', author: 'Emily Knight', author1: 'Read Now !', category: 'fiction', language: 'english', image: '../wretched.jpg' },
      { id: 18, title: 'Deep Work', author: 'Cal Newport', author1: 'Read Now !', category: 'self-help', language: 'english', image: '../deepwork.jpg' },
    ],
  },
  {
    title: 'CBQ’s For Class 10 & Class 12',
    books: [
      { id: 19, title: 'CBQ Class 10', author: 'CBQ Team', author1: 'Read Now !', category: 'academics', language: 'english', image: '../cbq10.webp' },
      { id: 20, title: 'CBQ Class 12', author: 'CBQ Team', author1: 'Read Now !', category: 'academics', language: 'english', image: '../cbq12.webp' },
    ],
  },
  {
    title: 'Bookscape Recommendations',
    books: [
      { id: 21, title: 'Ikigai', author: 'Héctor García and Francesc Miralles', author1: 'Read Now !', category: 'self-help', language: 'japanese', image: '../ikigai.jpg' },
      { id: 22, title: 'The Alchemist', author: 'Paulo Coelho', author1: 'Read Now !', category: 'fiction', language: 'english', image: '../alche.webp' },
    ],
  },
  {
    title: 'Cozy Up With A Classic',
    books: [
      { id: 23, title: 'Pride and Prejudice', author: 'Jane Austen', author1: 'Read Now !', category: 'classic', language: 'english', image: '../pride.jpg' },
      { id: 24, title: '1984', author: 'George Orwell', author1: 'Read Now !', category: 'classic', language: 'english', image: '../1984.jpg' },
    ],
  },
    {
      title: 'All Books',
      books: books.map(book => ({
        title:book.title,
        author: book.genre,
        image: book.src,
        author1: book.isPremium ? 'Premium !!' : 'Read Now !!',
        category: book.genre.split(',')[0].toLowerCase(),
        language: 'english',
      })),
    },
  ];
  

  const filteredBooks = sections.flatMap(section =>
    section.books.filter(book =>
      (searchQuery && (book.title.toLowerCase().includes(searchQuery) || book.author.toLowerCase().includes(searchQuery))) ||
      (selectedCategory && book.category.toLowerCase().includes(selectedCategory)) ||
      (selectedLanguage && book.language.toLowerCase().includes(selectedLanguage))
    )
  );

  return (
      <div>
        <NavBar/>
        <section className='nav-container'>
          <ul className="nav-menu">
            <li className="nav-item">
              <FaBook className="icon" /> Academics
              <ul className="dropdown">
                <li onClick={() => handleCategorySelect('academics')}>School Books</li>
                <li onClick={() => handleCategorySelect('academics')}>Government Exams</li>
                <li onClick={() => handleCategorySelect('academics')}>Exam Prep</li>
                <li onClick={() => handleCategorySelect('academics')}>Banking & Insurance</li>
                <li onClick={() => handleCategorySelect('academics')}>Finance & Accounting</li>
                <li onClick={() => handleCategorySelect('academics')}>Defense</li>
                <li onClick={() => handleCategorySelect('academics')}>Law</li>
                <li onClick={() => handleCategorySelect('academics')}>Arts, Design</li>
                <li onClick={() => handleCategorySelect('academics')}>Polytechnics</li>
                <li onClick={() => handleCategorySelect('academics')}>International Exams</li>
                <li onClick={() => handleCategorySelect('academics')}>Management Exams</li>
                <li onClick={() => handleCategorySelect('academics')}>Higher Education</li>
              </ul>
            </li>
            <li className="nav-item">
              <FaBook className='icon' /> Fiction
              <ul className='dropdown'>
                <li onClick={() => handleCategorySelect('romance')}>Romance</li>
                <li onClick={() => handleCategorySelect('fiction')}>Anthologies</li>
                <li onClick={() => handleCategorySelect('fantasy')}>Fantasy</li>
                <li onClick={() => handleCategorySelect('comedy')}>Comedy</li>
                <li onClick={() => handleCategorySelect('classic')}>Classics</li>
                <li onClick={() => handleCategorySelect('adventure')}>Action and adventure</li>
                <li onClick={() => handleCategorySelect('thriller')}>Crime, Mystery & Thriller</li>
                <li onClick={() => handleCategorySelect('myth')}>Myths, Legends & Sagas</li>
                <li onClick={() => handleCategorySelect('horror')}>Horror</li>
                <li onClick={() => handleCategorySelect('short stories')}>Short Stories</li>
                <li onClick={() => handleCategorySelect('poetry')}>Poetry</li>
              </ul>
            </li>
            <li className="nav-item">
              <FaBook className='icon' /> Non Fiction
              <ul className="dropdown">
                <li onClick={() => handleCategorySelect('self-help')}>Self-Help & Wellness</li>
                <li onClick={() => handleCategorySelect('biographies')}>Biographies & AutoBiographies</li>
                <li onClick={() => handleCategorySelect('business')}>Business & Economics</li>
                <li onClick={() => handleCategorySelect('religion')}>Religion & Spirituality</li>
                <li onClick={() => handleCategorySelect('computer')}>Computer & Internet</li>
                <li onClick={() => handleCategorySelect('politics')}>Politics</li>
                <li onClick={() => handleCategorySelect('arts')}>Arts</li>
                <li onClick={() => handleCategorySelect('sports')}>Sports</li>
              </ul>
            </li>
            <li className="nav-item">
              <FaBook className='icon' /> Children
              <ul className='dropdown'>
                <li onClick={() => handleCategorySelect('children')}>Early Learning</li>
                <li onClick={() => handleCategorySelect('children')}>Picture Books</li>
                <li onClick={() => handleCategorySelect('children')}>Fairy Tales</li>
              </ul>
            </li>
            <li className="nav-item">
              <FaBook className='icon' /> Comics & Graphic Novels
              <ul className='dropdown'>
                <li onClick={() => handleCategorySelect('comics')}>Superhero Comics</li>
                <li onClick={() => handleCategorySelect('comics')}>Indian Comics</li>
                <li onClick={() => handleCategorySelect('comics')}>Other Comics</li>
              </ul>
            </li>
            <li className="nav-item">
              <FaBook className='icon' /> Languages
              <ul className='dropdown'>
                <li onClick={() => handleLanguageSelect('hindi')}>Hindi</li>
                <li onClick={() => handleLanguageSelect('marathi')}>Marathi</li>
                <li onClick={() => handleLanguageSelect('english')}>English</li>
                <li onClick={() => handleLanguageSelect('tamil')}>Tamil</li>
                <li onClick={() => handleLanguageSelect('punjabi')}>Punjabi</li>
                <li onClick={() => handleLanguageSelect('french')}>French</li>
                <li onClick={() => handleLanguageSelect('malayalam')}>Malayalam</li>
                <li onClick={() => handleLanguageSelect('telugu')}>Telugu</li>
                <li onClick={() => handleLanguageSelect('latin')}>Latin</li>
                <li onClick={() => handleLanguageSelect('spanish')}>Spanish</li>
                <li onClick={() => handleLanguageSelect('korean')}>Korean</li>
                <li onClick={() => handleLanguageSelect('chinese')}>Chinese</li>
                <li onClick={() => handleLanguageSelect('japanese')}>Japanese</li>
              </ul>
            </li>
            <li className="nav-item">
              <FaSearch className='icon'/>
              <SearchBar onSearch={handleSearch} />
            </li>
          </ul>
        </section>
        {searchQuery || selectedCategory || selectedLanguage ? (
          <div className="App">
            <div className="books">
              {filteredBooks.map((book, idx) => (
                <div className="book" key={idx}>
                  <img src={`images/${book.image}`} alt={book.title} />
                  <h4>{book.title}</h4>
                  <p>{book.author1}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="carousel-container">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="App">
            {sections.map((section, index) => (
            <div className="section" key={index}>
              <h2>{section.title}</h2>
              <div className="books">
                {section.books.map((book, idx) => (
                  <div className="book" key={idx}>
                    <img src={book.image} alt={book.title} />
                    <h4>{book.title}</h4>
                    <p>{book.author1}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

            </div>
          </>
        )}
        <Footer />
      </div>
  );
};

export default Browse;
