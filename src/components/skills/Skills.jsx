import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-container project-management">
        <h2
          className="a-title"
          style={{
            fontWeight: 600,
            textDecoration: "underline",
            marginBottom: "25px",
          }}
        >
          Project Management Skills
        </h2>
        <ul>
          <li>Requirements Analysis</li>
          <li>Effective Communication </li>
          <li>Scheduling & Time Management</li>
          <li>Leadership Skills</li>
          <li>Critical Thinking </li>
          <li>Stakeholder Management</li>
          <li>Risk Management</li>
          <li>Resource Allocation</li>
          <li>Quality Assurance</li>
          <li>Problem Solving</li>
        </ul>
      </div>
      <div className="skills-container">
        <h2
          className="a-title"
          style={{
            fontWeight: 600,
            textDecoration: "underline",
            marginBottom: "25px",
          }}
        >
          Technologies & Tools I'm good at
        </h2>
        <ul>
          <li>React Js</li>
          <li>HTML</li>
          <li>CSS/SASS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>MySQL</li>
          <li>React Native</li>
          <li>Node Js</li>
          <li>Android Studio</li>
          <li>Java</li>
          <li>IOT</li>
          <li>Git</li>
          <li>Jira</li>
          <li>Confluence</li>
          <li>Trello</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
