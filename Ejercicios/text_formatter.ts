// firmas de sobrecarga
function formatter(input: string): string;
function formatter(input: number): string;
function formatter(input: string[]): string[];

// implementación
function formatter(input: string | number | string[]): string | number | string[] {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return `$${input.toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
        return `${input.join("-")}`;
    }
}

// Pruebas
//console.log(formatter("hola"));           
console.log(formatter(1500.5));          
//console.log(formatter(["uno", "dos"]));