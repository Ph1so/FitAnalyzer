import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';
import './WaitlistPage.css';

const WaitlistPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Submitting...');

    try {
      await addDoc(collection(db, "waitlist"), {
        email: email,
        timestamp: new Date()
      });
      setMessage('Thank you! You have been added to the waitlist.');
      setEmail('');
    } catch (error) {
      console.error("Error adding document: ", error); // Log the error
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="waitlist-page">
      <div className="contentWaitlist">
        <h1>Endure AI</h1>
        {/* <p>Unlock Your Peak Performance</p> */}
        <p class='third'>Be notified for when user account creation and saved workout data across sessions is added!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Join Waitlist</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default WaitlistPage;