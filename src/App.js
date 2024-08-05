import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import HomePage from './components/index';
import Browse from './components/browse';
import Membership from './components/Membership';
import Recommendation from './components/recommendation';
import MyBooks from './components/mybooks';
import AdminLogin from './components/Admin';
import AdminHome from './components/AdminHome';
import ManageBooks from './components/ManageBooks';
import ManageUsers from './components/ManageUsers';
import NavBar from './components/navbar';
import AdminNavBar from './components/AdminNavBar'; // Import AdminNavBar
import Dashboard from './components/Dashboard';
import book1 from './assets/book2.jpg';
import book2 from './assets/book3.jpg';
import book3 from './assets/book6.jpg';
import book4 from './assets/book1.jpg';
import book5 from './assets/book4.jpg';
import book6 from './assets/book5.jpg';
import book7 from './assets/book7.jpg';
import book8 from './assets/book8.jpg';
import book9 from './assets/book9.jpg';
import book10 from './assets/book10.jpg';

const books = [
    { id: 1, src: book1, title: "Book Title 1", genre: "Novel, Humorous Fiction", isPremium: true, url: '/path/to/book1.epub' },
    { id: 2, src: book2, title: "Book Title 2", genre: "Psychological thriller", isPremium: true, url: '/path/to/book2.epub' },
    { id: 3, src: book3, title: "Book Title 3", genre: "Historical, Romance novel", isPremium: false, url: '/path/to/book3.epub' },
    { id: 4, src: book4, title: "Book Title 4", genre: "Romance", isPremium: false, url: './it-ends-with-use.epub' },
    { id: 5, src: book5, title: "Book Title 5", genre: "Thriller, Suspense", isPremium: false, url: '/path/to/book5.epub' },
    { id: 6, src: book6, title: "Book Title 6", genre: "Fiction, Romance novel", isPremium: false, url: '/path/to/book6.epub' },
    { id: 7, src: book7, title: "Book Title 7", genre: "Self-help book", isPremium: false, url: '/path/to/book7.epub' },
    { id: 8, src: book8, title: "Book Title 8", genre: "Non-Fiction, Anthology", isPremium: true, url: '/path/to/book8.epub' },
    { id: 9, src: book9, title: "Book Title 9", genre: "Novel, Fiction", isPremium: false, url: '/path/to/book9.epub' },
    { id: 10, src: book10, title: "Book Title 10", genre: "Self-help, fiction story", isPremium: true, url: '/path/to/book10.epub' },
];
function App() {
    const [myBooks, setMyBooks] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData) {
            console.log('Retrieved userData:', storedData); 
            setUserData(storedData);
            setMyBooks(storedData.myBooks || []);
            setIsAuthenticated(storedData.isAuthenticated || false);
            setIsAdmin(storedData.isAdmin || false);
        }
    }, []);

    const handleLogin = (adminStatus) => {
        const newUserData = {
            isAuthenticated: true,
            isAdmin: adminStatus,
            myBooks: myBooks,
        };
        setUserData(newUserData);
        localStorage.setItem('userData', JSON.stringify(newUserData));
        setIsAuthenticated(true);
        setIsAdmin(adminStatus);
    };

    const updateMyBooks = (newBooks) => {
        setMyBooks(newBooks);
        setUserData(prevData => {
            const updatedData = { ...prevData, myBooks: newBooks };
            localStorage.setItem('userData', JSON.stringify(updatedData));
            return updatedData;
        });
    };

    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={isAdmin ? <Dashboard /> : <HomePage />} />
                <Route path="/manage-users" element={isAdmin ? <ManageUsers /> : <HomePage />} />
                <Route path="/manage-books" element={isAdmin ? <ManageBooks /> : <HomePage />} />
                <Route path="/" element={<HomePage myBooks={myBooks} setMyBooks={updateMyBooks} books={books} isAuthenticated={isAuthenticated} userData={userData} />} />
                <Route path="/browse" element={<Browse isAuthenticated={isAuthenticated} />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/recommendations" element={<Recommendation />} />
                <Route path="/mybooks" element={<MyBooks myBooks={myBooks} books={books} userData={userData} />} />
                <Route path="/login" element={<Login handleLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/adminhome" element={isAdmin ? <AdminHome /> : <HomePage />} />
                <Route path="/adminnavbar" element={isAdmin ? <AdminNavBar /> : <NavBar />} />
                <Route path="/navbar" element={<NavBar />} />
            </Routes>
        </Router>
    );
}

export default App;
