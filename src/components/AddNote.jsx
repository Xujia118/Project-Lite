import { useState } from "react";
import "./AddNote.css";

function AddNote({
  noteList,
  setNoteList,
  addingNewNote,
  setAddingNewNote
}) {
  const [newNote, setNewNote] = useState({
    id: "",
    title: "",
    text: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    // Must set the ID first 
    const updatedNewNote = { ...newNote, id: crypto.randomUUID() };

    // Then update the note list with a new note, it will have the ID we just set
    setNoteList([...noteList, updatedNewNote]);

    // Then we can reset note
    setNewNote({
      id: "",
      title: "",
      text: "",
    })

    // And clear adding state to false
    setAddingNewNote(false);
  }

  return (
    <form className="form-add-note" onSubmit={handleSubmit}>
      <label>
        Note Title:
        <input
          type="text"
          value={newNote.title}
          onChange={(event) =>
            setNewNote({ ...newNote, title: event.target.value })
          }
        />
      </label>

      <textarea
        className="compose-area"
        value={newNote.text}
        onChange={(event) =>
          setNewNote({ ...newNote, text: event.target.value })
        }
      ></textarea>
      <div className="compose-area-button-container">
        <button >Save</button>
      </div>
    </form>
  );
}

export default AddNote;
