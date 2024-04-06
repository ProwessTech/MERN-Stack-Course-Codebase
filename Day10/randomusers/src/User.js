import React,{useState, useEffect} from 'react';

function User () {
    const[user,setUser] = useState(""); 
    useEffect( () => {
        fetchUser();
    });

    async function fetchUser ()  {
      
       const endpointURL = "https://randomuser.me/api/";

       await fetch(endpointURL).then(results => {
        //alert(results.json);
        return results.json();
       })
       .then (data => {
        let user = data.results.map((user) => {
          // let userElement = '';
          // userElement = <div key={user}>
          //   <h2>{user.name.first}</h2>
          //   <h2>{user.name.last}</h2>
          // </div>

          // return userElement;


          return(<>
          <div key={user}>
            <h2>Welcome {user.name.title}, {user.name.first}
            {user.name.last}</h2>
          </div>
          </>)
        });
        console.log(user);
        setUser(user);
       })
       
    };
    return(user);
  
  
}

export default User;