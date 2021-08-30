// Boolean
let muted = true; // con esto typescript ya sabe que esa variable es un boolean
/* Pero podemos ser más especificos
    let muted: boolean = true;
*/
muted = false;
// Números
let age = 6;
let numerador = 42;
let denominador = age;
let resultado = numerador / denominador;
// String
let nombre = 'Richard';
let saludo = `Me llamo ${nombre}`;
// Arreglos 
let people = [];
people = ['Isabel', 'Nicol', 'Raul'];
// people.push(9000); error
let peopleAndNumbers = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9500);
// Enum
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
let colorFavorito = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);
// Any
let comodin = "Joker";
comodin = { type: "Wildcard" };
// Object
let someObject = { type: "Wildcard" };
