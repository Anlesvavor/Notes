import React from 'react'

import './UsersPermissions.css'

const UsersPermissions = props => {
  const checkBox = isEnabled => {
    return (
      <input className="form-check-input position-static"
        type="checkbox"
        checked={isEnabled}
      />
    )
  }
  const createUserRow = user => {
    return (
      <tr>
          <td>{user.username}</td>
          <td>{checkBox(user.read)}</td>
          <td>{checkBox(user.edit)}</td>
          <td>{checkBox(user.delete)}</td>
          <td>{checkBox(user.share)}</td>
      </tr>
    )
  }
  const users = props.users ? props.users.map(createUserRow) : (<tr></tr>);
  return (
    <table id="permissions-table" className="table">
      <tr>
        <th scope="col">User</th>
        <th scope="col">View</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
        <th scope="col">Share</th>
      </tr>
      <tr>
        <td>Ayylmao</td>
        <td><input className="form-check-input position-static" type="checkbox"></input></td>
        <td><input className="form-check-input position-static" type="checkbox"></input></td>
        <td><input className="form-check-input position-static" type="checkbox"></input></td>
        <td><input className="form-check-input position-static" type="checkbox"></input></td>
      </tr>
      {users};
    </table>
  )
}

export default UsersPermissions