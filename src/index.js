import React from 'react';
import ReactDOM from 'react-dom';
// import HookApp from "./HookApp";
// import CounterApp from "./components/01-useState/CounterApp";
import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";

const divRoot = document.querySelector('#app');
ReactDOM.render( <CounterWithCustomHook />  , divRoot );

