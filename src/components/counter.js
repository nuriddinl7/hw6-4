
import { useState } from 'react';
import '../App.css';

function Counter() {
    const [state, setState] = useState(0)
    function add() {
        if (state < 20) {
            setState(state + 1)
        }

    }
    function remuve() {
        if (state > 0) {
            setState(state - 1)
        }
    }
    return (
        <div className="Counter">
            <h1>{state}</h1>
            <button onClick={add}>  incriment</button>
            <button onClick={remuve}>decriment</button>
            <button onClick={remuve}>add 10</button>
            <button onClick={remuve}>- 10</button>
        </div>
    );
}

export default Counter;
