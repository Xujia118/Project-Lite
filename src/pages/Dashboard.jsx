function Dashbord({ projectList, setProjectList }) {
  
  function deleteProject(projectId) {
    setProjectList(projectList.filter(project => project.id !== projectId));
  }

  return (
    <div>
      Dashbord
      {projectList.map((project) => (   // Can't directly show objects. Have to map to each object and display keys.
        <li key={project.id}>{project.name}
        <button>Edit</button>
        <button onClick={() => deleteProject(project.id)}>Delete</button>
        </li> 
      ))} 
    </div>
  );
}

export default Dashbord;
