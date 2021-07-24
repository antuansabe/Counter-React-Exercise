import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value = 0 }) => {
    
    const [ counter, setCounter] = useState( 0 ); //UseState retorna un arreglo


    // Constante manejadora de eventos = handleAdd, handleMenos, handleReset
    
    const handleAdd = () => { 
        setCounter( counter + 1);
    }

    const handleMenos = () => { 
        setCounter( counter -1);
    }

    const handleReset = () => { 
        setCounter( value );
    }
    // Al evento onCliclik le pasamos una constante mediante interpolacion de valores 
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <div> 
            <button onClick = { handleAdd }> +1 </button>
            <button onClick = { handleReset }> Reset </button>
            <button  onClick = { handleMenos}> -1 </button>
            </div>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;