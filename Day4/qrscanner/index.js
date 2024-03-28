import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            message: "Please type the URL for QR conversion",
            name: "URL",
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.URL;
        console.log(url);

        var qrimage = qr.image(url, {type: 'svg'});

        qrimage.pipe(fs.createWriteStream("website_url.svg"));

        fs.writeFile("URLText1.txt",url, (error,data)=>{
            if(error) throw error;

          data = url;
          console.log("File saved successfully");  
          console.log(data);
        })

        // if (success){

        // }
        // else if (error){

        // }

        fs.close();

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });