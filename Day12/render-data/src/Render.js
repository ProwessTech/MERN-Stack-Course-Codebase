import React, { useState, useEffect } from 'react';



function Render() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        setTimeout(() => {setCount((count) => count+1);}, 1000);
    });


    return (<><h1>This function has rendered {count} times!</h1>
    
    <button onClick={()=> setCount((dValue)=> dValue+1)}>Add</button>



    <h1>This function has rendered {count1} times!</h1>
    
    <button onClick={()=> setCount1((dValue1)=> dValue1+1)}>Add</button>
    </>);

}

export default Render;

