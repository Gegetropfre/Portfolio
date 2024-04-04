
const body = document.querySelector('body')
const menuBtns = document.querySelectorAll('.toggle-menu-btn');
const toggleMenu = document.createElement('div')
let listeMenu = document.createElement('ul')

const liMenu = document.querySelectorAll('.li-menu')

toggleMenu.classList.add('toggleMenu')
listeMenu.classList.add('liste-menu')


toggleMenu.appendChild(listeMenu)
body.appendChild(toggleMenu)

let previousBtn = null
let previousParentBtn = null


menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener('click', (e) =>{

        parentBtn = menuBtn.parentNode

        
        let currentBtn = menuBtn.id

        menuBtns.forEach(btn => {
            btn.classList.remove('toggle-menu-btn-toggled')
            
        })


        if(previousBtn !== null){

            if(currentBtn !== previousBtn) {
                console.log('le bouton cliqué pas le meme que le précedent')
            } else {
                console.log('le bouton cliqué est le meme que le précedent')
                menuBtn.classList.toggle('toggle-menu-btn-toggled')
                displayMenu(parentBtn.id)
            }
        } else {
            console.log('pas de précédent bouton')
        }


        if(previousParentBtn !== null){                                 
            
            if(parentBtn !== previousParentBtn){
                previousParentBtn.classList.remove('li-menu-toggled')
            }
        } 


        
               
        menuBtn.classList.toggle('toggle-menu-btn-toggled')
        toggleMenu.classList.toggle('toggleMenuToggled')
        parentBtn = menuBtn.parentNode
        parentBtn.classList.toggle('li-menu-toggled')
        console.log(parentBtn.id)
        displayMenu(parentBtn.id);

        previousBtn = currentBtn
        previousParentBtn = parentBtn

    });
});



function displayMenu(parentId){

    switch(parentId){
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
            listeMenu.innerHTML = `
                <li><a href="contact.php">Informations </a></li>
                <li><a href="contact.php"> Contacter </a></li>
                <li> </li>
                <li> </li>
            `
            break;
    }
    

}