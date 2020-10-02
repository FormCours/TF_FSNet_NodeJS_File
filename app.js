const peopleHelper = require('./modules/people-helper');

// peopleHelper.getPeople('./data/people.json')
//     .then((people) => {
//         console.log(people);
//     });

const displayPeople = (people) => {
    console.log('Liste des personnes : ');
    for (const person of people) {
        const {firstname, lastname} = person;

        console.log(` - ${firstname} ${lastname.toUpperCase()}`);
    }
    console.log();
}


const app = async () => {

    const people = await peopleHelper.getPeople('./data/people.json');
    displayPeople(people);

}
app();