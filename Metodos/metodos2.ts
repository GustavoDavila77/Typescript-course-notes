function saludar(nombre:string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    } else {
        return `Hola, ${nombre}!`;
    }
}

console.log(saludar("Armin"));
console.log(saludar("Luis", "Que más mi bro"));

// parametros multiples
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acum, actual) => acum + actual, 0);
}

console.log("El resultado de sumar todos es:", sumarTodos(0, 3, 6, 7,4));


// valores por defecto
function despedir(nombre: string, despedida: string = "Adiós"): string {
    return `${despedida}, ${nombre}!`;  
}

console.log(despedir("Eren"));
console.log(despedir("Eren", "Hasta luego"));