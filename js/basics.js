/**
 * Created by xavier on 5/23/16.
 */

//this is a single line comment

/*
this is a multi line
comment
 */

console.log("hello");

//alert("this is an alert");

var theMeaningOfLife = 42;
    //foo = bar,
    //baz, quux;

var number = 1;

//javascript has a special function isNan()
// to determine if something is a number

var String = "Hey";
var quotes = '"Hello", said the man';
var escape = 'Oh no you didn\'t';
var joined = 'wait, ' + 'what?';

var array = [5, 'something', true];
var object = {
    myNumber: 10,
    myString: 'Woohoo!'
};

object.myNumber = 15;
object['myString'] = 'string changed';

var addition = 1+2;
var subtraction = 2-1;
var multiply = 2*2;
var division = 6 / 3;
var modulus = 5 % 2;

var postfix = 5;
var prefix = 5;

console.log(postfix++);
console.log(postfix);
console.log(++prefix);
console.log(prefix);

var additionAssignment = 1;
additionAssignment += 1;
//all operators work in the same way


var precedence = 1 + 4 * 2;
//precedence of operators uses order of operations

var object2 = {
    property1: true,
    property2: "yo"
};

function getThingByColor(colour){
    var things = {
        red: 'a red thing',
        green: 'a green thing',
        blue: 'a blue thing'
    };

    return things[colour] || 'sorry no thing of that color exists';
}

var myOtherFunction = function myOtherFunction(){
    console.log('function expression');
};

console.log(hoistedVariable);
var hoistedVariable = 'test';

(function invokeImmediately(){
    console.log('invoked automatically');
}());



