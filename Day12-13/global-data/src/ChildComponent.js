import React, { createContext, useContext } from "react";

const InitialContext = createContext("Initial Data");


function ChildComponent() {
    const valueFromContext = useContext(InitialContext);

    return (<><h1>{valueFromContext}
<br/>
        <InitialContext.Provider value="Changed Data">
        {valueFromContext}
        </InitialContext.Provider>
    </h1></>)

}


export default ChildComponent;