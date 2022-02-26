const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-btn');
const menuIcons = menuButton.querySelectorAll('i');
const darkModeButton = document.getElementById('dark-mode');
const darkModeIcons = darkModeButton.querySelectorAll('i');
const html = document.documentElement;
let isShowMenu = false;
let isShowDarkMode = false;

menuButton.addEventListener('click', () => {
    isShowMenu = !isShowMenu;
    menu.classList.toggle('invisible');
    menuButton.classList.toggle('text-white');
    if (isShowMenu) {
        menuIcons[0].classList.add('hidden');
        menuIcons[1].classList.remove('hidden');
    } else {
        menuIcons[1].classList.add('hidden');
        menuIcons[0].classList.remove('hidden');
    }
})

darkModeButton.addEventListener('click', () => {
    isShowDarkMode = !isShowDarkMode;
    if (isShowDarkMode) {
        darkModeIcons[0].classList.add('hidden');
        darkModeIcons[1].classList.remove('hidden');
    } else {
        darkModeIcons[1].classList.add('hidden');
        darkModeIcons[0].classList.remove('hidden');
    }
})