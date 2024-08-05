import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageBooks.css';
import AdminNavBar from './AdminNavBar';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: '', genre: '', isPremium: false, format: '', image: null });
    const [editBook, setEditBook] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/api/books');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const handleAddBook = async (e) => {
    e.preventDefault();
    console.log('Adding book with data:', newBook); // Log form data

    const formData = new FormData();
    formData.append('title', newBook.title);
    formData.append('author', newBook.author);
    if (newBook.image) {
        formData.append('image', newBook.image);
    }

    try {
        const response = await axios.post('/api/books', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        console.log('Book added:', response.data); // Log server response
        setBooks([...books, response.data]);
        setNewBook({ title: '', author: '', image: null });
    } catch (error) {
        console.error('Error adding book:', error);
    }
};


    const handleEditBook = (book) => {
        setEditBook(book);
    };

    const handleSaveEdit = async () => {
        const formData = new FormData();
        formData.append('title', editBook.title);
        formData.append('author', editBook.author);
        formData.append('genre', editBook.genre);
        formData.append('isPremium', editBook.isPremium);
        formData.append('format', editBook.format);
        if (editBook.image) {
            formData.append('image', editBook.image);
        }

        try {
            const response = await axios.put(`/api/books/${editBook.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setBooks(books.map(book => (book.id === editBook.id ? response.data : book)));
            setEditBook(null);
        } catch (error) {
            console.error('Error editing book:', error);
        }
    };

    const handleDeleteBook = async (id) => {
        try {
            await axios.delete(`/api/books/${id}`);
            setBooks(books.filter(book => book.id !== id));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
        <div>
            <AdminNavBar/>
            <div className='manage-books'>
                <h1>Manage Books</h1>
                <form className='add-book-form' onSubmit={handleAddBook}>
                    <h2>Add New Book</h2>
                    <input
                        type='text'
                        placeholder='Title'
                        value={newBook.title}
                        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Author'
                        value={newBook.author}
                        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Genre'
                        value={newBook.genre}
                        onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
                        required
                    />
                    <label>
                        <input
                            type='checkbox'
                            checked={newBook.isPremium}
                            onChange={(e) => setNewBook({ ...newBook, isPremium: e.target.checked })}
                        />
                        Premium
                    </label>
                    <input
                        type='text'
                        placeholder='Format'
                        value={newBook.format}
                        onChange={(e) => setNewBook({ ...newBook, format: e.target.value })}
                        required
                    />
                    <input
                        type='file'
                        onChange={(e) => setNewBook({ ...newBook, image: e.target.files[0] })}
                        required
                    />
                    <button type='submit'>Add Book</button>
                </form>
                {editBook && (
                    <div className='edit-book-form'>
                        <h2>Edit Book</h2>
                        <input
                            type='text'
                            placeholder='Title'
                            value={editBook.title}
                            onChange={(e) => setEditBook({ ...editBook, title: e.target.value })}
                        />
                        <input
                            type='text'
                            placeholder='Author'
                            value={editBook.author}
                            onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
                        />
                        <input
                            type='text'
                            placeholder='Genre'
                            value={editBook.genre}
                            onChange={(e) => setEditBook({ ...editBook, genre: e.target.value })}
                        />
                        <label>
                            <input
                                type='checkbox'
                                checked={editBook.isPremium}
                                onChange={(e) => setEditBook({ ...editBook, isPremium: e.target.checked })}
                            />
                            Premium
                        </label>
                        <input
                            type='text'
                            placeholder='Format'
                            value={editBook.format}
                            onChange={(e) => setEditBook({ ...editBook, format: e.target.value })}
                        />
                        <input
                            type='file'
                            onChange={(e) => setEditBook({ ...editBook, image: e.target.files[0] })}
                        />
                        <button onClick={handleSaveEdit}>Save</button>
                        <button onClick={() => setEditBook(null)}>Cancel</button>
                    </div>
                )}
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <img src={book.imageUrl} alt={book.title} style={{ width: '100px', height: 'auto' }} />
                            <div>{book.title} by {book.author}</div>
                            <button onClick={() => handleEditBook(book)}>Edit</button>
                            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageBooks;
