import React, { useEffect } from "react";

import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';

import "./App.css";

function App() {
    // _________________________________________________
    // Initialize Gridstack inside useEffect so that DOM is rendered when its initialized
    // _________________________________________________
    useEffect(() => {
        var grid = GridStack.init();
    });
    // _________________________________________________
    // _________________________________________________

    return (
        <div className="App">
            <div className="grid-stack">
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div className="grid-stack-item-content">Item 1</div>
                </div>
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div className="grid-stack-item-content">Item 2</div>
                </div>
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div className="grid-stack-item-content">Item 3</div>
                </div>
            </div>
        </div>
    );
}

export default App;
