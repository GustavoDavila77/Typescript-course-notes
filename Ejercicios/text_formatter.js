console.log("Ejercicio: text_formatter.ts");
// implementación
function formatter(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return "$".concat(input.toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    }
    else {
        return "".concat(input.join("-"));
    }
}
// Pruebas
//console.log(formatter("hola"));           
//console.log(formatter(1500.5));          
//console.log(formatter(["uno", "dos"]));
