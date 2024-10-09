// Signup.js
import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase.js'; // Adjust the path as necessary
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import google_logo from '../../assets/Icons/Google.png'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
 const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home'); // Redirect to the home page after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/home'); // Redirect to the home page after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='signup-main'>
      <div className="signup-container">
        <h1>Signup</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSignup}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>

          <button className='signup-button' type="submit">Signup</button>
        </form>
        <button className="google-button" onClick={handleGoogleSignup}>
          <img className="google-logo" src={google_logo} alt="Google Logo" />
          Signup with Google</button>
      </div>
    </div>
  );
};

export default Signup;