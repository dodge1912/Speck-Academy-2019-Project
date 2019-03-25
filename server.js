const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

var list = [
    {name: "Dvorana1",Id: 1,reservation: {isReserved: true,reservedFrom: new Date("2019-03-20"),reservedUntil: new Date("2019-03-28"),},},
    {name: "Dvorana2",Id: 2,reservation: {isReserved: true,reservedFrom: new Date("2019-03-20"),reservedUntil: new Date("2019-03-28"),},},
    {name: "Dvorana3",Id: 3,reservation: {isReserved: false,reservedFrom: null,reservedUntil: null,},},
    {name: "Dvorana4",Id: 4,reservation: {isReserved: false,reservedFrom: null,reservedUntil: null,},},
    
];

var arrayNames = [];
for(var i = 0 ; i < list.lenght ; i++){
    arrayNames.push(list[i].name);
    }

var nameHalls = arrayNames.join("; ");

var server = http.createServer((request, respnse) => {
    response.status = 200;
    response.writeHead('Content-type', 'text/plain');
    response.end(nameHalls);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
            
