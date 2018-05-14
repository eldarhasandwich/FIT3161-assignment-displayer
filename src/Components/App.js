import React, {Component} from 'react';
import './App.css';

import NodeGraph from './NodeGraph'

class App extends Component {


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">SNA Graph Visualiser</h1>
                    <h4>By Eldar, Andrew</h4>
                </header>

                <div style={{height:"20px"}}/>

                <NodeGraph/>

            </div>
        );
    }
}

export default App;
