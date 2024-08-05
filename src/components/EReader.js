import React from 'react';
import { EpubView } from 'react-reader';
import './EReader.css'; // Make sure this file has appropriate styles

const EReader = ({ book, onClose }) => {
    return (
        <div className="ereader-overlay">
            <div className="ereader-container">
                <button className="close-button" onClick={onClose}>Close</button>
                <EpubView url={book.url} />
            </div>
        </div>
    );
};

export default EReader;
