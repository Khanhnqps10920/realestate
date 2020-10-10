import React from 'react'
import PropTypes from 'prop-types'

// libs
import { Link, useRouteMatch } from "react-router-dom";

const Header = props => {

  const { url } = useRouteMatch();

  return (
    <header className="header py-5 shadow-sm">
      <nav className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="header__links d-flex align-items-center">
            <li className="mr-3"><Link to={`/`}>Home</Link></li>
            <li className="mr-3"><Link to={`buy`}>Buy</Link></li>
            <li className="mr-3"><Link to={`sell`}>Sell</Link></li>
            <li className="mr-3"><Link to={`rent`}>Rent</Link></li>
          </ul>
          <div className="header__logo">
            <h2>Logo</h2>
          </div>
          <ul className="header__auth d-flex align-items-center">
            <li className="ml-3">Auth</li>
            <li className="ml-3">Auth</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {

}

export default Header
