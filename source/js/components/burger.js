const menu = document.body.querySelector('.header__nav');
const burger = document.body.querySelector('.burger');

const setBurger = () => {
    if (burger) {
        burger.addEventListener('click', (evt) => {
            evt.preventDefault();
    
            burger.classList.toggle('burger--opened');
            menu.classList.toggle('header__nav--hidden');
            document.body.classList.toggle('body--dark');
        });   
    }
}

export {setBurger}
