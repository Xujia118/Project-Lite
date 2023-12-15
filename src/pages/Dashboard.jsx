import { useState } from "react";

import EditProject from "../components/EditProject";

import "./Dashboard.css";

function Dashbord({ projectList, setProjectList, newProject, setNewProject }) {
  const [editingProjectId, setEditingProjectId] = useState(null);

  function deleteProject(projectId) {
    setProjectList(projectList.filter((project) => project.id !== projectId));
  }

  return (
    <>
      {projectList.length === 0 && "No Project"}
      {editingProjectId ? (
        <div>
          <EditProject
            project={projectList.find((project) => project.id === editingProjectId)}
            newProject={newProject}
            setNewProject={setNewProject}
            editingProjectId={editingProjectId}
            setEditingProjectId={setEditingProjectId}
          />
          
        </div>
      ) : (
        <ul className="cards">
          {projectList.map((project) => (
            <li className="card" key={project.id}>
              <h3 className="card-title">{project.name}</h3>
              <div className="card-deadline">{project.deadline}</div>
              <div className="card-description">{project.description}</div>
              <button onClick={() => setEditingProjectId(project.id)}>Edit</button>
              <button onClick={() => deleteProject(project.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Dashbord;
