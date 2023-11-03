import express from "express";
import axios from "axios";

const app = express();
const  port = 3000;
// const url = oikj

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs")
});


// end code
app.listen(port, ()=>{
    console.log(`Listening to ${port}`)
})