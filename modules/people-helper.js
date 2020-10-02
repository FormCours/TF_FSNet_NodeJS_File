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

module.exports = {
    getPeople
}