import React, {Component} from 'react'

import Graph from 'react-graph-vis'

class NodeGraph extends Component {

    graph = {
        nodes: [
            {
                id: 1,
                label: 'Node 1',
                shape: "circle",
                title:"test",
                font: {
                    vadjust: 40
                }
            }, {
                id: 2,
                label: 'Node 2'
            }, {
                id: 3,
                label: 'Node 3'
            }, {
                id: 4,
                label: 'Node 4'
            }, {
                id: 5,
                label: 'Node 5'
            }
        ],
        edges: [
            {
                from: 1,
                to: 2,
                color: {
                    color:"red"
                },
                label:"hello",
                title:"test"
            }, {
                from: 1,
                to: 3
            }, {
                from: 2,
                to: 4
            }, {
                from: 2,
                to: 5,
                width:9
            }
        ]
    };

    options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: "#000000"
        },
        physics: {
            enabled: true
        }
    };

    events = {
        select: function (event) {
            var {nodes, edges} = event;
        }
    }

    render() {
        return (
            <div style={{
                border:"1px solid black",
                width:"98%",
                margin:"auto"
            }}>
                <Graph
                    style={{height:"600px"}}
                    graph={this.graph} 
                    options={this.options} 
                    events={this.events}
                />
            </div>  
        )
    }
}

export default NodeGraph;
