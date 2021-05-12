const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!!!!!'))

var server = app.listen(1517, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;