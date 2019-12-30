import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import SearchUser from '../searchuser/SearchUser'
import UserPermissions from '../userpermissions/UsersPermissions'

import './Share.css'

const userData = [
  {username: 'a', read: true, edit: true, delete: true, share: false},
  {username: 'anlesvavor', read: true, edit: true, delete: true, share: true},
  {username: 'Jhon', read: true, edit: false, delete: false, share: false}
];

const options = userData.map(user => {return{value:user.username, label:user.username}});

const Share = props => {
  const [selectedOption, setSelectedOption] = useState({});
  const [users, setUsers] = useState([]);
  const addUser = value => {
    setUsers([userData.filter(user => user.username === value.value)[0], ...users ]);
  }
   return (
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div>
              <Select
                value={selectedOption}
                onChange={addUser}
                options={options}
                isSearchable={true}
              />
            </div>
            <div>
              <UserPermissions users={users}/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Share.propTypes = {

}

export default Share
