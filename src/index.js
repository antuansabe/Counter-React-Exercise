import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#app');

// A ReactDOM se le pasa en los parametros el QUE y despues DONDE
ReactDOM.render( <CounterApp value = { 0 } />, divRoot ) 