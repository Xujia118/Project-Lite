import { useState } from "react";
import AddNote from "./AddNote";
import "./EditProject.css";

function EditProject({ project, setEditingProjectId }) {
  const [noteList, setNoteList] = useState([]);
  const [addingNewNote, setAddingNewNote] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);

  function handleDeleteNote(noteId) {
    setNoteList(noteList.filter((note) => note.id !== noteId));
    setEditingNoteId(null); // Clear editing state when deleting a note
  }

  return (
    <div className="main-wrapper">
      <div className="bar project-info">
        <p className="project-info">
          {project.name} | by {project.deadline} | {project.description}{" "}
        </p>
        <button
          className="button-return"
          onClick={() => setEditingProjectId(null)}
        >
          Back to project list
        </button>
      </div>

      {/* Control bar */}
      <div className="bar control">
        <button onClick={() => setAddingNewNote(true)}>New Note</button>
        <button onClick={() => handleDeleteNote(editingNoteId)}>
          Delete Note
        </button>
      </div>

      {/* Notes list */}
      <ul className="bar notes">
        {noteList.length === 0 && <span>No Notes</span>}
        {noteList.map((note) => (
          <li className="note-item" key={note.id}>
            <button
              className="button-note"
              onClick={() => {
                setEditingNoteId(note.id);
              }}
            >
              {note.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Note display area */}
      <div className="note-display-area">
        {addingNewNote ? (
          <AddNote
            noteList={noteList}
            setNoteList={setNoteList}
            addingNewNote={addingNewNote}
            setAddingNewNote={setAddingNewNote}
          />
        ) : editingNoteId !== null ? (
          <div>
            {/* const selectedNote = noteList.find(note => note.id === editingNoteId) */}
            {noteList.map((note) =>
              note.id === editingNoteId ? (
                <div key={note.id}>
                  <p>{note.title}</p>
                  <p>{note.text}</p>
                </div>
              ) : null
            )}
          </div>
        ) : (
          <div>
            <h3>No Note Selected</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditProject;
