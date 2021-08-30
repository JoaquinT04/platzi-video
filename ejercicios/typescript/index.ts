// Boolean
let muted = true; // con esto typescript ya sabe que esa variable es un boolean
/* Pero podemos ser más especificos
	let muted: boolean = true;
*/
muted = false;

// Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arreglos 
let people: string[] = [];
people = ['Isabel', 'Nicol', 'Raul'];
// people.push(9000); error

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9500);


// Enum
enum Color {
	Rojo = 'Rojo',
	Verde = 'Verde',
	Azul = 'Azul',
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`)


// Any

let comodin: any = "Joker";
comodin = { type: "Wildcard"}; 


// Object
let someObject: object = {type: "Wildcard"};
