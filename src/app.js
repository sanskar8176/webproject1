const express = require("express");
const app = express();
const port=process.env.PORT || 8000;


// ye static files ke liye h jo public me hai index wala na le tb bhi css wala to chahiye hi
const path = require("path");
const static_path=path.join(__dirname,"../public");

app.use(express.static(static_path))


const hbs=require('hbs');  //for partials


// set the template engine 
app.set('view engine', 'hbs');
const template_path=path.join(__dirname,"../templates/views");
app.set('views',template_path);


const partials_path=path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path);









// routing 
app.get("/",(req,res)=>{
    // res.status(200).send("welcome to my channel");
    res.status(200).render("index");

})
app.get("/about",(req,res)=>{
    // res.status(200).send("welcome to my about");
    res.status(200).render("about");

})
app.get("/weather",(req,res)=>{
    res.status(200).render("weather");

})
app.get("*",(req,res)=>{
    res.status(200).render("404error",{errormessage:"Ooops Page Not Found, click here to go back"});

})

app.listen( port, ()=>{
    console.log(`listening to  ${port}`)
})