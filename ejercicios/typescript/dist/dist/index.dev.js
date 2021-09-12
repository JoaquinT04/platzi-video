"use strict";

// Funciones
function add(a, b) {
  return a + b;
}
/*
    function add( a: number, b: number ): tipo que regresa{
        return a + b;
    }
*/


var sum = add(5, 2); // Funciones que regresan otras funciones

function createAdder(a) {
  return function (b) {
    return b + a;
  };
}

var addFour = createAdder(4);
var fourPlus6 = addFour(6);
console.log(fourPlus6); // Argumentos / Parametros que no son obligatorios

function fullName(firstName, lastName) {
  return "".concat(firstName, " ").concat(lastName);
}
/*
    El signo de interrogación antes de los dos puntos indica que ese argumento puede ser undefined o string
*/


var richard = fullName('Richard');
console.log(richard);