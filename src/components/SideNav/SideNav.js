import React from "react";

import "./sidenav.css";
import Avatar from "../../Avatar.JPG";

export const SideNav = ({ handleSectionClick }) => {
  return (
    <div className="sidenav">
      <img src={Avatar} className="avatar" alt="avatar" />
      <h2 className="main-name">Kartike Dutta</h2>
      <p className="subtitle">"A tech enthusiast"</p>
      <div className="sections-list">
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("about")}
        >
          About Me
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("skills")}
        >
          Skills
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("projects")}
        >
          Projects
        </p>
      </div>
    </div>
  );
};
