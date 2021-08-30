// Funciones
function add( a: number, b: number ): number{
	return a + b;
}

/*
	function add( a: number, b: number ): tipo que regresa{
		return a + b;
	}
*/

const sum = add(5, 2);


// Funciones que regresan otras funciones
function createAdder (a: number): (number) => number{
	return function (b: number){
		return b + a;
	}	
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);
console.log(fourPlus6)


// Argumentos / Parametros que no son obligatorios

function fullName(firstName: string, lastName: string = 'Smith'): string{
	return `${firstName} ${lastName}`;
}

/*
	El signo de interrogación antes de los dos puntos indica que ese argumento puede ser undefined o string.

	También puedo escribir un valor por defecto para los argumentos agregando un signo igual despues del tipo de dato y escribiendo el valor que va a tener ese argumento en caso de que no se le envie ese parametro

*/



const richard = fullName('Richard');

console.log(richard);