import React from 'react'
import './forum.css'
import Sidebar from '../../layouts/Sidebar/Sidebar';
import Navbar from '../../layouts/NavBar/Navbar';

const Forum = () => {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="forum-container">
        <main className="forum-feed">
          <div className="forum-search-bar-forum">
            <input type="text" placeholder="Search..."/>
          </div>
        </main>

        <aside className="forum-sidebar-right">
          <h4>Forums</h4>
        </aside>
      </div>
    </div>
  );
};

export default Forum;