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
                <li><a href="#">Informations </a></li>
                <li><a href="contact.php">Informations </a></li>
                
            `
            break;
        case "li-menu-veilles":
            console.log('display contact')

            listeMenu.innerHTML = `
                <li><a href="veilles.view.php">Blockchain </a></li>
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


function changerTitre(){
    document.title = "Reviens ! " + '\u{1F600}'
}
function restaurerTitre(){
    document.title = "Portoflio - Audric HETE"
}

window.onblur = changerTitre
window.onfocus = restaurerTitre


// Veilles
let veilleDivs = document.querySelectorAll('.veilleDiv')
const veilles = document.querySelector('.veilles')
const blockchainImg = document.querySelector('#blockchainImg')
const leftDiv = document.querySelector('.blockchain-left')
const blockchainh2 = document.querySelector('.blockchainh2')

// creation div description 
const blockchainDesc = document.createElement('div')
blockchainDesc.classList.add('blockchain-desc')
blockchainDesc.textContent = 'OII'
body.appendChild(blockchainDesc)


function stopAnimation() {
    // Récupérer l'angle de rotation actuel
    const computedStyle = window.getComputedStyle(blockchainImg);
    const currentRotation = computedStyle.getPropertyValue('transform') || 'none';
    
    // Supprimer la classe pour arrêter l'animation
    blockchainImg.classList.remove('imgBlockchainActive');
    
    // Appliquer l'angle de rotation actuel directement à l'image
    blockchainImg.style.transform = currentRotation;
}

// Animation veilles

    


function handleMouseOver(){
        leftDiv.classList.add('leftActive')
        blockchainImg.classList.add('imgBlockchainActive')
        blockchainh2.classList.add('blockchainh2Active')
    }

function handleMouseOut(){
    leftDiv.classList.remove('leftActive')
    blockchainh2.classList.remove('blockchainh2Active')

    stopAnimation()
}
    
    setTimeout(()=>{
        veilles.addEventListener('mouseover', handleMouseOver)
        blockchainDesc.addEventListener('mouseover', handleMouseOver)
        veilles.addEventListener('mouseout', handleMouseOut)
        blockchainDesc.addEventListener('mouseout', handleMouseOut)

    }, 1000)

    

// Redirection boutons
const paths = {0 : 'https://www.cointribune.com/blockchain-spacechain-et-velas-font-dans-la-grande-vitesse/',
               1: 'https://www.lebigdata.fr/cybersecurite-blockchain',
               2: 'https://geodis.com/fr/blog/blockchain-la-logistique-innove-dans-le-transport-des-vaccins'
                 }

const articleBtns = document.querySelectorAll('.veilles-btns');

articleBtns.forEach((articleBtn, index) => {
    articleBtn.addEventListener('click', ()=>{

        console.log(`Index: ${index}, Bouton:`, articleBtn);
        window.location.href = paths[index]
    })
});


               