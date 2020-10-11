import React from 'react'
import PropTypes from 'prop-types'

// scss
import "./Categories.scss";
import Category from './Category/Category';

const Categories = props => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="categories__title">
          We have the most listings and constant updates.
        <br />
        So you'll never miss out
        </h2>
        <div className="categories__line"></div>

        <div className="categories__list mt-4 row">
          <div className="col-lg-4 col-md-4 col-12">
            <Category />
          </div>
        </div>
      </div>
    </section>
  )
}

Categories.propTypes = {

}

export default Categories
