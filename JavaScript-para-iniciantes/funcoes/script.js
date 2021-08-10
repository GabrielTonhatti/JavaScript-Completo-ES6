// Crie uma função para verificar se um valor é Truthy
function verifica(boolean) {
   return !!boolean;
}
console.log(verifica(10));

// Cria uma função matemática que retorne o perimetro de um quadrado
// lembrando: perimetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
    return lado * 4;
}
console.log(perimetro(10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Gabriel', 'Tonhatti'))

// Crie uma função que verifica se um número é par
function numeroPar(num) {
    if (num % 2 === 0) {
        return `O número ${num} é par`;
    } else {
        return `O número ${num} não é par`;
    }
}
console.log(numeroPar(1021));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeoff)
function tipo(dado) {
    return typeof dado;
}
console.log(tipo(null));

// addEventListener é uma função nativa JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
// addEventListener('scroll', () => console.log(`Gabriel Tonhatti`));

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

console.log(precisoVisitar(90));

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(jaVisitei(85));