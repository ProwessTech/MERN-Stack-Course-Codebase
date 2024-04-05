import React, { useEffect, useState, useContext, createContext } from "react";

const StudentContext = createContext();

function DailyAdvice() {
    const [adviceValue, setAdviceValue] = useState("");
    const [student,setStudent] = useState("Gandhi");

    useEffect(() => {
        const adviceurl = "https://api.adviceslip.com/advice";

        const fetchAdvice = async () => {

            const response = await fetch(adviceurl);
            const json = await response.json();
            //console.log(json);

            setAdviceValue(json.slip.advice);
        }

        fetchAdvice();
    }, []);


    return (
        <>

            <h1>{adviceValue}</h1>

            <h2>{student}</h2>


             <StudentContext.Provider value={student}>
            <h1>{`${student}! Welcome to the session!`}</h1>
            </StudentContext.Provider> 

        </>
    )
}


export default DailyAdvice;