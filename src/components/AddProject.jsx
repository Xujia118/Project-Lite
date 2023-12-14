import React, { useState, useRef } from "react";

function AddProject({ projectList, setProjectList }) {
  const dialogRef = useRef();

  const [newProject, setNewProject] = useState({
    id: crypto.randomUUID(),
    name: "",
    description: "",
    deadline: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setProjectList([...projectList, newProject ])
    console.log("New project saved. Use newProject for further processing!");
    dialogRef.current.close();
  }

  return (
    <>
      <div className="button-container">
        <button
          className="create-project-button"
          onClick={() => dialogRef.current.showModal()}
        >
          Add Project
        </button>
      </div>

      <dialog className="dialog" ref={dialogRef}>
        <form className="create-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Create a New Project</h3>

          <div className="field-container">
            <label htmlFor="project-name">Project Name: </label>
            <input
              id="project-name"
              type="text"
              value={newProject.name}
              onChange={(event) =>
                setNewProject({ ...newProject, name: event.target.value })
              }
            />
          </div>
          <div className="field-container">
            <label htmlFor="project-description">Description: </label>
            <textarea
              type="text"
              id="project-description"
              value={newProject.description}
              onChange={(event) =>
                setNewProject({
                  ...newProject,
                  description: event.target.value,
                })
              }
            />
          </div>
          <div className="field-datetime">
            <label htmlFor="project-deadline">Deadline: </label>
            <input
              type="date"
              id="project-deadline"
              value={newProject.deadline}
              onChange={(event) =>
                setNewProject({ ...newProject, deadline: event.target.value })
              }
            />
          </div>

          <div className="button-container">
            <button
              className="button close"
              onClick={() => dialogRef.current.close()}
            >
              Close
            </button>
            <button className="button submit">Submit</button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default AddProject;
