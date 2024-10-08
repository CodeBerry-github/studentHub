import React from 'react';
import { Link } from 'react-router-dom';
import profile_pic from '../../assets/anish.jpg';
import './sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar-left">
      <div className="profile-summary">
        <img src={profile_pic} alt="Profile Avatar" />
        <h3>Anish Nagula</h3>
        <p>Computer Science Student</p>
        <p className='profile-college'>PES University, Bangalore</p>
        <Link to="/profile" className="edit-profile">View Profile</Link>
      </div>
      <br />
      <div className="navigation">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#">My Applications</a></li>
          <li><a href="#">My Saved Opportunities</a></li>
          <li><a href="#">My Projects</a></li>
          <li><a href="#">My Collaborations</a></li>
        </ul>
      </div>
      <div className="explore">
        <h4>Explore</h4>
        <ul>
          <li><a href="#">Top Articles</a></li>
          <li><a href="#">Student Rankings</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;