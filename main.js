const body = document.querySelector('body');
const menuBtns = document.querySelectorAll('.toggle-menu-btn');
const toggleMenu = document.createElement('div');
const listeMenu = document.createElement('ul');

toggleMenu.classList.add('toggleMenu');
listeMenu.classList.add('liste-menu');
toggleMenu.appendChild(listeMenu);
body.appendChild(toggleMenu);

let previousBtn = null;
let previousParentBtn = null;

function toggleBtn(btn) {
    btn.classList.toggle('toggle-menu-btn-toggled');
}

function toggleParentBtn(parentBtn) {
    parentBtn.classList.toggle('li-menu-toggled');
}

function resetState(currentBtn, parentBtn) {
    if (previousBtn !== null && currentBtn !== previousBtn) {
        console.log('Le bouton cliqué est différent du précédent');
        toggleBtn(document.getElementById(previousBtn)); // Toggle the previous button
        toggleParentBtn(previousParentBtn); // Toggle the previous parent button
    }
}

menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener('click', (e) => {
        const parentBtn = menuBtn.parentNode;
        const currentBtn = menuBtn.id;

        toggleBtn(menuBtn);
        toggleParentBtn(parentBtn);

        resetState(currentBtn, parentBtn);

        toggleMenu.classList.toggle('toggleMenuToggled');
        console.log(parentBtn.id);
        displayMenu(parentBtn.id);

        previousBtn = currentBtn;
        previousParentBtn = parentBtn;
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