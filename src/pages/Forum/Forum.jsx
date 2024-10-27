import React from 'react'
import './forum.css'
import Sidebar from '../../layouts/Sidebar/Sidebar';
import Navbar from '../../layouts/NavBar/Navbar';
import post from '../../assets/Icons/sent-stroke-rounded.svg';
import thread_icon from '../../assets/anish.jpg';
import post_profile from '../../assets/anish.jpg';
import add from '../../assets/Icons/add-square-stroke-rounded.svg';
import search from '../../assets/Icons/search-01-stroke-rounded.svg';
import image from '../../assets/Icons/image-02-stroke-rounded.svg';
import clip from '../../assets/Icons/attachment-02-stroke-rounded.svg';
import post_image from '../../assets/hackathon.jpg'
import like from '../../assets/Icons/Like1-Linear-32px.svg'
import dislike from '../../assets/Icons/Dislike-Linear-32px.svg'
import comment from '../../assets/Icons/bubble-chat-stroke-rounded.svg'
import share from '../../assets/Icons/share-01-stroke-rounded.svg'

const Thread = (props) => {
  return (
    <div className="cardMain">
      <img src={props.image} alt={props.alt} />
      <p className="cardText">{props.text}</p>
    </div>
  )
} 

const Forum = () => {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="forum-container">
        <main className="forum-feed">
          <div className="forum-feed-container">
            <div className="forum_post">
              <div className="forum_post_details">
                <img src={`https://robohash.org/default?size=20x20`} alt="post_profile_pic" />
                <p>User123</p>
              </div>
              <h4>Lorem ipsum, dolor sit amet consectetur adipi.</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iure rem ullam, hic nemo perspiciatis recusandae consectetur aperiam incidunt aspernatur consequatur alias facere esse neque architecto quae quaerat. Corrupti, praesentium</p>
              <img src="https://picsum.photos/300/400" alt="post_image" />
              <div className="forum_post_bottom">
                <div className="forum_post_bottom_like">
                  <img src={like} alt="like" />
                  <p>3</p>
                </div>
                <img src={dislike} alt="dislike" />
                <img src={comment} alt="comment" />
                <img src={share} alt="share" />
              </div>
            </div>
            <div className="forum_post">
              <div className="forum_post_details">
                <img src={`https://robohash.org/default1?size=20x20`} alt="post_profile_pic" />
                <p>CoolCat</p>
              </div>
              <h4>Lorem ipsum, dolor sit amet consectetur adipi.</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iure rem ullam, hic nemo perspiciatis recusandae consectetur aperiam incidunt aspernatur consequatur alias facere esse neque architecto quae quaerat. Corrupti, praesentium</p>
              <img src={post_image} alt="post_image" />
              <div className="forum_post_bottom">
                <div className="forum_post_bottom_like">
                  <img src={like} alt="like" />
                  <p>69</p>
                </div>
                <img src={dislike} alt="dislike" />
                <img src={comment} alt="comment" />
                <img src={share} alt="share" />
              </div>
            </div>
            <div className="forum_post">
              <div className="forum_post_details">
                <img src={`https://robohash.org/default9?size=20x20`} alt="post_profile_pic" />
                <p>GamerGuy</p>
              </div>
              <h4>Lorem ipsum, dolor sit amet consectetur adipi.</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iure rem ullam, hic nemo perspiciatis recusandae consectetur aperiam incidunt aspernatur consequatur alias facere esse neque architecto quae quaerat. Corrupti, praesentium</p>
              <img src="https://picsum.photos/300/300" alt="post_image" />
              <div className="forum_post_bottom">
                <div className="forum_post_bottom_like">
                  <img src={like} alt="like" />
                  <p>112</p>
                </div>
                <img src={dislike} alt="dislike" />
                <img src={comment} alt="comment" />
                <img src={share} alt="share" />
              </div>
            </div>
          </div>
          <div className="forum-search-bar-forum">
            <input type="text" placeholder="Message ..."/>
            <img className='forum-clip-icon' src={clip} alt="search thread icon" />
            <img className='forum-image-icon' src={image} alt="search thread icon" />
            <img className='forum-post-icon' src={post} alt="post icon" />
          </div>
        </main>

        <aside className="forum-sidebar-right">
        <div className="forum-sidebar-content">
          <h4>Forums</h4>
            <div className="forum-search-bar-thread">
              <input type="text" placeholder="Search ..."/>
              <img className='forum-thread-search-icon' src={search} alt="search thread icon" />
            </div>
            <div className="forum-create-thread">
              <img src={add} alt="add thread" />
              <p>Create a thread</p>
            </div>
            <Thread image={thread_icon} alt="Thread Icon" text="General"/>
            <Thread image={thread_icon} alt="Thread Icon" text="UI/UX"/>
            <Thread image={thread_icon} alt="Thread Icon" text="JavaScript"/>
            <Thread image={thread_icon} alt="Thread Icon" text="React"/>
            <Thread image={thread_icon} alt="Thread Icon" text="Next JS"/>
            <Thread image={thread_icon} alt="Thread Icon" text="Latest Tech News"/>
            <Thread image={thread_icon} alt="Thread Icon" text="CSS"/>
            <Thread image={thread_icon} alt="Thread Icon" text="Hackathons"/>
            <Thread image={thread_icon} alt="Thread Icon" text="JavaScript"/>
            <Thread image={thread_icon} alt="Thread Icon" text="React"/>
            <Thread image={thread_icon} alt="Thread Icon" text="UI/UX"/>
            <Thread image={thread_icon} alt="Thread Icon" text="JavaScript"/>
            <Thread image={thread_icon} alt="Thread Icon" text="React"/>
        </div>
        </aside>
      </div>
    </div>
  );
};

export default Forum;