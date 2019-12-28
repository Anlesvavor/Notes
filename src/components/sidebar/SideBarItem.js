import React from 'react'
import PropTypes from 'prop-types'

import './SideBarItem.css'

const SideBarItem = props => {
  return (
    <div className="px-4 side-bar-item" onClick={props.selectNote.bind(this, props.note.id)}>
      <div className="px-2"><h4 className="text-truncate">{props.note.title}</h4></div>
      <div className="px-2"><p className="text-truncate">{props.note.text}</p></div>
    </div>
  )
}

SideBarItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default SideBarItem
