const http = require('http');
const luxon = require('luxon');
const lodash = require('lodash');
const halls = require('./halls.js');

const hostname = "127.0.0.1";
const port = 8000;

var hallsReserved = lodash.filter(halls, 'reservation.isReserved' );
var hallReservedFirst = lodash.first(hallsReserved);

var hallReservedUntilString = hallReservedFirst.reservation.reservedUntil.toISOString();
var DateTime = luxon.DateTime;
var reservedUntil = DateTime.fromISO(hallReservedUntilString).toFormat('cccc, LLLL d' );

var server = http.createServer((request, response) => {
    response.status = 200;
    response.setHeader('Content-type', 'text/plain');
    response.end(reservedUntil);
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});