import React from 'react';

import {useCounter} from '../../hooks/useCounter'

import './counter.css'

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter()

    return (
        <>
            <h1>Counter With CustomHook ==> {state}</h1>
            <button
                className="btn"
                onClick={() => increment(3)}
            >+ 1 </button>
            <button
                className="btn"
                onClick={() => decrement(3)}
            >- 1 </button>
            <button
                className="btn btn-warning"
                onClick={reset}
            > RESET </button>
        </>
    );
};

export default CounterWithCustomHook;
