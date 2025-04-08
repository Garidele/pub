/* 
syntax
var varName; don t use
let varName;
const p=3,14;

Naming variables(descriptive name)
use numbers, letters, punctuation signs
don t start with a number
don t use key words and special chars
camel case ------ let nameAlumni;
*/

// var name='Lusyanna';
// let surname='Faliboga-Andrei';
// console.log(name);
// console.log(surname);

// var name='Luna';
// console.log(name);
// let surname='Mesa';


/*Data type javascript 

number ------ numeric
let nr = 1; 
let nr2 = 3.18345;

string ------ sir de caractere
let cadena = 'cadena de char';
              " "
              
boolean ------ true or false
let boolean = true;

null  -------- no value
undefined ------ self explainatory
object ---------- idk bro

let nameAlumni= {
'name':'Luna";
'surname':'Mesa';
'hobby':'video games';
};
*/

let number = 10;
console.log("Number variable" + "is" + typeof Number);
console.log("The content is: " + number);

let boolean= true;
console.log(typeof boolean);

console.log(typeof alumno);

/* OPERATORS
assign = 
arithmetic
+ - * % /

+= -= *= /= %=

*/
 let number1= 10;
 let number2= 5;

 console.log(number1 + number2);
 console.log(number1 - number2);
 console.log(number1 * number2);
 console.log(number1 % number2);
 console.log(number1 / number2);

/*
logical operators
equal == (values)
strictly equal === (type AND value)
distinct !=
!strictly distinct !== (same)
> 
<
>=
<=
 */


console.log(number1 == number2);
number1 =10;
cadena='10';
console.log(number1==cadena);
console.log(number1===cadena);

/* concatenare
syntax
"hola" + "mundo" 
"hola mundo"*/


/*conditional operators 
condition ? value1 : value2;
if the condition is true pick the value 1
otherwise pick the value 2 */

console.log(number1 === number2 ? "same" : "different");

/* Conditionals


if..........else
if(cond)
{
COMMEND BLOCK}
else {
CB
}

-false
-undefined
-null
-0
-NaN
- ' ' empty string



switch ... case
syntax:
switch(expression){
case value1:
             COMMEND BLOCK1
             break;
case value2:
            COMMEND BLOCK2
            break;
case value3:
            COMMEND BLOCK3
            break;
default:
    COMMEND BLOCK
    } */

    switch(name){
        case 'Luna':console.log("Hola soy Luna");
                     break;
        case 'Lusy':
            console.log("Hola soy Lusy");
                    break;
        default:
            console.log("Hola no se quien soy");
            }

/*
for syntax

for(let i=0; i<10; i++)
            repeats ten times 


while(cond)
{
    CB
}

do{
    CB
}while(cond);

Functions

function functionName(op parameters)
{
    CB
    op value return
}

*/

function arithmeticOperation(operator, value1, value2)
{
    if(operator === '*')
    {
        return value1*value2;
    }
    else if(operator === '/')
    {
        return value1/value2;
    }
    else if(operator === '+')
    {
        return value1+value2;
    }
    else if(operator === '-')
    {
        return value1-value2;
    }
    else if(operator === '%')
    {
        return value1%value2;
    }
}

let result = 0;
result = arithmeticOperation('*', number1, number2);
console.log("The result is " + result)

result = arithmeticOperation('+', number1, number2);
console.log("The result is " + result)

result = arithmeticOperation('-', number1, number2);
console.log("The result is " + result)

result = arithmeticOperation('/', number1, number2);
console.log("The result is " + result)

/*
 lists / arrays

let fruits=['orange', 'grapes', 'apples'];
*/

let fruits=['orange', 'grapes', 'apples'];
console.log(typeof fruits);

/*
    objects
    properties are attributes of the objects
    methods are actions of what can be done(functions)
*/

console.log(fruits[0]);

// run through all the elements of a list
fruits.forEach(element => {
    console.log(element);    
});

fruits.push('kiwi'); //add an element at the end of a list
console.log(fruits);

fruits.pop(); //remove the last element
console.log(fruits);

fruits.unshift('kiwi', 'melon'); //add elements at the start of the list
console.log(fruits);

console.log(fruits.length); //length of an array

/* 
https://developer.mozilla.org/en-US/
*/

// OOP
/*
creating an object
*/

let person = new Object();
let car = {}

person = {
    'name':'George',
    'age':17,
    'profession':'student',
    'laugh': function()
    {
        console.log("i am laughing 🤣");
    }
}

console.log(person);

console.log(person.age);
console.log(person['name']);

person.country = 'Romania';
console.log(person);

person.laugh();

/* classes
    classes are made of objects 

    vehicle factory --> car, motobike, bike, truck

    class nameClass
    {
        builder(parameter)
        {
            this.parameter1 = parameter1;
            this.parameter2 = parameter2;
        }
    }
*/

class Robot
{
    constructor(name, color)
    {
        this.name = name;
        this.color = color;
    }

    speaking()
    {
        console.log(`Hi! My name is ${this.name} and my color is ${this.color}, and i am your robot buddy`);
    }

    moving()
    {
        console.log(`${this.name} is moving 🤞`);
    }
}

let robot1 = new Robot('Atibot', 'red');
robot1.speaking();
robot1.moving();

let robot2 = new Robot('Skyner', 'white');
robot2.speaking();
robot2.moving();

// Inheritage in OOP 
class RobotDancer extends Robot
{
    dance()
    {
        console.log(`${this.name} is dancing 🎶`);
    }
}

let dancingRobot1 = new RobotDancer('DancerBot', 'green');
dancingRobot1.speaking();
dancingRobot1.dance();

/*
Callback functions

-recursive functions-

*/

function salute(name)
{
    console.log(`Hola ${name}`);
}

function startName(callback)
{
    let name = prompt("Enter your name: ");
    callback(name);
}

startName(salute);