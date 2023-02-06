import addNode from "./header.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import footer from "./footer.js";
addNode()
home()
menu()
contact()
footer()


const tagMenu = document.querySelector(".menu")
const tagHome = document.querySelector(".home")
const tagContact = document.querySelector(".contact")

const main = document.querySelector(".main")

const box = document.querySelector(".box")
const menuMain = document.querySelector(".menu-main")




function clickMenu(){
    box.style.display = "none"
    menuMain.style.display= "flex"
    // menu()
}

tagMenu.addEventListener("click", clickMenu)

function clickContact(){
    box.style.display = "none"
    menuMain.style.display= "none"
    main.style.display= "flex"
    // contact()
}

tagContact.addEventListener("click", clickContact)

function clickHome(){
    if(menuMain.style.display=== "flex" || main.style.display=== "flex"){
        box.style.display = "flex"
        menuMain.style.display= "none"
        main.style.display= "none"
    }
}

tagHome.addEventListener("click", clickHome)
 