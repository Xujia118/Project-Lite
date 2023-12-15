import { useState } from "react";

function AddNote({ noteList, setNoteList }) {
  const [newNote, setNewNote] = useState({
    id: "",
    title: "",
    text: "",
  });

  function handleSubmit() {
    setNoteList([...noteList, newNote]);
    setNewNote({
      id: crypto.randomUUID(),
      title: "",
      text: "",
    });
  }

  return (
    <div>
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
        onChange={(event) =>
          setNewNote({ ...newNote, text: event.target.value })
        }
      ></textarea>
      <button>Cancel</button>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default AddNote;
