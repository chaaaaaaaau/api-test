import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { apiTest } from "./helper/api";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: `My Data 1234567`,
        };
    }

    sendData = async () => {
        let text = this.state.text;
        let result = await apiTest(text);
        await this.setState({
            text: result,
        });
    };

    render() {
        let text = this.state.text;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/*  <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p> */}
                    <label>{text}</label>
                    <button onClick={() => this.sendData()}>Api Test</button>
                    {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a> */}
                </header>
            </div>
        );
    }
}

export default App;
