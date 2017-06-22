const data = exports.data = [
    {
        id: 1,
        name : "Jean",
        age : 56
    },
    {
        id: 2,
        name : "Paul",
        age : 27
    },
    {
        id: 3,
        name : "Marc",
        age : 35
    },
    {
        id: 4,
        name : "Lise",
        age : 34
    },
    {
        id: 5,
        name : "Louis",
        age : 12
    }

];


    for (let i=0; i <= data.length; i++) {
        if (5 == data[i].id) {
            console.log('debug', i);
            data.splice(i, 1);
        }
    }

console.log(data);

for (let i=0; i <= data.length; i++) {
    if (4 == data[i].id) {
        console.log('debug', i);
        data.splice(i, 1);
    }
}
console.log(data);