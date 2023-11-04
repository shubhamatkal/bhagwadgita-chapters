import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const  port = 3000;
const config = {
    headers: {
      'X-RapidAPI-Key': '622e9946f6msh59b60898272652ep1d9ddajsn8dd7227eacc9',
      'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
  };

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res)=>{
    try {
        const chapter = 1;
        const response = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/`,config);
        // console.log(JSON.stringify(response.data.chapter_number));
        res.render("index.ejs", { chapter_num: JSON.stringify(response.data.chapter_number),title: JSON.stringify(response.data.name_translated),summary: JSON.stringify(response.data.chapter_summary)});
    }catch (error) {
        res.render("index.ejs", { summary: JSON.stringify(error.response.data) });
    }
    
});

app.post("/", async(req, res)=>{
    try {
        const option_ = req.body.selectedOption;
        const response = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${option_}/`,config);
        // console.log(JSON.stringify(response.data.chapter_number));
        res.render("index.ejs", { chapter_num: JSON.stringify(response.data.chapter_number),title: JSON.stringify(response.data.name_translated),summary: JSON.stringify(response.data.chapter_summary)});
    }catch (error) {
        res.render("index.ejs", { summary: JSON.stringify(error.response.data) });
    }
});


// end code
app.listen(port, ()=>{
    console.log(`Listening to ${port}`)
})