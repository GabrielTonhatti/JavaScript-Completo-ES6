// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
    const imgs = document.querySelectorAll('img');
    let novaImg;
    imgs.forEach((img, index, array) => {
        novaImg += img.offsetWidth;
        console.log(img.offsetWidth);
    });
}

window.onload = function () {
     somaImagens();
}

// Verifique se os links da página possuem no mínimo recomendado para telas utlizadas com o dedo.
// (48px/48px de acordo com o google);


// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const mobile = window.matchMedia('(max-width: 720px)').matches;
const menu = document.querySelector('.menu');
console.log(mobile);
if (mobile) {
    menu.classList.add('menu-mobile');
    console.log("Tela mobile");
} else {
    // menu.classList.remove('menu-mobile');
    console.log("Tela desktop");
}