import "./Contact.scss";
import React from "react";


function Contact(props) {
    return <div className="Contact" id="Contact">
        <h1>Get In Touch</h1>
       
        <p className="ContactBody">My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
       <a href="mailto:brianna.giorgi@gmail.com" rel="noopener noreferrer"  target="_blank"> <button className="email-link" >Say Hello</button></a>
      
    </div>;
  }

  export default Contact;