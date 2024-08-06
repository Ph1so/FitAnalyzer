// Waitlist.js
import React, { useState } from "react";
import "./Waitlist.css";
import { firestore } from "../../firebasefirebase";
import { collection, addDoc } from "firebase/firestore";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await addDoc(collection(firestore, "waitlist"), {
          email,
        });
        setMessage("Email added to the waitlist successfully!");
        setEmail("");
      } catch (error) {
        setMessage("Error adding email to waitlist: " + error.message);
      }
    } else {
      setMessage("Please enter an email address.");
    }
  };

  return (
    <div className="waitlist-container">
      <h1 className="waitlist-title">Join Our Waitlist</h1>
      <form className="waitlist-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="waitlist-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" className="waitlist-button">
          Submit
        </button>
      </form>
      {message && <p className="waitlist-message">{message}</p>}
    </div>
  );
}
