import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! We will get back to you soon.`);
    // You can add API logic here to send the form data
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button class='btn'  type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
