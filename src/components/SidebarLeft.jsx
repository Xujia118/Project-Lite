import React from "react";

import "./NewProjectForm";

import "./SideBarLeft.css";

function SideBarLeft({ props }) {
  return (
    <aside className="sidebar">
      <NewProjectForm {...props} />
    </aside>
  );
}

export default SideBarLeft;
