const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())

const data = [
    {
        name : "Ayush",
        age : "21"
    },
    {
        name : "Mukul",
        age : "51"
    },
    {
        name : "Ayush",
        age : "21"
    },
    {
        name : "Mukul",
        age : "51"
    },
    {
        name : "Ayush",
        age : "21"
    },
    {
        name : "Mukul",
        age : "51"
    },
]
    


app.get('/' , (req, res) => {
    res.send({ message : "DOCKER RUNNING"});
})

app.get('/api/getData' , (req, res) => {
    res.send({ data : data });
})



app.listen(5000, () => {
    console.log("Server Running On Port 5000");
})
