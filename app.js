const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Triggered'))

var server = app.listen(7777, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;