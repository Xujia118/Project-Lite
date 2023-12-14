import { useState, useRef } from "react";

import AddProject from "./components/AddProject";

import "./App.css";
import Dashbord from "./pages/Dashboard";

function App() {
  const [projectList, setProjectList] = useState([]);

  // const [showEdit, setShowEdit] = useState(false);
  // const [selectedProject, setSelectedProject] = useState(null);

  function addProject() {
    setProjectList([...projectList, newProject]);
    setNewProject({
      name: "",
      description: "",
      deadline: "",
    });
  }

  // function deleteProject(index) {
  //   const updatedProjects = [...projectList];
  //   updatedProjects.splice(index, 1);
  //   setProjectList(updatedProjects);
  // }

  // function editProject(index) {
  //   setNewProject(projectList[index]);
  //   setSelectedProject(index);
  //   setShowEdit(true);
  // }

  // function saveEdit() {
  //   const updatedProjects = [...projectList];
  //   updatedProjects[selectedProject] = newProject;
  //   setProjectList(updatedProjects);
  //   setNewProject({
  //     name: "",
  //     description: "",
  //     deadline: "",
  //   });
  //   setSelectedProject(null);
  //   setShowEdit(false);
  // }

  // function cancelEdit() {
  //   setNewProject({
  //     name: "",
  //     description: "",
  //     deadline: "",
  //   });
  //   setSelectedProject(null);
  //   setShowEdit(false);
  // }

  return (
    <>
      <AddProject projectList={projectList} setProjectList={setProjectList} />
      <Dashbord projectList={projectList} setProjectList={setProjectList} />
    </>
  );
}

export default App;
