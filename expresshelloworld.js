const express = require('express');
const serverIndex = require('serve-index');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Node World!')
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
});

app.use('/nest', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
});


//Adding a middleware
app.use('/apigateway', express.static('public'));
app.use('/apigateway', serverIndex('public'));

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});

