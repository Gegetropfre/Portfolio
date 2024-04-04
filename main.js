const body = document.querySelector('body');
const menuBtns = document.querySelectorAll('.toggle-menu-btn');
const liMenus = document.querySelectorAll('.li-menu')
const liMenuPs = document.querySelectorAll('.li-menu-p')

const toggleMenu = document.createElement('div');
const listeMenu = document.createElement('ul');

toggleMenu.classList.add('toggleMenu')

body.appendChild(toggleMenu)
toggleMenu.appendChild(listeMenu)







liMenuPs.forEach(liMenuP=> {
    liMenuP.addEventListener('click', () => {
        console.log("c'est un liMenuP")
        
    })
})
liMenus.forEach(liMenu => {
    liMenu.addEventListener('click', liMenuToggle);
});

function liMenuToggle(event) {
    const liMenu = event.currentTarget; // Récupère l'élément cliqué
    // Si l'élément cliqué a déjà la classe "li-menu-toggled"
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
        // Ajouter la classe "li-menu-toggled" à l'élément cliqué
        liMenu.classList.add('li-menu-toggled');
        liId = liMenu.id
        console.log('id =' + liId)
        displayMenu(liId)
    }
    console.log("C'est un liMenu");
    console.log(liMenu)
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

menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener('click', menuBtnToggle(menuBtn))
    
})







// toggleMenu.classList.add('toggleMenu');
// listeMenu.classList.add('liste-menu');
// toggleMenu.appendChild(listeMenu);
// body.appendChild(toggleMenu);

// let previousBtn = null;
// let previousParentBtn = null;

// function toggleBtn(btn) {
//     btn.classList.toggle('toggle-menu-btn-toggled');
// }

// function toggleParentBtn(parentBtn) {
//     parentBtn.classList.toggle('li-menu-toggled');
// }

// function resetState(currentBtn, parentBtn) {
//     if (previousBtn !== null && currentBtn !== previousBtn) {
//         console.log('Le bouton cliqué est différent du précédent');
//         toggleBtn(document.getElementById(previousBtn)); // Toggle the previous button
//         toggleParentBtn(previousParentBtn); // Toggle the previous parent button
//     }
// }

// menuBtns.forEach(menuBtn => {
//     menuBtn.addEventListener('click', (e) => {
//         const parentBtn = menuBtn.parentNode;
//         const currentBtn = menuBtn.id;

//         toggleBtn(menuBtn);
//         toggleParentBtn(parentBtn);

//         resetState(currentBtn, parentBtn);

//         toggleMenu.classList.toggle('toggleMenuToggled');
//         console.log(parentBtn.id);
//         displayMenu(parentBtn.id);

//         previousBtn = currentBtn;
//         previousParentBtn = parentBtn;
//     });
// });



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