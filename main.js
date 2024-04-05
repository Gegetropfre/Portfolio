const body = document.querySelector('body');
const menuBtns = document.querySelectorAll('.toggle-menu-btn');
const liMenus = document.querySelectorAll('.li-menu')
const liMenuPs = document.querySelectorAll('.li-menu-p')

const toggleMenu = document.createElement('div');
const listeMenu = document.createElement('ul');

toggleMenu.classList.add('toggleMenu')

body.appendChild(toggleMenu)
toggleMenu.appendChild(listeMenu)





let previousLiMenu = null;
let previousPreviousMenu = null;


liMenus.forEach(liMenu =>{
    liMenu.addEventListener('click', menuAnimation)
})


function menuAnimation(event){
    let liMenu = event.target
    let liId = liMenu.id
    let liMenuBtn = liMenu.children[1]


    if(liMenu.classList.contains('li-menu-toggled')){
        liMenu.classList.remove('li-menu-toggled')
        liMenuBtn.classList.remove('toggle-menu-btn-toggled')
        toggleMenu.classList.remove('toggleMenuToggled')
 
        console.log('le bouton avait la classe activée')

    } else {
        liMenus.forEach(liMenu =>{
            liMenu.classList.remove('li-menu-toggled')

        })


        menuBtns.forEach(menuBtn => {
            menuBtn.classList.remove('toggle-menu-btn-toggled')

        })
        
        console.log('pas de classe')
        liMenu.classList.add('li-menu-toggled')
        liMenuBtn.classList.toggle('toggle-menu-btn-toggled')


        displayMenu(liId)
    }
        


}






function displayMenu(liId){
    toggleMenu.classList.add('toggleMenuToggled')

    switch(liId){
        case "li-menu-apropos":
            console.log('display home')
            listeMenu.innerHTML = `
                <li> Informations </li>
                <li> CV </li>
                <li> </li>
                <li> </li>
            `
            break;
        case "li-menu-contact":
            console.log('display contact')

            listeMenu.innerHTML = `
                <li><a href="contact.php">Informations </a></li>
                <li><a href="contact.php/"> Contacter </a></li>
                <li> </li>
                <li> </li>
            `
            break;
        case "li-menu-veilles":
            listeMenu.innerHTML = `
                <li><a href="contact.php">Blockchain </a></li>
            `
            break;
        case "li-menu-contact":
            listeMenu.innerHTML = `
                <li><a href="contact.php">Informations </a></li>
                <li><a href="contact.php"> Contacter </a></li>
                <li> </li>
                <li> </li>
            `
            break;
    }


}
