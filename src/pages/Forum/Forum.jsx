import React, { useState} from 'react'
import './forum.css'
import Sidebar from '../../layouts/Sidebar/Sidebar';
import Navbar from '../../layouts/NavBar/Navbar';
import post from '../../assets/Icons/sent-stroke-rounded.svg';
import thread_icon from '../../assets/anish.jpg';
import add from '../../assets/Icons/add-square-stroke-rounded.svg';
import search from '../../assets/Icons/search-01-stroke-rounded.svg';
import image from '../../assets/Icons/image-02-stroke-rounded.svg';
import clip from '../../assets/Icons/attachment-02-stroke-rounded.svg';
import post_image from '../../assets/hackathon.jpg'
import like from '../../assets/Icons/Like1-Linear-32px.svg'
import dislike from '../../assets/Icons/Dislike-Linear-32px.svg'
import comment from '../../assets/Icons/bubble-chat-stroke-rounded.svg'
import share from '../../assets/Icons/share-01-stroke-rounded.svg'
import reply from '../../assets/Icons/arrow-move-up-left-stroke-rounded.svg'
import reply_next from '../../assets/Icons/arrow-move-down-right-stroke-rounded.svg'

const Thread = (props) => {
  return (
    <div className="cardMain">
      <img src={props.image} alt={props.alt} />
      <p className="cardText">{props.text}</p>
    </div>
  )
}

const ForumPost = ({ postDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(postDetails.comments);
  const [replyInput, setReplyInput] = useState({});
  
  const toggleComments = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { user: 'You', text: newComment, replies: [] }]);
      setNewComment('');
    }
  };

  const handleReplyIconClick = (index) => {
    setReplyInput((prev) => ({
      ...prev,
      [index]: prev[index] === undefined ? '' : undefined  // Toggles between open and closed
    }));
  };

  const handleReplyInputChange = (index, value) => {
    setReplyInput({ ...replyInput, [index]: value });
  };

  const handleAddReply = (index) => {
    if (replyInput[index]?.trim() !== '') {
      const updatedComments = comments.map((comment, i) => 
        i === index ? { ...comment, replies: [...(comment.replies || []), { user: 'You', text: replyInput[index] }] } : comment
      );
      setComments(updatedComments);
      setReplyInput({ ...replyInput, [index]: undefined });  // Close reply field after replying
    }
  };

  return (
    <div className="forum_post">
      <div className="forum_post_details">
        <img src={postDetails.profilePic} alt="post_profile_pic" />
        <p>{postDetails.username}</p>
      </div>
      <h4>{postDetails.title}</h4>
      <p>{postDetails.content}</p>
      <img src={postDetails.image} alt="post_image" />
      <div className="forum_post_bottom">
        <div className="forum_post_bottom_like">
          <img src={like} alt="like" />
          <p>{postDetails.likes}</p>
        </div>
        <img src={dislike} alt="dislike" />
        <img src={comment} alt="comment" onClick={toggleComments} />
        <img src={share} alt="share" />
      </div>
      {isExpanded && (
        <div className="forum_comments_section">
          <h4>Comments:</h4>
          {comments.map((comment, index) => (
            <div className="forum_comments_section_inner">
              <div key={index} className="forum_comment">
              <div className="forum_comment_user">
                <strong>{comment.user}:</strong>
                <p>{comment.text}</p>
              </div>
              <div className="forum_comment_right">
                <img 
                  src={reply} 
                  alt="reply" 
                  onClick={() => handleReplyIconClick(index)}
                  style={{ cursor: 'pointer', marginLeft: '8px' }}
                />
                <p>reply</p>
              </div>
            </div>
            <div className="reply-container">
                {replyInput[index] !== undefined && (
                  <div className="reply-input">
                    <input
                      type="text"
                      placeholder="Reply..."
                      value={replyInput[index]}
                      onChange={(e) => handleReplyInputChange(index, e.target.value)}
                    />
                    <button onClick={() => handleAddReply(index)}>Reply</button>
                  </div>
                )}
                {comment.replies && comment.replies.map((reply, replyIndex) => (
                  <div key={replyIndex} className="forum_reply">
                    <img src={reply_next} alt="arrow" />
                    <strong>{reply.user}:</strong> <p>{reply.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="user_comment_container">
            <input
              type="text"
              placeholder="Add a comment..."
              className="forum_add_comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="comment_button" onClick={handleAddComment}>
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Forum = () => {

  const posts = [
    {
      profilePic: 'https://robohash.org/default?size=20x20',
      username: 'User123',
      title: 'Lorem ipsum, dolor sit amet consectetur adipi.',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
      image: 'https://picsum.photos/300/400',
      likes: 3,
      comments: [
        { user: 'Alice', text: 'This is so interesting!' },
        { user: 'Bob', text: 'Nice post!' },
      ],
    },
    {
      profilePic: 'https://robohash.org/default1?size=20x20',
      username: 'CoolCat',
      title: 'Check out this amazing hackathon!',
      content: 'I attended an amazing hackathon and wanted to share...',
      image: post_image,
      likes: 69,
      comments: [
        { user: 'Charlie', text: 'Awesome experience!' },
        { user: 'Dave', text: 'Let’s team up next time!' },
      ],
    },
    {
      profilePic: 'https://robohash.org/default9?size=20x20',
      username: 'GamerGuy',
      title: 'Game Development in React',
      content: 'Game development in React has been a lot of fun...',
      image: 'https://picsum.photos/300/300',
      likes: 112,
      comments: [
        { user: 'Eve', text: 'I’d love to learn more about this!' },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="forum-container">
        <main className="forum-feed">
          <div className="forum-feed-container">
            {posts.map((postDetails, index) => (
              <ForumPost key={index} postDetails={postDetails} />
            ))}
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