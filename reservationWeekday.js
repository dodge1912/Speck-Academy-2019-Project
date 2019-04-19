const http = require('http');
const luxon = require('luxon');
const lodash = require('lodash');
const halls = require('./halls.js');

const hostname = "138.68.87.73";
const port = 3003;

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