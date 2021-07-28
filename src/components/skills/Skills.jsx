import React from "react";
import "./Skills.css"


// Function based React Component
const Skills = (props) => {
  return (
    <div className="Languages" id="Skills">
      <span>
        <h1 className="Languages_title">
          Skills
          {/* <div className="Period">.</div> */}
        </h1>
      </span>
      <p className="skills_wrapper">
        <ul className="skills_list">
          <li className="skills_item">
            <div className="item_title">Languages:</div>Javascript
            <div className="slashes">// </div>Python
            <div className="slashes">// </div> HTML
            <div className="slashes">// </div> CSS
            <div className="slashes">// </div> Markdown
            <div className="slashes">// </div>PHP
           
          </li>
          <li className="skills_item">
            <div className="item_title">Libraries & Frameworks: </div>React
            <div className="slashes">// </div> Wordpress
            <div className="slashes">// </div>Express
            <div className="slashes">// </div>Node.js
            <div className="slashes">// </div>Mongoose
            <div className="slashes">// </div>Material-UI
            <div className="slashes">// </div>Bootstrap
          </li>
          <li className="skills_item">
            <div className="item_title">Databases: </div> MongoDB
            <div className="slashes">// </div> Postgres
            <div className="slashes">// </div>SQL
           
          </li>
          <li className="skills_item">
            <div className="item_title">Testing: </div>Mocha
            {/* <div className="slashes">// </div>Enzyme{" "} */}
          </li>
          <li className="skills_item">
            <div className="item_title">Additional Skills: </div>Git
            <div className="slashes">// </div>GitHub
            <div className="slashes">// </div>AJAX
            <div className="slashes">// </div>REST
            <div className="slashes">// </div>Object-Oriented Programming
            <div className="slashes">// </div>Responsive Design
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Skills;