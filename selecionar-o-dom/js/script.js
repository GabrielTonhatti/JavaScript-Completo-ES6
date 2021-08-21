// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao');
const primeiroH2 = animais.querySelector('h2');
console.log(animais);
console.log(primeiroH2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length]);