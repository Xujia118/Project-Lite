import { useState } from "react";
import "./AddNote.css";

function AddNote({
  noteList,
  setNoteList,
  editingProjectId,
  setEditingProjectId,
}) {
  const [newNote, setNewNote] = useState({
    id: "",
    title: "",
    text: "",
  });

  function handleSubmit() {
    // 以下code和正式code有啥区别？
    //   setNoteList((prevNoteList) => [...prevNoteList, newNote]);
    //   setNewNote((prevNote) => ({
    //     ...prevNote,
    //     id: crypto.randomUUID(),
    //     title: "",
    //     text: "",
    //   }));
    // }

    setNoteList([...noteList, newNote]);
    setNewNote({ ...newNote, id: crypto.randomUUID(), title: "", text: "" });
  }

  return (
    <>
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
        <button onClick={() => setEditingProjectId(null)}>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </>
  );
}

export default AddNote;
