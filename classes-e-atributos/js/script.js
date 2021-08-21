// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach(item => {
    item.classList.add('ativo');
});
console.log(menu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
    item.classList.remove('ativo');
});
menu[0].classList.add('ativo');

console.log(menu);

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach(item => {
    console.log(item.hasAttribute('alt'));
});

// Modifique o href do link externo do menu
// const links = document.querySelectorAll('[href]');
// const linkExterno = links[links.length - 1];
// linkExterno.href = "https://www.google.com";
// console.log(links);
// console.log(linkExterno);

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', "https://www.google.com");
console.log(link);