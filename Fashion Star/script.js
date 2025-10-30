let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');
const carrinho = document.querySelector('.carrinho')
const caixacarrinho = document.getElementById('caixacarrinho')
const cancelar = document.getElementById('cancelar-compra')


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

carrinho.addEventListener('click', () => {
    caixacarrinho.style.display = 'block';
});

cancelar.addEventListener('click', () => {
    caixacarrinho.style.display = 'none';
});