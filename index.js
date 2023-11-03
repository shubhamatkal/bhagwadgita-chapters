import express from "express";
import axios from "axios";

const app = express();
const  port = 3000;




// end code
app.listen(port, ()=>{
    console.log(`Listening to ${port}`)
})