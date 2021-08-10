'use strict'
var carro = 'Fusca';

function mostrarCarro() {
    console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if (true) {
    const mes = 'Dezembro';
    console.log(mes);
}

// console.log(mes);

{
    var carro2 = 'Fusca 2';
    const ano = 2018;
}
console.log(carro2); // Carro
// console.log(ano);   // erro ano is not defined

for (var i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}
console.log(i);

const mes = 'Dezembro';
mes = 'Janeiro';    // erro, tentou modificar o valor
const semana;   // erro, declarou sem valor

const data = {
    dia: 28,
    mes: 'Dezembro',
    ano: 2018
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro