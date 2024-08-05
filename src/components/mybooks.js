import React from 'react';
import './mybooks.css';
import NavBar from './navbar';
const MyBooks = ({ myBooks = [], books = [] }) => {
    const userBooks = books.filter(book => myBooks.includes(book.id));

    return (
        <div>
            <NavBar/>
            <div className="my-books-container1">
                <h2>My Books</h2>
                <div className="books-grid1">
                    {userBooks.length > 0 ? (
                        userBooks.map(book => (
                            <div className="book-card1" key={book.id}>
                                <img src={book.src} alt={book.title} />
                                <p>Genre: {book.genre}</p>
                                <p>{book.isPremium ? 'Premium' : 'Free'}</p>
                            </div>
                        ))
                    ) : (
                        <p>No books added yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBooks;
