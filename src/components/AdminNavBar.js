import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavBar.css';
import adminLogo from '../assets/logonb.png';

const AdminNavBar = () => {
    return (
        <nav className="admin-navbar">
            <div className="admin-logo">
                <Link to="/dashboard">
                    <img src={adminLogo} alt="Admin Logo" />
                </Link>
            </div>
            <ul className="admin-nav-links">
                <li><Link to="/manage-users">Manage Users</Link></li>
                <li><Link to="/manage-books">Manage Books</Link></li>
                <li>
                    <Link
                        to="/logout"
                        onClick={() => {
                            localStorage.removeItem('isAdminAuthenticated');
                            window.location.href = '/';
                        }}
                    >
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNavBar;
