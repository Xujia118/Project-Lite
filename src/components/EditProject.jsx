import { useState } from "react";
import AddNote from "./AddNote";
import "./EditProject.css";

function EditProject({ project, newProject, setNewProject }) {
  // const [isEditingNoteId, setIsEditingNoteId] = useState(null);

  const [noteList, setNoteList] = useState([]);

  function handleDeleteNote(noteId) {
    setNoteList(noteList.filter((note) => note.id !== noteId));
  }

  return (
    <>
      <div className="project-info-bar">
        <h2>{project.name}</h2>
        {project.description}
        {project.deadline}
      </div>

      <>
        <AddNote noteList={noteList} setNoteList={setNoteList} />
      </>

      <ul>
        {noteList.length === 0 && "No notes"}
        {noteList.map((note) => (
          <button className="button nav" key={note.id}>
            <li>{note.title}</li>
          </button>
        ))}
      </ul>
    </>
  );
}

export default EditProject;
