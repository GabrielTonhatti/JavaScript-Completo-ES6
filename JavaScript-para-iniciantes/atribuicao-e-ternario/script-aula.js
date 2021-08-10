var numero = 20;
var numero2 = 10;

numero += 10; // numero = numero + 10
numero2 /= 10; // numero = numero / 10
console.log(numero);
console.log(numero2);

var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode Beber' : 'Não pode Beber';
console.log(podeBeber);

var possuiFaculdade = true;
if (possuiFaculdade)
    console.log('Sim possui');
else
    console.log('Não Possui');