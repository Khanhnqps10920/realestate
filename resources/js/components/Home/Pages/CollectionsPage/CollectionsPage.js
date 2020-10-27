import React from 'react'
import PropTypes from 'prop-types'

// component
import Nav from '../../Nav/Nav';

// scss
import "./CollectionsPage.scss";

const CollectionsPage = props => {
  return (
    <div className="collections page">
      <Nav />
      <div className="collections__content">
        <div className="collections__content-map"></div>
        <div className="collections__content-result">
          <div className="test"></div>
        </div>
      </div>
    </div>
  )
}

CollectionsPage.propTypes = {

}

export default CollectionsPage
