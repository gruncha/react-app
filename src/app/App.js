import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import List from "./components/List";

class App extends Component {
    render() {

        return (
            <div className="container">
                <Navbar></Navbar>
                <List></List>
            </div>
        );
    }
}

export default App;
