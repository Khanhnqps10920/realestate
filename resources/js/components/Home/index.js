import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
// styles
import "./scss/index.scss";

// libs
import { useRouteMatch, Switch, Route, Redirect, Link, useParams } from "react-router-dom";

// components
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import Test from "./Pages/test";

const index = () => {

  const { path } = useRouteMatch();


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={path}>
          <p>test </p>
        </Route>

        <Route path={`/home/:topicId`}>
          some component here
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}



export default index
