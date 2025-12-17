// tipos de arreglos 
var nombre = ["Ana", "Luis", "Carlos"];
console.log("Nombres:", nombre);
var numeros = [10, 20, 30, 40, 50];
console.log("Números:", numeros);
var mixto = ["Hola", 100, true, 45.67];
console.log("Mixto:", mixto);
var persona = [
    { nombre: "Ana", edad: 28, esDesarrollador: true },
    { nombre: "Luis", edad: 34, esDesarrollador: false },
    { edad: 22, nombre: "Carlos", esDesarrollador: true }
];
persona.push({ nombre: "María", edad: 30, esDesarrollador: false });
console.log("Personas:", persona);
// tupla
// la diferencia con el array es que no se puede modificar
// la cantidad de elementos ni el tipo de dato de cada posición
var personaTupla;
personaTupla = ["Ana", 28, true];
console.log("Persona Tupla:", personaTupla);
// enumeradores 
// los enumeradores garantizan que solo se pueda usar los valores
// definidos  
/* Tener presente!!
    Cuando compilas un enum normal, TypeScript genera un objeto
    en JavaScript bastante pesado}
    Para evitar esto, puedes usar 'const enum' que genera un código
    más ligero al eliminar el objeto en tiempo de compilación.
*/
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var hoy = DiaDeLaSemana.Miércoles;
console.log("Hoy es:", DiaDeLaSemana[hoy]); // Output: Hoy es: 2
