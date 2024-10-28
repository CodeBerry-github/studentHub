import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import Home from './pages/Home/Home';
import Forum from './pages/Forum/Forum';
import Messaging from './pages/Messaging/Messaging';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route path="/forum" element={user ? <Forum /> : <Navigate to="/" />} />
        <Route path="/messages" element={user ? <Messaging /> : <Navigate to="/" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
