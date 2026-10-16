
// La inferencia permite que TypeScript deduzca tipos a partir del valor inicial;
// la anotación explícita es útil cuando una variable debe aceptar más de una forma.
let age:number|string = 25;
const userActive = true;

console.log("Age: ", typeof age);

age = 26

console.log("Age: ", typeof age);

const productPrice:number|boolean = 125.50;

// Aunque la unión incluye boolean, el valor asignado permite estrecharla aquí a number;
// por eso el método propio de números es válido en esta expresión.
const productoPriceFixed = productPrice.toFixed(2);

const user = {
  id: 1,
  name: 30,
  active: true
}


// Ejemplo de operaciones disponibles después de inferir string.
const name = "Nombre"
name.length
name.toUpperCase()
name.includes("Rea")
name.startsWith("Re")

const ageNumber = 0;

const isActive:boolean = false;

// Undefined
let city:string|undefined;
// La comprobación descarta el valor ausente dentro del bloque y permite tratarlo de forma segura.
if(!city){
  console.log(city);
}


let selectedProducts:null = null;
selectedProducts = null;

// `any` desactiva la comprobación estática; estas operaciones pueden fallar en ejecución.
let unsafeValue:any = "Hello"


unsafeValue.nonExistingProperty;

unsafeValue = 25;
unsafeValue = true;
unsafeValue = { name: "nombre" };
// unsafeValue.toUpperCase() // En `any`, TypeScript lo permite, pero fallaría con el objeto actual.

// Unknown
// Representa un valor cuyo tipo todavía no conocemos
// A diferencia de `any`, `unknown` obliga a comprobar el tipo antes de acceder a sus operaciones.

let unknownValue:unknown = "Hola";

unknownValue = 25;
unknownValue = true;
unknownValue = { name: "nombre" };



function printUnknownValue(value: unknown) {
  if(typeof value === "string"){
    console.log(value.toUpperCase());
    return;
  }

  if(typeof value === "number"){
    console.log(value.toFixed(2));
    return;
  }

  if(typeof value === "boolean"){
    console.log(value ? "Verdadero" : "Falso");
    return;
  }

  console.log("Tipo no manejado");
}

printUnknownValue("React");
printUnknownValue(25);
printUnknownValue(true);
printUnknownValue({ name: "nombre" });


function simulateError() {
  throw new Error("No fue posible completar la operación reinicie");
}

try {
  simulateError()
} catch(error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Se producjo un error desconocido");
  }
}

// void
function showMessage(message:string):void {
  if(!message){
    return;
  }

  console.log(message);

}

showMessage("  ");

// Never
// representa un valor que nunca puede existir
// `never` describe funciones que no llegan a producir un valor: lanzan una excepción o no terminan.

function throwApplicationError(message: string): never {
  throw new Error(message);
}


// Este ejemplo permanece comentado porque ejecutarlo bloquearía el proceso indefinidamente.
// function runForever(): never {
//   while(true){

//   }
// }
