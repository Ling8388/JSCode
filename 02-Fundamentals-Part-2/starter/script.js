/*
'use strict';

// Function
function logger() {
    console.log('My name is Lynn');
}

logger();

function fruitProcessor(x, y) {
    console.log(x, y);
    const juice = `Juice with ${x} apples and ${y} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 0));


// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge1(1991));

// Function expression (define function first, then call function)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge2(1991));

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1991));

const yearUntilRetirement1 = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearUntilRetirement1(1991));

const yearUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} year`;
}
console.log(yearUntilRetirement2(1991, 'Jonas'));


// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(x, y) {
    const applePieces = cutFruitPieces(x);
    const orangePieces = cutFruitPieces(y);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


// coding challenge
const calcAverage = (sco1, sco2, sco3) => (sco1 + sco2 + sco3) / 3;

function checkWinner(avgDol, avgKoa) {
    if (avgDol >= avgKoa * 2) {
        console.log(`Dolphins win 🏆 ( ${avgDol} vs. ${avgKoa})`);
    } else if (avgKoa >= avgDol * 2) {
        console.log(`Koalas win 🏆 ( ${avgKoa} vs. ${avgDol})`);
    } else {
        console.log(`No team wins ...`);
    }
}
// Test 1
let scoreDol = calcAverage(44, 23, 71);
let scoreKoa = calcAverage(65, 54, 49);
console.log(`Dolphins team avetage: ${scoreDol}`);
console.log(`Koalas team average: ${scoreKoa}`);
checkWinner(scoreDol, scoreKoa);

// Test 2
scoreDol = calcAverage(85, 54, 41);
scoreKoa = calcAverage(23, 34, 27);
console.log(`Dolphins team avetage: ${scoreDol}`);
console.log(`Koalas team average: ${scoreKoa}`);
checkWinner(scoreDol, scoreKoa);

// Arrays
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';  // An array is not a primitive value, so we can always change it or mutate it.
console.log(friends);

//friends = ['Bob', 'Jay']; It is illegal

// An array can contains any type in the array.
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991,
    'teacher', friends];
console.log(jonas);

// push method
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
//friends.push('Jay');
const newLength = friends.push('JJ');
console.log(newLength);

friends.unshift('John'); // add elements in front of the array
console.log(friends);

// Remove elements

friends.pop(); // remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// ES6 method
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

// Object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.firstName);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// Dot vs. Bracket Notation
const interestIn = prompt('What do you want to know about Jonas ? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestIn]); // Bracket Notation works
// console.log(jonas.interestIn); // Dot Notation doesn't work

if (jonas[interestIn]) {
    console.log(jonas[interestIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'New York';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

// Object Method
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) { // function expression
    //     return 2037 - birthYear;
    // }

    calcAge: function () {
        return 2037 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(jonas.calcAge());
console.log(jonas['calcAge'](1991));
console.log(jonas.getSummary());

// For Loop
// for loop keeps running while codition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️.`);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i]);
    types[i] = typeof jonas[i];
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log(`---- ONLY STRING ---`);
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] != 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

// Loop backwards
console.log(`---- LOOP BACKWARD ---`);
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

// Loop in loops
for (let i = 0; i < 4; i++) {
    console.log(`-----Starting Ecercise ${i}`);
    for (let j = 0; j < 6; j++) {
        console.log(`Exercise ${i}: Lifting weight repetition ${j} 🏋️.`);
    }
}
*/

//while Loop
let rep = 1;
while (rep < 11) {
    console.log(`Lifting weight repetition ${rep} 🏋️.`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}









