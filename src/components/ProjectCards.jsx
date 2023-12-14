import React from "react";
import ProgressBar from "./ProgressBar";
import "./ProjectCards.css";

function ProjectCards({ projects, onProjectsChange, onEdit }) {
  // Function to check if the deadline is within a week
  const isApproachingDeadline = (deadline) => {
    const oneWeekInDays = 7;
    const deadlineDate = new Date(deadline);
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + oneWeekInDays);

    return deadlineDate <= oneWeekFromNow;
  };

  // Filter projects approaching deadline
  const projectsApproachingDeadline = projects.filter((project) =>
    isApproachingDeadline(project.deadline)
  );

  // Filter projects further from deadline
  const otherProjects = projects.filter(
    (project) => !isApproachingDeadline(project.deadline)
  );

  return (
    <div className="main-content">
      <div className="card-container">
        <h3 className="container-title">Approaching deadlines</h3>
        <hr />
        <div className="cards">
          {projectsApproachingDeadline.length === 0 ? (
            <p className="card-none">No projects in deadline</p>
          ) : (
            projectsApproachingDeadline.map((project, index) => (
              <div key={project.name} className="card">
                <div className="card-text-container">
                  <h4 className="card-title">{project.name}</h4>
                  <p className="card-deadline">{project.deadline}</p>
                  <p className="card-description">{project.description}</p>
                  <p>
                    <a href="#" onClick={() => onEdit(index)}>
                      Edit
                    </a>
                  </p>
                </div>
                <ProgressBar />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="card-container">
        <h3 className="container-title">Further projects</h3>
        <hr />
        <div className="cards">
          {projects.length === 0 ? (
            <p className="card-none">No other projects</p>
          ) : (
            otherProjects.map((project, index) => (
              <div key={project.name} className="card">
                <div className="card-text-container">
                  <h4 className="card-title">{project.name}</h4>
                  <p className="card-deadline">{project.deadline}</p>
                  <p className="card-description">{project.description}</p>
                  <p>
                    <a href="#" onClick={() => onEdit(index)}>
                      Edit
                    </a>
                  </p>
                </div>
                <ProgressBar />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
