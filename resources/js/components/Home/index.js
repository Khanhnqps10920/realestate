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
import HomePage from './Pages/HomePage/HomePage';

const index = () => {

  const { path } = useRouteMatch();
  console.log(path);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={path}>
          <HomePage />
        </Route>

        <Route path={`${path}/:topicId`}>
          <Test />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}



export default index
