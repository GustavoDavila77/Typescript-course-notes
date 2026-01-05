function calcular(operacion: string, ...numeros: number[]): number {
    if(operacion === "sumar") {
        return numeros.reduce((acumulado, valor_actual) => acumulado + valor_actual, 0);
    } else if (operacion === "restar") {
        return numeros.reduce((acumulado, valor_actual) => acumulado - valor_actual);
    } else if (operacion === "multiplicar") {   
        return numeros.reduce((acumulado, valor_actual) => acumulado * valor_actual, 1);
    } else if (operacion === "dividir") {
        return numeros.reduce((acumulado, valor_actual) => acumulado / valor_actual);
    }   else {        
        throw new Error("Operación no soportada");
    } 
} 

console.log("Suma:", calcular("sumar", 1, 2, 3, 4));

console.log("resta:", calcular("restar", 1, 2, 3, 4));

console.log("multiplicacion:", calcular("multiplicar", 1, 2, 3, 4));

console.log("division:", calcular("dividir", 100, 2, 5));


