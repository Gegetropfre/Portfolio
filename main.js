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

liMenuPs.forEach(liMenuP=> {
    liMenuP.addEventListener('click', () => {
        console.log("c'est un liMenuP")

    })
})
liMenus.forEach(liMenu => {
    liMenu.addEventListener('click', liMenuToggle);
});


// Déroule le menu, rend vert le liMenu, et toggle le bouton
function liMenuToggle(event) {

    const liMenu = event.currentTarget;
    let liMenuChildren = liMenu.children
    let liMenuBtn = liMenuChildren[1]
    console.log('li menu bnt =' +liMenuBtn)
    console.log('précédent cliqué' +previousLiMenu)


    liMenu.classList.add('li-menu-toggled');
    liId = liMenu.id
    console.log('id =' + liId)

    if(previousPreviousMenu === liMenu){
        displayMenu(liId)
    } else {

        if(previousLiMenu === null){
            console.log('le précédent est null')
            displayMenu(liId)
            
        } else {
            
            if(liMenu === previousLiMenu ){
                console.log('le meme menu vient detre cliqué')
                toggleMenu.classList.remove('toggleMenuToggled')
            } else {
                console.log('pas le meme menu précédent')
                displayMenu(liId)
    
    
            }
        }
    }

    



    
    
    // toggle le bouton
    if(liMenuBtn.classList.contains('toggle-menu-btn-toggled')){
        liMenuBtn.classList.remove('toggle-menu-btn-toggled')
    } else {
        menuBtns.forEach(menuBtn => {
            menuBtn.classList.remove('toggle-menu-btn-toggled')
        })
        liMenuBtn.classList.add('toggle-menu-btn-toggled')
    }
    
    // rend vert le menuu
    // Ajouter la classe "li-menu-toggled" à l'élément cliqué



    if (liMenu.classList.contains('li-menu-toggled')) {
        // Supprimer la classe "li-menu-toggled" de l'élément cliqué
        liMenu.classList.remove('li-menu-toggled');

    } else {
        // Sinon, si l'élément cliqué n'a pas la classe "li-menu-toggled"
        // Supprimer la classe "li-menu-toggled" de tous les autres éléments
        liMenus.forEach(otherLiMenu => {
            if (otherLiMenu !== liMenu) {
                otherLiMenu.classList.remove('li-menu-toggled');
            }
        });
        
    }
    
    previousPreviousMenu = previousLiMenu
    previousLiMenu = liMenu;
    
}


function menuBtnToggle(menuBtn){
    return function (){
        if(menuBtn.classList.contains('toggle-menu-btn-toggled')){
            menuBtn.classList.remove('toggle-menu-btn-toggled')
        } else {
            menuBtns.forEach(menuBtn => {
                menuBtn.classList.remove('toggle-menu-btn-toggled')
            })
            menuBtn.classList.add('toggle-menu-btn-toggled')
        }
    }
}

// menuBtns.forEach(menuBtn => {
//     menuBtn.addEventListener('click', menuBtnToggle(menuBtn))

// })







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