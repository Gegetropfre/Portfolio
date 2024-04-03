
console.log('oui')

console.log('menuBtns')

const body = document.querySelector('body')
const menuBtns = document.querySelectorAll('.toggle-menu-btn');
const toggleMenu = document.createElement('div')

toggleMenu.classList.add('toggleMenu')
body.appendChild(toggleMenu)


menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener('click', () =>{
        console.log('oui')
        menuBtn.classList.toggle('toggle-menu-btn-toggled')
        toggleMenu.classList.toggle('toggleMenuToggled')
    });
});
