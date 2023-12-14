import React, { useState } from "react";
import Button from "./Button";
import "./EditProject.css";

function EditProject({ project, onSave, onCancel }) {
  // State for the edited project data
  const [formData, setFormData] = useState({
    name: project.name,
    description: project.description,
    deadline: project.deadline,
  });

  // Function to handle input change
  const handleInputChange = (event, field) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  // Handle form submission
  const handleForm = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <div className="edit-project-container">
      <form onSubmit={handleForm}>
        <h3>Edit Project</h3>

        <div className="field-container">
          <label htmlFor="edit-project-name">Project Name: </label>
          <input
            id="edit-project-name"
            type="text"
            value={formData.name}
            onChange={(event) => handleInputChange(event, "name")}
          />
        </div>
        <div className="field-container">
          <label htmlFor="edit-project-description">Description: </label>
          <textarea
            id="edit-project-description"
            value={formData.description}
            onChange={(event) => handleInputChange(event, "description")}
          />
        </div>
        <div className="field-datetime">
          <label htmlFor="edit-project-deadline">Deadline: </label>
          <input
            type="date"
            id="edit-project-deadline"
            value={formData.deadline}
            onChange={(event) => handleInputChange(event, "deadline")}
          />
        </div>

        <div className="button-container">
          <Button label="Cancel" className="button cancel" onClick={onCancel} />
          <Button label="Save" type="submit" className="button save" />
        </div>
      </form>
    </div>
  );
}

export default EditProject;
