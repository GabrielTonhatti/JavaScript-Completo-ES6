// var ultimoItem = videoGames.pop();

// videoGames.push('3DS');

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if(videoGames[i] === 'PS4') {
        break;
    }
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']

frutas.forEach(function(fruta, index, array){
    console.log(fruta, index, array);
});