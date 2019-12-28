import React from 'react'
import PropTypes from 'prop-types'

import SideBarItem from './SideBarItem'

import './SideBar.css'

const SideBar = props => {
  const items = (() => {
    return props.notes.map(note =>
      (<SideBarItem key={note.id} note={note} selectNote={props.selectNote} />));
  })();
  return (
    <div id="side-bar" className="py-4">
      {items}
    </div>
  )
}

SideBar.propTypes = {

}

export default SideBar
