import React, { useState } from 'react'

import TopBar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import WorkArea from './components/workarea/WorkArea'
import Share from './components/share/Share'

import './App.css'

function App() {
  const data = [
    {id: 1, title: "Note1", text: "tex1"},
    {id: 2, title: "Note2", text: "tex2"},
    {id: 3, title: "Note3", text: "tex3"}
  ];
  const [selectedNote, setSelectedNote] = useState(data[0]);
  const [notes, setNotes] = useState(data);
  const [increment, setIncrement] = useState(4);

  const toggleSideBar = () => {
    document.getElementById('side-bar').classList.toggle("active");
  };
  const selectNote = id => {
    setSelectedNote(notes.filter(note => note.id === id)[0]);
  }
  const save = newNote => {
    setNotes([...notes.filter(note=>note.id !== newNote.id), newNote].sort((a, b)=> a.id - b.id));
  }
  const newNote = () => {
    setIncrement(increment + 1);
    setNotes([...notes, {id:increment, title:"New Note", text:"add text.."}]);
  }

  return (
    <React.Fragment>
      <div className="App container-fluid h-100 w-100">
        <TopBar toggleSideBar={toggleSideBar} newNote={newNote}/>
        <div className="wrapper">
          <SideBar notes={notes} selectNote={selectNote}/>
          <WorkArea note={selectedNote} save={save}/>
        </div>
      </div>
      <Share note={selectNote}/>
    </React.Fragment>
  );
}

export default App;
