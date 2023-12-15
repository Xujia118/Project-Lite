import { useState } from "react";
import AddNote from "./AddNote";
import "./EditProject.css";

function EditProject({
  project,
  newProject,
  setNewProject,
  editingProjectId,
  setEditingProjectId,
}) {
  const [noteList, setNoteList] = useState([]);

  function handleDeleteNote(noteId) {
    setNoteList(noteList.filter((note) => note.id !== noteId));
  }

  return (
    <div className="main-wrapper">
      <div className="project-info-bar">
        <h2>{project.name}</h2>
        {project.description}
        {project.deadline}
      </div>

      <ul className="notes-bar">
        {noteList.length === 0 && "No notes"}
        {noteList.map((note) => (
          <button className="notes-button" key={note.id}>
            <li>{note.title}</li>
          </button>
        ))}
      </ul>

      <div className="compose-area">
        <AddNote
          noteList={noteList}
          setNoteList={setNoteList}
          editingProjectId={editingProjectId}
          setEditingProjectId={setEditingProjectId}
        />
      </div>
    </div>
  );
}

export default EditProject;
