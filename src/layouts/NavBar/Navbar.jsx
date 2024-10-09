import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profile_pic from '../../assets/anish.jpg';
import styles from './navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = (e) => {
    e.preventDefault(); // Prevent navigation away from the current route
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>StudentHub</div>
        <div className={styles['nav-icons']}>
          <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Explore</Link>
          <Link to="/forum" className={location.pathname === '/forum' ? styles.active : ''}>Forum</Link>
          <Link to="/messages" className={location.pathname === '/messages' ? styles.active : ''}>Messages</Link>

          {/* Notification Link */}
          <Link
            to="#"
            className={showNotifications ? styles.active : ''}
            onClick={toggleNotifications}
          >
            Notifications
          </Link>

          <div className={styles.profile}>
            <Link to="/profile"><img src={profile_pic} alt="Profile Avatar" /></Link>
          </div>
        </div>
      </header>

      {/* Notification Popup */}
      {showNotifications && (
        <div className={styles['notification-popup']}>
          <div className={styles['popup-content']}>
            <h3>Notifications</h3>
            <ul>
              <li>You have a new message</li>
              <li>New internship available at Google</li>
              <li>Jane Smith commented on your project</li>
              <li>You have a new message</li>
              <li>New internship available at Google</li>
              <li>Jane Smith commented on your project</li>
              <li>More notifications...</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
