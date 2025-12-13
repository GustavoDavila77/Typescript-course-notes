/* any type variable
    * Completely disables type checking
    *You can do anything with it without TypeScript complaining
*/
var anyVariable;
anyVariable = "Hello World";
anyVariable = 42;
anyVariable = true;
//anyVariable.toUpperCase(); // No error at compile time
console.log("Valor de anyVariable: " + anyVariable);
/* unknown type variable
    * Safer alternative to 'any'
    * TypeScript will enforce type checking when using the variable
*/
var unknownVariable;
unknownVariable = "Hello Universe";
unknownVariable = 100;
unknownVariable = false;
//unknownVariable.toUpperCase(); // Error at compile time
if (typeof unknownVariable === "string") {
    console.log("Valor de unknownVariable: " + unknownVariable);
}
/**
    never helps TypeScript catch bugs
    by representing impossible states
    and ensuring you've handled all possible cases in your code.
 */
function throwError(message) {
    throw new Error(message);
}
//throwError("this is a error");
/* void it's mainly used for functions that
    don't return anything.
*/
function logMessage(message) {
    console.log("Log: " + message);
}
logMessage("This is a log message");
