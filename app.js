var express = require('express');
var app = express();
var port = 8090;
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function (req, res) {
    res.render('index');
});

app.listen(port,'172.31.30.208');
console.log('The App runs on port ' + port);
