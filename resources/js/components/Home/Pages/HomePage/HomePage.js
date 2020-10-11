import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../Banner/Banner'
import Categories from '../../Categories/Categories'

const HomePage = props => {
  return (
    <div className="page">
      <Banner />
      <Categories />
    </div>
  )
}

HomePage.propTypes = {

}

export default HomePage
