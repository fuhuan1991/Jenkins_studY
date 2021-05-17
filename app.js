const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))


var server = app.listen(7777, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;