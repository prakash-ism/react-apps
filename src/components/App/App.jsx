import React from "react";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./App.css";

const App = () => {
    return (
        <div data-testid="app-div" className="app">
            <Nav />
            { /** Landing Page */}
            <Landing />

            { /** Challenge Section */}

            { /** Footer */}
        </div>
    )
}

export default App;