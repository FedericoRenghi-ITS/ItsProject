// ===== Variabili: let, var, const =====

// VAR: può essere ridefinita e ha scope "funzione"
var nome = "Mario";
console.log("var nome:", nome);
var nome = "Luigi"; // si può ridefinire!
console.log("var nome dopo ridichiarazione:", nome);

// LET: può essere riassegnata ma non ridichiarata nello stesso scope
let eta = 30;
console.log("let eta:", eta);
// let eta = 35; // ERRORE se decommentato
eta = 35; // ✔️ OK
console.log("let eta dopo riassegnazione:", eta);

// CONST: non può essere né ridichiarata né riassegnata
const paese = "Italia";
console.log("const paese:", paese);
// paese = "Francia"; // ERRORE
// const paese = "Spagna"; // ERRORE

/*
hgdrhefdhdf
fdh
dfhdf

*/

console.log("===================================");

// ===== Tipi di dati principali in JS =====

// Number
let numero = 42;
console.log("number:", numero);

// String
let saluto = "Ciao mondo";
console.log("string:", saluto);

// Boolean
let acceso = true;
console.log("boolean:", acceso);

// Null -> rappresenta l'assenza intenzionale di valore
let valoreNull = null;
console.log("null:", valoreNull);

// Undefined -> rappresenta una variabile non inizializzata
let valoreIndefinito;
console.log("undefined:", valoreIndefinito);

// Object
let persona = { nome: "Anna", eta: 25, };
console.log("object:", persona);

// Array
let colori = ["rosso", "verde", "blu", 1, true, persona];
console.log("array:", colori);