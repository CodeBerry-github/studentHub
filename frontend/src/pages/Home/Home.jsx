import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import Navbar from '../../layouts/NavBar/Navbar';
import down from '../../assets/Icons/circle-arrow-down-01-stroke-rounded.svg';
import up from '../../assets/Icons/circle-arrow-up-01-stroke-rounded.svg';
import add from '../../assets/Icons/add-square-stroke-rounded.svg';
import filter from '../../assets/Icons/filter-stroke-rounded.svg';
import search from '../../assets/Icons/search-01-stroke-rounded.svg';
import hackathon from '../../assets/hackathon.jpg';

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('All');
  const [showAddPost, setShowAddPost] = useState(false); // new state to store the visibility of the floating text box
  const [newPost, setNewPost] = useState({ title: '', subject: '', description: '', type: '' }); // new state to store the new post data
  
  // Temporary data structure to store posts data. INTEGRATE WITH BACKEND 
  const [posts, setPosts] = useState([
    { id: 1, title: 'Internship at Google', subject: 'Google is offering an internship for software engineers. Apply now!', description: "Share your experiences and learnings from your internship, highlighting key projects or tasks you worked on, such as developing a new feature for their flagship product, Quantum Leap.", type: 'Internships' },
    { id: 2, title: 'Hackathon Event', subject: 'Join the CodeFest hackathon happening next month.', description: "Talk about your team's project, the challenges you faced, and the solutions you came up with. Share photos or videos of the hackathon experience, such as the late-night coding sessions or the final pitch presentations.", type: 'Hackathons', image: hackathon },
    { id: 3, title: 'Collaborate on Project', subject: 'Looking for students to collaborate on a web development project.', description: "Introduce your collaborators and explain the project you're working on, which is a renewable energy initiative aimed at developing a new type of solar panel. Share the goals, challenges, and expected outcomes.", type: 'Project Collabs' },
    { id: 4, title: 'Internship at Microsoft', subject: 'Internship, NovaTech Labs, Data Analyst', description: 'Give a glimpse into the company culture, work environment, and team dynamics. Share photos or videos of your team outings or company events, like the recent Innovation Hackathon.', type: 'Internships' },
    { id: 5, title: 'Hackathon for Beginners', subject: "Hackathon, Hacktopia, AI-Powered Language Translator", description: "Highlight the fast-paced nature of hackathons and the thrill of building something from scratch in a limited timeframe. Share a photo of your team's final prototype or a video of it in action.", type: 'Hackathons' },
  ]);

  // Code for filtering posts
  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setShowDropdown(false);
  };

  // Code to expand post to reveal description
  const handleExpandClick = (event) => {
    const post = event.target.closest('.home-post');
    const description = post.querySelector('.home-description');
    const icon = post.querySelector('.home-expand img');

    description.style.display = description.style.display === 'none' ? 'block' : 'none';
    icon.src = description.style.display === 'none' ? down : up;
  };

  // Code to create new post
  const [isBlurred, setIsBlurred] = useState(false); // new state to track blur state

  const handleAddPostClick = () => {
    setShowAddPost(true);
    setIsBlurred(true);
  };
  
  const handleNewPostChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };
  
  const handleSavePost = () => {
    const newPostId = posts.length + 1;
    const newPostData = { id: newPostId, ...newPost };
    setPosts([newPostData, ...posts]);
    setShowAddPost(false);
    setIsBlurred(false);
    setNewPost({ title: '', subject: '', description: '', type: '' });
  };

  return (
    <div>
      <Navbar /> {/* Navbar imported from layouts */}
      <Sidebar /> {/* Sidebar right imported from layouts */}
      <div className="home-container">
        <main className={`home-main-feed ${isBlurred ? 'home-blurred' : ''}`}>
          <div className="home-search-bar-home">
            <input className='home-search-input' type="text" placeholder="Search..." />
            <img className='home-search-icon' src={search} alt="search icon" />
            <div className='home-search-options'>
              <img className='home-add-post' src={add} alt='add post' title='Add Post' onClick={handleAddPostClick} />
              <img src={filter} className='home-filter' onClick={handleFilterClick} />
            </div>
            <ul className={showDropdown ? 'home-filter-dropdown show' : 'home-filter-dropdown'}>
              <li><a href="#" onClick={() => handleFilterChange('Internships')}>Internships</a></li>
              <li><a href="#" onClick={() => handleFilterChange('Hackathons')}>Hackathons</a></li>
              <li><a href="#" onClick={() => handleFilterChange('Project Collabs')}>Project Collabs</a></li>
              <li><a href="#" onClick={() => handleFilterChange('All')}>All</a></li>
            </ul>
          </div>
          <div className='home-post-container'>
          {posts.filter(post => currentFilter === 'All' || post.type === currentFilter).map(post => (
            <div className="home-post" key={post.id}>
              <h3>{post.title}</h3>
              {post.image && (
                <img className='home-post-img' src={post.image} alt="" />
              )}
              <p className='home-subject'>{post.subject}</p>
              <div className='home-description' style={{ display: 'none' }}>{post.description}</div>
              <div className='home-expand'>
                <button className="home-post_btn">Apply Now</button>
                <img src={down} alt='down button' onClick={handleExpandClick} />
              </div>
            </div>
          ))}
          </div>
        </main>

        {/* Post form element */}
        {showAddPost && (
          <div className='home-floating-textbox'>
            <h4>Add New Post</h4>
            <button className="home-close-btn" onClick={() => { setShowAddPost(false); setIsBlurred(false); }}>X</button>
            <input type="text" name="title" value={newPost.title} onChange={handleNewPostChange} placeholder="Title" />
            <input type="text" name="subject" value={newPost.subject} onChange={handleNewPostChange} placeholder="Subject" />
            <textarea name="description" value={newPost.description} onChange={handleNewPostChange} placeholder="Description" />
            <select name="type" value={newPost.type} onChange={handleNewPostChange}>
              <option value="">Select Type</option>
              <option value="Internships">Internships</option>
              <option value="Hackathons">Hackathons</option>
              <option value="Project Collabs">Project Collabs</option>
            </select>
            <button onClick={handleSavePost}>Post</button>
          </div>
        )}
      </div>

      <aside className="home-sidebar-right"> {/* Sidebar right element */}
        <h4>Trending</h4>
        <div className='home-trending-container'>
          <h5>#Articles/Resources</h5>
          <ul>
            <li><a href="#">-How to Ace Your First Tech Internship Interview</a></li>
            <li><a href="#">-UI/UX Design Bootcamp</a></li>
            <li><a href="#">-10 Best Tools for Collaborative Coding Projects</a></li>
          </ul>
        </div>
        <div className='home-trending-container'>
          <h5>#Popular Students</h5>
          <ul>
            <li><a href="#">-John Doe - Leading the Data Science Club</a></li>
            <li><a href="#">-Jane Smith - Top Contributor in Hackathons</a></li>
          </ul>
        </div>
        <div className='home-trending-container'>
          <h5>#Popular Internships</h5>
          <ul>
            <li><a href="#">-Data Science Internship at Microsoft</a></li>
            <li><a href="#">-Frontend Development Internship at Meta</a></li>
          </ul>
        </div>
        <div className='home-trending-container'>
          <h5>#Workshops/Webinars</h5>
          <ul>
            <li><a href="#">-UI/UX Design Bootcamp</a></li>
            <li><a href="#">-React Workshop for Beginners</a></li>
          </ul>
        </div>
        <div className='home-trending-container'>
          <h5>#Workshops/Webinars</h5>
          <ul>
            <li><a href="#">-UI/UX Design Bootcamp</a></li>
            <li><a href="#">-React Workshop for Beginners</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Home;
