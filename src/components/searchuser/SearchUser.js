import React from 'react'

import './SearchUser.css'

const SearchUser = props => {
	return (
    <div>
      <form autocomplete="off">
        <div className="autocomplete">
          <input id="myInput" type="text" name="myCountry" placeholder="Country"/>
        </div>
      </form>
    </div>
  );
}

export default SearchUser;
