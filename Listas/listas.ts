// tipos de arreglos 
let nombre: string[] = ["Ana", "Luis", "Carlos"];
console.log("Nombres:", nombre); 

let numeros: number[] = [10, 20, 30, 40, 50];
console.log("Números:", numeros);

let mixto: any[] = ["Hola", 100, true, 45.67];
console.log("Mixto:", mixto);

// array tipo interfaz
interface Persona {     
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let persona: Persona[] = [
    { nombre: "Ana", edad: 28, esDesarrollador: true },
    { nombre: "Luis", edad: 34, esDesarrollador: false },
    { edad: 22, nombre: "Carlos", esDesarrollador: true }
];

persona.push({ nombre: "María", edad: 30, esDesarrollador: false });
console.log("Personas:", persona);

// tupla
// la diferencia con el array es que no se puede modificar
// la cantidad de elementos ni el tipo de dato de cada posición
let personaTupla: [string, number, boolean];
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
enum DiaDeLaSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}   

let hoy: DiaDeLaSemana = DiaDeLaSemana.Miércoles;
console.log("Hoy es:", DiaDeLaSemana[hoy]); // Output: Hoy es: 2
