import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";

const test = props => {

  const { topicId } = useParams();

  return (
    <div>
      {topicId}
    </div>
  )
}

test.propTypes = {

}

export default test
