import { useState } from "react";

function Dashbord({ projectList, setProjectList }) {
  return (
    <div>
      Dashbord
      {projectList.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </div>
  );
}

export default Dashbord;
