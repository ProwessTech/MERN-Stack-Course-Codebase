import React, {useState, useCallback} from "react";


function Counter(){
const [count, setCount] = useState(0);
const [otherCounter, setOtherCounter] = useState(0);

const add = useCallback(()=>{
setCount(count+1);
}, [count]);

const decrease = useCallback(()=>{
setCount(count-1);
}, [count]);

const incrementCounter = useCallback(()=>{
    setOtherCounter(otherCounter+1);
}, [otherCounter]);




    return(<>
    Counter: {count}
    <button onClick={add}>Add Value</button>
    <button onClick={decrease}>Decrease Value</button>
    <button onClick={incrementCounter}>Increment Counter</button>
    <br/>
    Other Counter: {otherCounter}

    </>);
}

export default Counter;