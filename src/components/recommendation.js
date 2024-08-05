import React from 'react';
import './recommendation.css';
import NavBar from './navbar';
const recommendation = () => {
  return (
    <div>
    <NavBar/>
    <div className="App">
      <div className="main-content">
        <div className="background-image">
          <div className="overlay1"></div>
          <div className="content">
            <h1>Find Your Perfect Book Match with NebulaReads</h1>
            <p>Want your next amazing read? Provide your reading preferences, and our AI engine will do the work for you!</p>
            <div className="tailor-read">
            <h2>Tailor Your Next Read</h2>
            <div className="options">
                <span>I am in the mood for a</span>
                <select>
                <option>Novel</option>
                <option>Business</option>
                <option>SelfHelp</option>
                <option>Biography</option>
                {/* Add more options */}
                </select>
                <span>book about</span>
                <select>
                <option>Mystery</option>
                <option>Romance</option>
                <option>Fantasy</option>
                <option>Horror</option>
                <option>Science Fiction</option>
                <option>Historical Fiction</option>
                <option>Crime</option>
                {/* Add more options */}
                </select>
                <span>that is</span>
                <select>
                <option>Long</option>
                <option>Short</option>
                <option>Medium</option>
                <option>Any</option>
                {/* Add more options */}
                </select>
                <span>and has a</span>
                <select>
                <option>Suspenseful</option>
                <option>Lighthearted</option>
                <option>Whimsical</option>
                <option>Dark</option>
                <option>Poetic</option>
                <option>Imaginative</option>
                <option>Action Packed</option>
                <option>Any</option>
                {/* Add more options */}
                </select>
                <span>writing style.</span>
            </div>
            <textarea placeholder="Share your reading preferences for personalized recommendations..."></textarea>
            <button>Find My Next Read</button>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default recommendation;
