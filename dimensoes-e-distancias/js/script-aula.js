const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

console.log(height);
console.log(animaisTop);

const primeiroaH2 = document.querySelector('h2');
const h2Left = primeiroaH2.offsetLeft;
console.log(h2Left);

const h2Rect = primeiroaH2.getBoundingClientRect();

console.log(h2Rect.top);

if (h2Rect.top < 0) {
    console.log('Passou do elemento');
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset
);

const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
    console.log('Usuário mobile');
} else {
    console.log('Usuário desktop');
}

console.log(small);