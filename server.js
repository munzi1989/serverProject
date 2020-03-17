const express = require('express');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.all('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/', (req, res) => {
    res.end('Will get the contact info for you');
});

app.post('/', (req, res) => {
    res.end(`Will add the contact info to the server`);
});

app.put('/', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported');
});

app.delete('/', (req, res) => {
    res.end('Deleting all info');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});