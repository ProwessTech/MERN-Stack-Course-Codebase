import React , {useState} from "react";
import './Colors.css';

function Color(){

    const [color, setColor] = useState("brown"); 

    return (
     <> <h1 className={color}>My Favorite color is {color}</h1>

        <button type="button" onClick={()=>setColor("red")}>Make a Red Button</button>
        <button type="button" onClick={()=>setColor("pink")}>Make a Pink Button</button>
        <button type="button" onClick={()=>setColor("yellow")}>Make a Yellow Button</button>
        <button type="button" onClick={()=>setColor("blue")}>Make a Blue Button</button>
        </>  
    );
}

export default Color;