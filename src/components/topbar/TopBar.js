import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './TopBar.css';

const TopBar = props => {
  return (
    <div className="top-bar row">
      <div className="col-1" onClick={props.toggleSideBar}><i className="material-icons">vertical_split</i></div>
      <div className="col-1" onClick={props.newNote}><i className="material-icons">add</i></div>
      <div className="col-9">Notes app</div>
      <div className="col-1"><i className="material-icons">more_vert</i></div>
    </div>
  )
}

TopBar.propTypes = {

}

export default TopBar;
