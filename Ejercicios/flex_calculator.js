function calcular(operacion) {
    var numeros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numeros[_i - 1] = arguments[_i];
    }
    if (operacion === "sumar") {
        return numeros.reduce(function (acumulado, valor_actual) { return acumulado + valor_actual; }, 0);
    }
    else if (operacion === "restar") {
        return numeros.reduce(function (acumulado, valor_actual) { return acumulado - valor_actual; });
    }
    else if (operacion === "multiplicar") {
        return numeros.reduce(function (acumulado, valor_actual) { return acumulado * valor_actual; }, 1);
    }
    else if (operacion === "dividir") {
        return numeros.reduce(function (acumulado, valor_actual) { return acumulado / valor_actual; });
    }
    else {
        throw new Error("Operación no soportada");
    }
}
console.log("Suma:", calcular("sumar", 1, 2, 3, 4));
console.log("resta:", calcular("restar", 1, 2, 3, 4));
console.log("multiplicacion:", calcular("multiplicar", 1, 2, 3, 4));
console.log("division:", calcular("dividir", 100, 2, 5));
