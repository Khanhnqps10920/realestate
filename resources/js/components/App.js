import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Dashboard"
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {true ? <Redirect to="/home" /> : <Redirect to="/admin"  /> }
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/admin" >
                    <Admin />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
