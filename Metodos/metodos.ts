function imprimirMensaje(mensaje: string): void {
    console.log(mensaje);
}

imprimirMensaje("Hey, esto es un mensaje");

function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

let resultado = sumar(5, 10);
console.log(`Resultado de la suma es: ${resultado}`);