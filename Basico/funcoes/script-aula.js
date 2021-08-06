function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
    return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(pi());

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.8));

function corFavortia(cor) {
    if (cor === 'azul') {
        return 'Eu gosto do céu';
    } else if (cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return "Eu não gosto de cores";
    }
}

console.log(corFavortia('azul'));

// addEventListener('click', function () {
//     console.log('Oi')
// })

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(20, 1.80); // retorna o imc
console.log(imc2(1000, 1.80)); // retorna o imc e undefined

function terceiraIdade(idade) {

    console.log(typeof idade)
    if (typeof idade !== 'number') {
        return 'Por favor preencha um número';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }

}

console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Faltam visita ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(20));

var profissao = 'Desenvolvedor';

function dados() {
    var nome = 'Gabriel';
    var idade = 20;
    function outrosDados() {
        var endereco = 'São Paulo';
        var idade = 21;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados()); // Retorna 'Gabriel, 21, São Paulo, Desenvolvedor'
// console.log(outrosDados()); // Retorna um erro

