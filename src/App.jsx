import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Forum from './pages/Forum/Forum';
import Messaging from './pages/Messaging/Messaging'
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/messages" element={<Messaging />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;