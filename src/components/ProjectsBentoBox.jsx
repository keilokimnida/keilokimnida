import React from "react";

const ProjectsBentoBox = ({ children, className }) => {
  return (
    <a href="#" className="l-Projects-Bento-box">
      <div className={`c-Projects-Bento-box ${className}`}>
        <div className="c-Projects-Bento-box--inner">{children}</div>
      </div>
    </a>
  );
};

export default ProjectsBentoBox;
