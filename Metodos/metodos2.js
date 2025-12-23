function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre, "!");
    }
    else {
        return "Hola, ".concat(nombre, "!");
    }
}
console.log(saludar("Armin"));
console.log(saludar("Luis", "Que más mi bro"));
// parametros multiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acum, actual) { return acum + actual; }, 0);
}
console.log("El resultado de sumar todos es:", sumarTodos(0, 3, 6, 7, 4));
// valores por defecto
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adiós"; }
    return "".concat(despedida, ", ").concat(nombre, "!");
}
console.log(despedir("Eren"));
console.log(despedir("Eren", "Hasta luego"));
