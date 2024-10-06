import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profile_pic from '../../assets/anish.jpg';
import './navbar.css';

/*
PAGES TO BE ADDED:
-Explore
- Forum
- Messages
- Profile
- Notifications
- Login/Signup
*/

const Navbar = () => {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = (e) => {
    e.preventDefault(); // Prevent navigation away from the current route
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      <header>
        <div className="logo">StudentHub</div>
        <div className="nav-icons">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Explore</Link>
          <Link to="/forum" className={location.pathname === '/forum' ? 'active' : ''}>Forum</Link>
          <Link to="/messages" className={location.pathname === '/messages' ? 'active' : ''}>Messages</Link>

          {/* Notification Link */}
          <Link
            to="#"
            className={showNotifications ? 'active' : ''} // Manually handle the active class
            onClick={toggleNotifications}
          >
            Notifications
          </Link>

          <div className="profile">
            <img src={profile_pic} alt="Profile Avatar" />
          </div>
        </div>
      </header>

      {/* Notification Popup */}
      {showNotifications && (
        <div className="notification-popup">
          <div className="popup-content">
            <h3>Notifications</h3>
            <ul>
              <li>You have a new message</li>
              <li>New internship available at Google</li>
              <li>Jane Smith commented on your project</li>
              <li>You have a new message</li>
              <li>New internship available at Google</li>
              <li>Jane Smith commented on your project</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;