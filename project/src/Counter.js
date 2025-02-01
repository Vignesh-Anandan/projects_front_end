import React from 'react';
import { useState } from 'react';

const Counter = () => {
    
    const [count, setCount] = useState(0);
  
    const handleClick01 = () => {
         setCount(count+1);
    };
    const handleClick02 = ()=> {
        setCount(count-1);
    };

    return(
        <div>
            <h1>Count: {count} </h1>
            <button onClick={handleClick01}>
                click to add
            </button>
            <button onClick={handleClick02}>
                click to sub
            </button>
        </div>
    );
};

export default Counter;