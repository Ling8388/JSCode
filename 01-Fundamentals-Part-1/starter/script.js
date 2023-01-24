/*
let js = 'amazing';
console.log(40 + 4 + 40);

let country = 'U.S.';
let continent = 'North America';
let population = '331.9 million';

console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);


let age = 30;
age = 31;

const birthYear = 1988;

var job = 'programmer';
job = 'teacher';
console.log(job);


//  operator precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Strings and template literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' +
    (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year -
    birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multipe \n\
lines');

console.log(`String
multiple
lines`);

const age = 16;
if (age >= 18) {
    console.log('Sarah cam start driving license 🚗');
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years.`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + 'years old.');
console.log('23' - '10' - 3); // '-' automatically conver to number

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

== vs ===
== (loose) is loose equality operator, it does perform type coercion
=== (strict) does not perform type coercion


// const favor1 = prompt("What's your favourite number?");
// console.log(favor1);
// console.log(typeof favor1);

// if (favor1 == 23) {
//     console.log('Cool! 23 is an amzaing number.');
// }

const favor2 = Number(prompt("What's your favourite number?"));
console.log(favor2);
console.log(typeof favor2);
if (favor2 === 23) {
    console.log('Cool! 23 is an amzaing number.');
}
*/

// boolean
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive.');
} else {
    console.log('Someone else should drive...');
}

// switch statement
const day = 'Friday';
switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory video');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code example');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

// conditional (ternary) operator
const age = 15;
age >= 18 ? console.log('I like to drink wine') :
    console.log('I like to drink water');

const drink = age >= 18 ? 'wine 🥂' : 'water 🥤';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine 🥂' : 'water 🥤'}`);

