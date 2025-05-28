const languages = document.querySelector('#languages')
let click = false

function showLanguages(){
    click = !click
    if(click){
        languages.style.display = 'flex'
    }
    else{
        languages.style.display = 'none'
    }
}

let overlay = document.querySelector('#overlay')
const hamburgerMenu = document.querySelector('#hamburger-menu')
let click2 = false

function showHamburgerMenu(){
    click2 = !click2
    if(click2){
        hamburgerMenu.style.display = 'block'
        overlay.style.display = 'block'
    }
    else{
        hamburgerMenu.style.display = 'none'
        overlay.style.display = 'none'
    }
}