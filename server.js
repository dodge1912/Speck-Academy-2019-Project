const http = require('http');
const hostname = "127.0.0.1";
const port = 8000;

var list = [
    {name: "Dvorana1",Id: 1,reservation: {isReserved: true,reservedFrom: new Date("2019-03-20"),reservedUntil: new Date("2019-03-28"),},},
    {name: "Dvorana2",Id: 2,reservation: {isReserved: true,reservedFrom: new Date("2019-03-20"),reservedUntil: new Date("2019-03-28"),},},
    {name: "Dvorana3",Id: 3,reservation: {isReserved: false,reservedFrom: null,reservedUntil: null,},},
    {name: "Dvorana4",Id: 4,reservation: {isReserved: false,reservedFrom: null,reservedUntil: null,},},
    
];

function HallNames () {
    var halls = [];
    for (i = 0; i < list.length; i++) {
      halls.push(list[i].name);
    }
    return halls;
}
  
function HallString () {
    const hallStr = HallNames().join(", ");
    return hallStr;
}
  
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(HallString());
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


