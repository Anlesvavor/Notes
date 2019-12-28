import React, { useState } from 'react';

import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/SideBar';
import WorkArea from './components/workarea/WorkArea';

import './App.css';

function App() {

  const data = [
    {id: 1, title: "Note1", text: "tex1"},
    {id: 2, title: "Note2", text: "tex2"},
    {id: 3, title: "Note3", text: "tex3"}
  ];
  const [selectedNote, setSelectedNote] = useState(data[0]);
  const [notes, setNotes] = useState(data);

  const toggleSideBar = () => {
    document.getElementById('side-bar').classList.toggle("active");
  };
  const selectNote = id => {
    setSelectedNote(notes.filter(note => note.id === id)[0]);
  }
  const save = newNote => {
    console.log(notes);
    setNotes(notes.filter(note=>note.id !== newNote.id));
    console.log(notes.filter(note=>note.id !== newNote.id));
    setNotes([...notes, newNote]);
    console.log(notes);

  }

  return (
    <div className="App container-fluid h-100 w-100">
        <TopBar toggleSideBar={toggleSideBar}/>
      <div className="wrapper">
        <SideBar notes={notes} selectNote={selectNote}/>
        <WorkArea note={selectedNote} save={save}/>
      </div>
    </div>
  );
}

export default App;
