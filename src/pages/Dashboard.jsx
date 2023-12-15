import { useState } from "react";

import EditProject from "../components/EditProject";

function Dashbord({ projectList, setProjectList, newProject, setNewProject }) {
  const [editingProjectId, setEditingProjectId] = useState(null);

  function deleteProject(projectId) {
    setProjectList(projectList.filter((project) => project.id !== projectId));
  }

  return (
    <div>
      {projectList.length === 0 && "No Project"}
      {projectList.map((project) =>
        editingProjectId === project.id ? (
          <EditProject
          key={project.id}
            project={project}
            newProject={newProject}
            setNewProject={setNewProject}
          />
        ) : (
          <li key={project.id}>
            {project.name}
            <button onClick={() => setEditingProjectId(project.id)}>
              Edit
            </button>
            <button onClick={() => deleteProject(project.id)}>Delete</button>
          </li>
        )
      )}
    </div>
  );
}

export default Dashbord;
