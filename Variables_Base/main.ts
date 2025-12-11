//tipos de variables
let nombre: string = "Mango";
let edad: number = 5;
let esDomestico: boolean = true;
let mesNacimiento: string | undefined;
let variableNull: null = null;

//test of mesNacimiento
console.log(mesNacimiento);
mesNacimiento = "Mayo";
console.log("Mes actualizado: " + mesNacimiento);

// print rest variables to console
console.log(`Hola, ${nombre}!`);
console.log(edad);
console.log(esDomestico);
console.log(variableNull);

