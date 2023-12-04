const express = require("express")
const fs = require("fs")
const cors = require('cors');


const app = express()


const writeToJSON = (data) => {
    const path = "../data/items.json"
    let obj; 
    if (fs.existsSync(path)){
         obj = JSON.parse(fs.readFileSync(path, "utf-8"));
    }else {
         obj = []
    }   
    obj.push(data);
   const json = JSON.stringify(obj)
   fs.writeFileSync(path, json);
}


app.use(cors()); // Add this line to use cors middleware
app.use(express.json()) // Middleware for parsing JSON bodies

app.get("/", (req, res) => {
    res.send("Hello") // use res.send() instead of return
})

app.post('/data', (req, res) => {
    writeToJSON(req.body);
    res.send('Received your data!');
});

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
