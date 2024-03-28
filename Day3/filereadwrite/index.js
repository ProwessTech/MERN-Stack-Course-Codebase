const fstream = require("fs");

// fstream.writeFile("firstfile1.txt", "Hello World", (error) => {
//  // if (error) throw error;
// if(error){
//     throw error;
// }

//      console.log("File successfully written");
//  }

fstream.readFile("firstfile1.txt","utf-8", (error,data) =>{
   if (error){
    console.log("Error 1 Occurred");
   }

   console.log(data);
}
)
//if (error) throw error;

  //  

