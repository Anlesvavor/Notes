import React from 'react'
import PropTypes from 'prop-types'

const SideBarItem = props => {
  return (
    <div className="p-4" onClick={props.selectNote.bind(this, props.note.id)}>
      <div className="p-2"><h4>{props.note.title}</h4></div>
      <div className="p-2">{props.note.text}</div>
    </div>
  )
}

SideBarItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default SideBarItem
