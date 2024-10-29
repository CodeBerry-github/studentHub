// Login.js
import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase.js';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './login.css';
import google_logo from '../../assets/Icons/Google.png';
import ParticleEffect from '../../components/ParticleEffect.jsx';
import password_icon from '../../assets/Icons/lock-stroke-rounded.svg';
import email_icon from '../../assets/Icons/mail-stroke-rounded.svg';

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
      <ParticleEffect className="particle" />
      <div className="login-container-wrapper">
        <div className='login-container'>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <img className='login-email-icon' src={email_icon} alt="email icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img className='login-password-icon' src={password_icon} alt="password icon" />
            <p>
              Don't have an account? <a href="/signup">Sign up here</a>
            </p>
            {error && (
              <p style={{ color: 'red', fontSize: '14px' }}>
                {error === 'Firebase: Error (auth/user-not-found).'
                  ? 'User  not found. Please check your email and password.'
                  : 'Invalid email or password. Please try again.'}
              </p>
            )}
            <button className='login-button' type="submit">Login</button>
          </form>
          <button className="google-button" onClick={handleGoogleSignIn}>
            <img className="google-logo" src={google_logo} alt="Google Logo" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
