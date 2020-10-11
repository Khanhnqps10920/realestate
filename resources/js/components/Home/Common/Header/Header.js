import React from 'react'
import PropTypes from 'prop-types'

// css
import "./Header.scss";

// libs
import { Link, useRouteMatch } from "react-router-dom";

const Header = props => {

  const { url, path } = useRouteMatch();

  return (
    <header className="header py-3 shadow-sm">
      <nav className="container">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="header__links d-flex align-items-center">
            <li className="mr-5"><Link to={`${url}`}>Home</Link></li>
            <li className="mr-5"><Link to={`${url}/buy`}>Buy</Link></li>
            <li className="mr-5"><Link to={`${url}/sell`}>Sell</Link></li>
            <li className="mr-5"><Link to={`${url}/rent`}>Rent</Link></li>
          </ul>

          <div className="flex-fill text-center header__logo">
            <h2>Logo</h2>
          </div>
          <ul className="header__auth d-flex align-items-center">
            <li className="mr-5"><Link to={`${url}/signin`}>Signin</Link></li>
            <li className="mr-5"><Link to={`${url}/register`}>Register</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {

}

export default Header
