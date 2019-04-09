var list = [
    {name: "Dvorana1",Id: 1,reservation: {isReserved: true,reservedFrom: new Date("2019-03-20"),reservedUntil: new Date("2019-03-28"),},},
    {name: "Dvorana2",Id: 2,reservation: {isReserved: true,reservedFrom: new Date("2019-03-20"),reservedUntil: new Date("2019-03-28"),},},
    {name: "Dvorana3",Id: 3,reservation: {isReserved: false,reservedFrom: null,reservedUntil: null,},},
    {name: "Dvorana4",Id: 4,reservation: {isReserved: false,reservedFrom: null,reservedUntil: null,},},
    
];
var newId = 5;

function add(name){
    var hall = {
        name : name,
        Id : newId, 
        reservation : {
            isReserved : false,
            reservedFrom : null,
            reservedUntil : null,
        },
    }
    newId++;
    list.push(hall);
}

function remove(Id){
    for(var i = 0 ; i < list.length ; i++){
        if(list[i].Id === Id){
            list.splice(i,1);
            break;
        }
    }
}

function reservation(Id , reservedFrom , reservedUntil){
    for(var i = 0 ; i < list.length ; i++){
        if(list[i].Id === Id){
            list[i].reservation.reservedFrom = new Date(reservedFrom);
            list[i].reservation.reservedUntil = new Date(reservedUntil);
            list[i].reservation.isReserved = true;
        }
    }
}

function checkReservation(Id){
    for(var i = 0 ; i < list.length ; i++){
        var currentDate = new Date();
        if(list[i].Id === Id){
            if(list[i].reservation.reservedUntil < currentDate ){
                list[i].reservation.reservedFrom = null;
                list[i].reservation.reservedUntil = null;
                list[i].reservation.isReserved = false;
            }
        }
    }
}

module.exports = {
    list,
    add,
    reservation, 
    remove
};