import React from 'react'
import PropTypes from 'prop-types'

// css
import "./SearchBar.scss";

const SearchBar = props => {
  return (
    <div className="search">
      <input type="text" className="search__input custom-input" placeholder="Enter district, city or zip code" />
    </div>
  )
}

SearchBar.propTypes = {

}

export default SearchBar
