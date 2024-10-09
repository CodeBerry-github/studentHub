// Login.js
import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase.js'; // Adjust the path as necessary
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './login.css';
import google_logo from '../../assets/Icons/Google.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home'); // Redirect to the home page
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/home'); // Redirect to the home page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='login-main'>
      <div className='login-container'>
        <h1>Login</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p>
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
          <button className='login-button' type="submit">Login</button>
        </form>
        <button className="google-button" onClick={handleGoogleSignIn}>
          <img className="google-logo" src={google_logo} alt="Google Logo" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
