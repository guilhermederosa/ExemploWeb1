//Declarações e variáveis
//var, let e const

var nome="Fiap";
console.log(nome);
var nome="Teste";
console.log(nome);

if(true){
    let apelido="Fiapin";
    console.log(apelido);   
}

const taxaJuros=0.05;
console.log(taxaJuros);
var exemplo="ola-dev-var";
console.log(exemplo);

//typeof verifica o tipo da variavel
// let exemplo1="ola-dev-let";
// console.log(exemplo1);

let exemplo1="ola-dev-let";
console.log(exemplo1);

const exemplo2="ola-dev-const";
console.log(exemplo2);

let exemplo3=10+1;
console.log(exemplo3);

let exemplo4=true;
console.log(exemplo4);

let exemplo5={nome1:"Teste"};
console.log(exemplo5);

let exemplo6=["Java", "C#", "PHP"];
console.log(exemplo6);

//valor undefined 
let exemplo7;
console.log(exemplo7);
let exemplo8= null;
console.log(exemplo8);

// Operadores aritmetcos

const valor1= 10;
const valor2= 20;

console.log( valor1 + valor2);
console.log( valor1 - valor2);
console.log( valor1 * valor2);
console.log( valor1 / valor2);

// Operadores lógicos 
// = atribuição
// === valor e tipo (estritamente igual)
// && = E (Todas as condições verdadeiras)
// || = OU (uma das condições verdadeiras)

console.log( valor1 < valor2);
console.log( valor1> 10 &&  valor2 < 10 );
console.log(valor1 < 100 || valor1 > 10 );
console.log(valor1 == valor2);
console.log(valor1 === valor2)

//Ex 1
let p= exemplo3
let v= valor1 
console.log(p-v);

//Ex 2
let a = exemplo3;
let b = valor1;
console.log(a===20 && b>= 10);

// Ex 3
let user_login=true;
let user_token=true;
console.log(user_login==true && user_token == true);