// Announcement.js

import React from 'react';
import './Announcement.css';

const Announcement = () => {
  return (
    <div className="announcement-section">
      <div className="announcement-column">
        <h2>Type1 Announcements</h2>
        <div className="announcement-slider">
          <div className="announcement-slide">
            <p>Announcement 1: Type1 announcement 1</p>
          </div>
          <div className="announcement-slide">
            <p>Announcement 2: Type1 announcement 2</p>
          </div>
          {/* Add more literature announcements as needed */}
        </div>
      </div>
      <div className="announcement-column">
        <h2>Type2 Announcements</h2>
        <div className="announcement-slider">
          <div className="announcement-slide">
            <p>Announcement 1: Type2 announcement 1</p>
          </div>
          <div className="announcement-slide">
            <p>Announcement 2: Type2 announcement 2</p>
          </div>
          {/* Add more heritage announcements as needed */}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
