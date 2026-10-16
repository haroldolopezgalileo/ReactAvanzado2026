// Un alias de objeto convierte una estructura repetida en un contrato reutilizable;
// TypeScript aplica tipado estructural: importa la forma compatible, no el nombre del tipo.
const user = {
  id: 1,
  name: "Ana",
  active: true
}

console.log("usuario: ", user.id);

type CourseType = {
  id: number;
  name: string;
  duration: number;
}

const course:CourseType = {
  id: 1,
  name: "React Avanzado",
  duration: 21
};

console.log(course.name);
console.log(course.duration);

const courseMath: CourseType = {
  id: 2,
  name: "Matematica",
  duration: 22
}

//  Alias de un primitivo
type Identifier = string;

const numeroIden:Identifier = "3455-6jój-7j6p6"

//  Union type
// Una unión limita el valor a cualquiera de sus alternativas; las uniones de literales
// son especialmente útiles para estados conocidos y evitan cadenas arbitrarias.

type Status = "idle" | "loading" | "success" | "error";

const estado:Status = "loading";

type Values = string | number | Status;

const valores:Values = "2000";
const valoresNum:Values = 2000;


//  Tupla
// Una tupla fija la cantidad, el orden y el tipo de cada posición, a diferencia de un array homogéneo.
type Coordiante = [
  number,
  number
];

const location:Coordiante = [14.55859595,16.393838393];


//  // Función

type Formatter = (value:Status) => string;

const formatter:Formatter = val => {
  return "formato executado con valor:"+val;
};

const value = formatter("loading");


//  // Interface
//  // interface también permite describir la estructura de un objeto

interface Student {
  id: number;
  name: string;
  score: number;
}

const estudiante:Student = {
  id: 1,
  name: "Ana",
  score: 95
}

console.log(estudiante);


// `extends` permite compartir los campos de Elemento y añadir propiedades específicas en cada interfaz.
interface Elemento {
  id: number;
  name: string;
}

interface EmployeePersona extends Elemento {
  company: string;
  position: string;
}

interface EmployeeAnimal extends Elemento {
  areaAsignada: string;
  necesidades: string;
}

interface EmployeeAI extends Elemento {
  areaAsignada: string;
  necesidades: string;
}

const empleadoAnimal: EmployeeAnimal = {
  id: 1,
  name: "Empleado 1",
  areaAsignada: "piso 1",
  necesidades: "NA"
}

function entrada(elemento:Elemento) {
  console.log("Ha ingresado un elemento: ", elemento);
}

entrada(empleadoAnimal)



// Las declaraciones de interface con el mismo nombre se fusionan: el objeto debe cumplir ambos bloques.
interface ApplicationConfig {
  apiUrl: string;
}

interface ApplicationConfig {
  timeout: number;
}

const config: ApplicationConfig = {
  apiUrl: "https://api.example.com",
  timeout: 5000
}


// `?` hace que email pueda faltar; el encadenamiento opcional y `??` cubren ese caso sin inventar un valor.
type Profile = {
  id: number;
  name: string;
  email?: string;
}

const profileA: Profile = {
  id: 1,
  name: "Admin name",
  email: "admin@example.com"
}

const profileB: Profile = {
  id: 2,
  name: "Admin name 2"
}

console.log(profileB.email?.toUpperCase() ?? "No hay correo asignado");

const visibleEmail = profileA.email ?? "Sin correo";

console.log(visibleEmail);


//  readonly: evita que una propiedad sea reasignada desde typescript
// `readonly` protege la propiedad frente a reasignaciones detectadas por TypeScript;
// no convierte automáticamente en inmutable todo el objeto anidado.

type ReadonlyUser = {
  readonly id: number;
  name: string
};

const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "usuario 1"
};

readonlyUser.name = "usuario 11";

console.log("Usuario: ", readonlyUser);

type UserWithAddress = {
  readonly id: number;
  readonly address: {
    city: string;
  }
}

const userWithAddress: UserWithAddress = {
  id: 1,
  address: {
    city: "Guatemala"
  }
}

userWithAddress.address.city = "San José";


//  as const
// `as const` conserva literales concretos y marca las propiedades como readonly, en vez de ampliarlas a string.

const roles = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest"
} as const;


//  Typescript infiere aproximadamente:
//  {
//    readonly ADMIN: "admin";
//    readonly USER: "user";
//    readonly GUEST: "guest";
//  }

type Role = typeof roles[keyof typeof roles];

// let currentRole: Role = "otro" // Error intencional: no pertenece a la unión de literales.


//  as const con arrays
const availableThemes = [
  "light",
  "dark",
  "system"
] as const;

//  infiere a: readonly ["light", "dark", "system"]
//  availableThemes.push("blue")
//  availableThemes[0] = "red"

type AvailableTheme = typeof availableThemes[number]; // type AvailableTheme = "light" | "dark" | "system"

let selectedTheme: AvailableTheme = "system";
// selectedTheme = "dar" // Error intencional: el literal no pertenece a AvailableTheme.



//  intersection types
// La intersección exige simultáneamente las propiedades de ambos tipos; sirve para construir un contrato combinado.

type PersonInfo = {
  id: number;
  name: string;
}

type EmploymentInfo = {
  company: string;
  position: string;
}

type EmployeeProfile = PersonInfo & EmploymentInfo;

const employeeProfile: EmployeeProfile = {
  id: 1,
  name: "Empleado 1",
  company: "Empresa GT",
  position: "Developer"
}


type EmailContact = {
  email: string;
}

type PhoneContact = {
  phone: string;
}

type EitherContact = EmailContact | PhoneContact;

type CompleteContact = EmailContact & PhoneContact;

const emailContact: EitherContact = {
  email: "an@example.com"
}

const phoneContact: EitherContact = {
  phone: "384748589"
}

const completeContact:CompleteContact = {
  email: "an@example.com",
  phone: "384748589"
}


//  Index signature
type StringDictionary = {
  [key: string]: string;
}

const translations:StringDictionary = {
  hello: "Hola",
  goodby: "Adiós",
  welcome: "Bienvenido",
  valor: "value"
}


//  Generics en typescript <>
//  "Todavía no sé qué tipo será, pero cuando se me entregue, quiero conservarlo"

//  Sin generics, podríamos intentar esto:

function identityAny<T>(value:T):T { // T = string
  return value;
}

const resultAny = identityAny("React");

console.log(resultAny.toUpperCase());
// resultAny.nonExistingMehod(); // Error intencional: el genérico conserva que resultAny es string.



function getFirst<T>(values: T[]): T | undefined {
  return values[0];
}

const firstName = getFirst(["Ana", "Carlos", "Andrea"]);

if(firstName !== undefined) {
  console.log(firstName.toLocaleUpperCase());
}

const firstNumber = getFirst([10,20,30]);
if(firstNumber !== undefined){
  console.log(firstNumber.toFixed(2));
}

type Product = {
  id: number;
  name: string;
}

const firstProduct = getFirst<Product>([
  {
    id: 1,
    name: "Keyboard"
  },
  {
    id: 2,
    name: "Mouse"
  }
]);

if(firstProduct !== undefined){
  console.log(firstProduct.name);
}


class Service<T,U> {

  getFirst(data:T[]): T | undefined{
    return data[0];
  }

  transform(data:U):U{
    return data;
  }

}

const obtenerProductos = new Service<string, number>();

obtenerProductos.getFirst(["keyboard","mouse"]);



// RECORD es Utility Type se utiliza para crear objetos tipo diccionario

type UserRole = "admin" | "user" | "guest";

const roleLabels:Record<UserRole, string> = {
  admin: "Administrador",
  user: "Usuario",
  guest: "Invitado"
}

console.log(roleLabels);


const promesa: Promise<number> = new Promise<number>((resolve, reject) => resolve(1));
const edad: Promise<number> = Promise.resolve(30);

const guardar: Promise<UserRole> = Promise.resolve("admin");






