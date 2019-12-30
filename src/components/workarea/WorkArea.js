import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './WorkArea.css'

const WorkArea = props => {
  const [note, setNote] = useState(props.note);

  useEffect(() => {
    setNote(props.note);
  }, [props.note]);

  useEffect(() => {
    const timer = setTimeout(() => {
      props.save(note);
    }, 2000);
    return () => clearTimeout(timer);
  });

  const handleChange = e => {
    setNote({...note, [e.target.name]: e.target.value});
  }
  return (
    <div id="work-area">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-1">
            <button onClick={props.save.bind(this, note)}>Save</button>
            <button id="clickme" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Share
            </button>
          </div>
          <div className="col-10">
            <input id="title" name="title" value={note.title} onChange={handleChange}></input>
            <textarea id="sheet" name="text" value={note.text} onChange={handleChange}></textarea>
          </div>
          <div className="col-1">
          </div>
        </div>
        <div className="row h-100">
          <div className="col">
          </div>
        </div>
      </div>
    </div>
  )
}

WorkArea.propTypes = {

}

export default WorkArea
