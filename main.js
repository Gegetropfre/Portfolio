const toggleMenuBtn = document.querySelectorAll('.toggle-menu')
const body = document.querySelector('body')

toggleMenuBtn.forEach(menuBtn => {
    let toggleMenu = document.createElement('div')
    toggleMenu.classList.add('toggleMenu')
    body.appendChild(toggleMenu)
    menuBtn.addEventListener('click', () => {
        console.log('oiuiu')
    })
});