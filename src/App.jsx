import { useState, useRef } from "react";

import AddProject from "./components/AddProject";

import "./App.css";
import Dashbord from "./pages/Dashboard";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [newProject, setNewProject] = useState({
    id: "",
    name: "",
    description: "",
    deadline: "",
  });

  return (
    <>
      <AddProject
        projectList={projectList}
        setProjectList={setProjectList}
        newProject={newProject}
        setNewProject={setNewProject}
      />
      <Dashbord
        projectList={projectList}
        setProjectList={setProjectList}
        newProject={newProject}
        setNewProject={setNewProject}
      />
    </>
  );
}

export default App;
