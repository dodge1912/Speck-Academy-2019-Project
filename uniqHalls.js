const http = require('http');
const lodash = require('lodash');
const halls = require('./halls.js');

const hostname = "127.0.0.1";
const port = 8000;

var hallNamesArray = lodash.map(halls, 'name');
var hallNamesUniq = lodash.uniqBy(hallNamesArray);
var hallNamesString = lodash.join(hallNamesUniq, ", ");

const server = http.createServer((request, response) => {
    response.status = 200;
    response.setHeader('Content-type', 'text/plain');
    response.write(hallNamesString);
    response.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
