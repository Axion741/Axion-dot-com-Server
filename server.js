const express = require('express');
const cors = require('cors');

const postFile = require('./postfile.json');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("Server Online")
})



const queryDb = () => (req, res) => {
    res.send(postFile)
}

app.get('/queryDb', queryDb())

var server = app.listen(process.env.PORT || 3000, () => {
    console.log("Server Online", server.address().port);
})