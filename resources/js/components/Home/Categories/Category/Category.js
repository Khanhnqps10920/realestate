import React from 'react'
import PropTypes from 'prop-types'

// scss
import "./Category.scss"

const Category = props => {
  return (
    <div className="shadow category">
      <div className="category__img">
        <img className="img-fluid" src="" alt="category-img" />
      </div>
      <div className="category__information">
        <h3 className="category__information--title">
          Default text
        </h3>
        <p className="category__information--description">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
        <button className="category__button base-btn">Search homes</button>
      </div>
    </div>
  )
}

Category.propTypes = {

}

export default Category
