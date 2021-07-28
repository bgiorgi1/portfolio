import "./Contact.scss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Contact(props) {
    return <div className="Contact" id="Contact">
        <h1>Get In Touch</h1>

        <link href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" rel="stylesheet"></link>
       
        <p className="ContactBody">My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
       
       
       
       <p className= "icon-links"> 
       <a href="mailto:brianna.giorgi@gmail.com" rel="noopener noreferrer"  target="_blank" className="social"> <i class="fas fa-envelope-square"></i></a>
       <a href="https://www.linkedin.com/in/briannagiorgi/" rel="noopener noreferrer"  target="_blank" className="social"> <i class="fab fa-linkedin"></i></a>
       <a href="https://github.com/bgiorgi1" rel="noopener noreferrer"  target="_blank" className="social"> <i class="fab fa-github-square"></i></a>
       <a href="https://docs.google.com/document/d/19Neht-s540Y0C3XwI7pqF__r-hOuGlUtWM0yq6YehBE/edit?usp=sharing" rel="noopener noreferrer"  target="_blank" className="social"> <i class="fas fa-file"></i></a>
       </p>
    </div>;
  }

  export default Contact;