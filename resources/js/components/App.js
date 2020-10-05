import React from "react";
import ReactDOM from "react-dom";
import Test from "./test";

function App() {
    return (
        <div className="container">
            <p>test</p>
            <Test />
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
