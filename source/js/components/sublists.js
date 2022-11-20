const subListsLinks = document.body.querySelectorAll('.menu__link--list');

const setSubListsLinks = () => {
    if (subListsLinks) {
        subListsLinks.forEach((link) => {
            link.addEventListener('click', (evt) => {
                evt.preventDefault();
                link.classList.toggle('menu__link--active');
            });
        });
    }
}

export {setSubListsLinks}
