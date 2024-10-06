import React from 'react';
import './profile.css';
import profilePic from '../../assets/anish.jpg'; // Replace with your profile picture
import Navbar from '../../layouts/NavBar/Navbar';
import bannerPic from '../../assets/banner.jpg';

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-user-card">
            <img className='profile-banner-pic' src={bannerPic} alt="Banner_pic" />
            <img className='profile-user-pic' src={profilePic} alt="Profile Pic" />
            <h2>Anish Nagula</h2>
            <p className='title'>Full Stack Web Developer</p>
            <p className='college'>Student at PES University, Bangalore</p>
            <p className='location'>Hyderabad, Telangana, India</p>
          </div>
          <div className="profile-card">
            <h3>Analytics</h3>
            <div className="profile-card-inner">
              <div className="profile-data">
                <h4>7 profile views</h4>
                <p className="profile-data-p">Discover who's viewed your profile.</p>
              </div>
              <div className="profile-data">
                <h4>0 post impressions</h4>
                <p className="profile-data-p">Start a post to increase engagement.</p>
              </div>
              <div className="profile-data">
                <h4>4 search appearances</h4>
                <p className="profile-data-p">See how often you appear in search results.</p>
              </div>
            </div>
            <button>Show All {"->"}</button>
          </div>
          <div className="profile-card">
            <h3>Activity</h3>
            <p className='profile-followers className="profile-data-p"'>4 followers</p>
            <p>You haven’t posted yet</p>
            <p className='profile-post-visible'>Posts you share will be displayed here.</p>
            <button>Show All {"->"}</button>
            <div className="profile-create-post">Create Post</div>
          </div>
          <div className="profile-card">
            <h3>Skills</h3>
            <div className="profile-skill">React</div>
            <div className="profile-skill">JavaScript</div>
            <div className="profile-skill">Python</div>
            <button>Show All {"->"}</button>
          </div>
        </div>
        <div className="profile-right">
          <div className="profile-right-card">
            <h3>People you might know</h3>
            <div className='suggestion-profile'>
              <div className="temp-img"></div>
              <p>Name</p>
            </div>
          </div>
          <div className="profile-right-card">
            <h3>Your Projects</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;