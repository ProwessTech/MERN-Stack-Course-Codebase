const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'assets')));
app.use(express.static(path.join(__dirname,'assets','images','flower')));

console.log(__dirname);

console.log(__filename);

console.log(path.join(__dirname,'public'));



app.get('/', async(req,res) => {
    res.sendFile(path.join(__dirname,'public','homepage.html'));
});

app.get('/about', async(req,res) => {
    res.sendFile(path.join(__dirname,'public','about.html'));
});

app.get('/contact', async(req,res) => {
    res.sendFile(path.join(__dirname,'public','contact.html'));
});


app.listen(3000, ()=> {
    console.log("Server is running at http://localhost:3000");
});