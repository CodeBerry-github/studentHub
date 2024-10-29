import React from 'react'
import './messaging.css'
import Sidebar from '../../layouts/Sidebar/Sidebar';
import Navbar from '../../layouts/NavBar/Navbar';

const Messaging = () => {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="message-container">
        <main className="message-main">
          <div className="message-text-input">
            <input type="text" placeholder="Message..."/>
          </div>
        </main>

        <aside className="message-sidebar-right">
          <h4>Messages</h4>
        </aside>
      </div>
    </div>
  );
};

export default Messaging;