const menuButton = document.querySelector('[data-menu-button]');
const navigationMenu = document.querySelector('[data-navigation-menu]');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('change');
    navigationMenu.classList.toggle('navigation__container--activated');
})