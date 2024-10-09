import React from 'react';
import { Link } from 'react-router-dom';
import profile_pic from '../../assets/anish.jpg';
import styles from './Sidebar.module.css';  // Import the CSS module

const Sidebar = () => {
  return (
    <aside className={styles.sidebarLeft}>
      {/* Profile Summary */}
      <div className={styles.profileSummary}>
        <img src={profile_pic} alt="Profile Avatar" />
        <h3>Anish Nagula</h3>
        <p>Computer Science Student</p>
        <p className={styles.profileCollege}>PES University, Bangalore</p>
        <Link to="/profile" className={styles.editProfile}>View Profile</Link>
      </div>
      
      {/* Navigation Section */}
      <div className={styles.navigation}>
        <h4>Navigation</h4>
        <ul>
          <li><Link to="#">My Applications</Link></li>
          <li><Link to="#">My Saved Opportunities</Link></li>
          <li><Link to="#">My Projects</Link></li>
          <li><Link to="#">My Collaborations</Link></li>
        </ul>
      </div>

      {/* Explore Section */}
      <div className={styles.explore}>
        <h4>Explore</h4>
        <ul>
          <li><Link to="#">Top Articles</Link></li>
          <li><Link to="#">Student Rankings</Link></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
