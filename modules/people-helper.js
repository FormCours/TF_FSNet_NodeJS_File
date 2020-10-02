const fs = require('fs');

const getPeople = (jsonFile) => {

    return new Promise((resolve, reject) => {

        fs.readFile(jsonFile, (error, data) => {
            if(error) {
                reject('Erreur avec le fichier')
            }
            else {
                try {
                    const jsonData = JSON.parse(data);
        
                    resolve(jsonData.people); 
                } 
                catch (errorJson) {
                    reject('Erreur de syntaxe JSON');
                }
            }
        });
    });
}

const getAverageAge_forEach = (people) => {
    let total = 0;
    let count = 0;

    people.filter(p => p.age !== null).forEach(person => {
        total += person.age;
        count++;
    });

    return total / count;
}

const getAverageAge_reduce = (people) => {
    const peopleAge = people.filter(p => p.age !== null);

    const total = peopleAge.reduce(
        (acc, current) => acc + current.age
    , 0);

    return total / peopleAge.length;
}

module.exports = {
    getPeople,
    getAverageAge: getAverageAge_forEach
}