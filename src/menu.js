function menu(){
    const content = document.getElementById("content")
    const menuMain = document.createElement("div")
    const menuContent = document.createElement("div")
    const menuContentWrap = document.createElement("div")
    const menuContentWrap2 = document.createElement("div")
    const menuContentWrap3 = document.createElement("div")
    const menuContentWrap4 = document.createElement("div")

    const menuWrapLeft = document.createElement("div")
    const menuWrapRight = document.createElement("div")
    
    const menuImg = document.createElement("div")
    const tagImg = document.createElement("img")
    const menuTitle = document.createElement("div")
    const h1 = document.createElement("h1")
    const menuMain1 = document.createElement("div")
    const p = document.createElement("p")

    const menuImgRight = document.createElement("div")
    const tagImgRight = document.createElement("img")
    const menuTitleRight = document.createElement("div")
    const h1Right = document.createElement("h1")
    const menuMain1Right = document.createElement("div")
    const pRight = document.createElement("p")

    content.appendChild(menuMain)
    menuMain.classList.add("menu-main")
    menuMain.appendChild(menuContent)
    menuContent.classList.add("menu_content")
    menuContent.appendChild(menuContentWrap)
    menuContentWrap.classList.add("menu__content_wrap")
    menuContentWrap.appendChild(menuWrapLeft)
    menuWrapLeft.classList.add("menu__content_wrap-left")
    menuWrapLeft.appendChild(menuImg)
    menuImg.classList.add("menu__content-img")
    menuImg.appendChild(tagImg)
    tagImg.classList.add("menu-img")
    tagImg.src = "/src/pizza.png"
    menuWrapLeft.appendChild(menuTitle)
    menuTitle.classList.add("menu-title")
    menuTitle.appendChild(h1)
    h1.innerHTML = "Salsiccia"
    menuWrapLeft.appendChild(menuMain1)
    menuMain1.classList.add("menu__main")
    menuMain1.appendChild(p)
    p.innerHTML = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"

    menuContentWrap.appendChild(menuWrapRight)
    menuWrapRight.classList.add("menu__content_wrap-right")
    menuWrapRight.appendChild(menuImgRight)
    menuImgRight.classList.add("menu__content-img")
    menuImgRight.appendChild(tagImgRight)
    tagImgRight.classList.add("menu-img")
    tagImgRight.src = "/src/pizza.png"
    menuWrapRight.appendChild(menuTitleRight)
    menuTitleRight.classList.add("menu-title")
    menuTitleRight.appendChild(h1Right)
    h1Right.innerHTML = "Salsiccia"
    menuWrapRight.appendChild(menuMain1Right)
    menuMain1Right.classList.add("menu__main")
    menuMain1Right.appendChild(pRight)
    pRight.innerHTML = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"


    //menuContentWrap2
    const menuWrapLeft2 = document.createElement("div")
    const menuWrapRight2 = document.createElement("div")
    
    const menuImg2 = document.createElement("div")
    const tagImg2 = document.createElement("img")
    const menuTitle2 = document.createElement("div")
    const h12 = document.createElement("h1")
    const menuMain12 = document.createElement("div")
    const p2 = document.createElement("p")

    const menuImgRight2 = document.createElement("div")
    const tagImgRight2 = document.createElement("img")
    const menuTitleRight2 = document.createElement("div")
    const h1Right2 = document.createElement("h1")
    const menuMain1Right2 = document.createElement("div")
    const pRight2 = document.createElement("p")

    menuContent.appendChild(menuContentWrap2)
    menuContentWrap2.classList.add("menu__content_wrap")
    menuContentWrap2.appendChild(menuWrapLeft2)
    menuWrapLeft2.classList.add("menu__content_wrap-left")
    menuWrapLeft2.appendChild(menuImg2)
    menuImg2.classList.add("menu__content-img")
    menuImg2.appendChild(tagImg2)
    tagImg2.classList.add("menu-img")
    tagImg2.src = "/src/pizza.png"
    menuWrapLeft2.appendChild(menuTitle2)
    menuTitle2.classList.add("menu-title")
    menuTitle2.appendChild(h12)
    h12.innerHTML = "Salsiccia"
    menuWrapLeft2.appendChild(menuMain12)
    menuMain12.classList.add("menu__main")
    menuMain12.appendChild(p2)
    p2.innerHTML = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"

    menuContentWrap2.appendChild(menuWrapRight2)
    menuWrapRight2.classList.add("menu__content_wrap-right")
    menuWrapRight2.appendChild(menuImgRight2)
    menuImgRight2.classList.add("menu__content-img")
    menuImgRight2.appendChild(tagImgRight2)
    tagImgRight2.classList.add("menu-img")
    tagImgRight2.src = "/src/pizza.png"
    menuWrapRight2.appendChild(menuTitleRight2)
    menuTitleRight2.classList.add("menu-title")
    menuTitleRight2.appendChild(h1Right)
    h1Right2.innerHTML = "Salsiccia"
    menuWrapRight2.appendChild(menuMain1Right2)
    menuMain1Right2.classList.add("menu__main")
    menuMain1Right2.appendChild(pRight2)
    pRight2.innerHTML = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    
    // menuContentWrap3
    const menuWrapLeft3 = document.createElement("div")
    const menuWrapRight3 = document.createElement("div")
    
    const menuImg3 = document.createElement("div")
    const tagImg3 = document.createElement("img")
    const menuTitle3 = document.createElement("div")
    const h13 = document.createElement("h1")
    const menuMain13 = document.createElement("div")
    const p3 = document.createElement("p")

    const menuImgRight3 = document.createElement("div")
    const tagImgRight3 = document.createElement("img")
    const menuTitleRight3 = document.createElement("div")
    const h1Right3 = document.createElement("h1")
    const menuMain1Right3 = document.createElement("div")
    const pRight3 = document.createElement("p")

    menuContent.appendChild(menuContentWrap3)
    menuContentWrap3.classList.add("menu__content_wrap")
    menuContentWrap3.appendChild(menuWrapLeft3)
    menuWrapLeft3.classList.add("menu__content_wrap-left")
    menuWrapLeft3.appendChild(menuImg3)
    menuImg3.classList.add("menu__content-img")
    menuImg3.appendChild(tagImg3)
    tagImg3.classList.add("menu-img")
    tagImg3.src = "/src/pizza.png"
    menuWrapLeft3.appendChild(menuTitle3)
    menuTitle3.classList.add("menu-title")
    menuTitle3.appendChild(h13)
    h13.innerHTML = "Salsiccia"
    menuWrapLeft3.appendChild(menuMain13)
    menuMain13.classList.add("menu__main")
    menuMain13.appendChild(p3)
    p3.innerHTML = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"

    menuContentWrap3.appendChild(menuWrapRight3)
    menuWrapRight3.classList.add("menu__content_wrap-right")
    menuWrapRight3.appendChild(menuImgRight3)
    menuImgRight3.classList.add("menu__content-img")
    menuImgRight3.appendChild(tagImgRight3)
    tagImgRight3.classList.add("menu-img")
    tagImgRight3.src = "/src/pizza.png"
    menuWrapRight3.appendChild(menuTitleRight3)
    menuTitleRight3.classList.add("menu-title")
    menuTitleRight3.appendChild(h1Right)
    h1Right3.innerHTML = "Salsiccia"
    menuWrapRight3.appendChild(menuMain1Right3)
    menuMain1Right3.classList.add("menu__main")
    menuMain1Right3.appendChild(pRight3)
    pRight3.innerHTML = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"

    // menuContentWrap4
    const menuWrapLeft4 = document.createElement("div")
    const menuWrapRight4 = document.createElement("div")
    
    const menuImg4 = document.createElement("div")
    const tagImg4 = document.createElement("img")
    const menuTitle4 = document.createElement("div")
    const h14 = document.createElement("h1")
    const menuMain14 = document.createElement("div")
    const p4 = document.createElement("p")

    const menuImgRight4 = document.createElement("div")
    const tagImgRight4 = document.createElement("img")
    const menuTitleRight4 = document.createElement("div")
    const h1Right4 = document.createElement("h1")
    const menuMain1Right4 = document.createElement("div")
    const pRight4 = document.createElement("p")

    menuContent.appendChild(menuContentWrap4)
    menuContentWrap4.classList.add("menu__content_wrap")
    menuContentWrap4.appendChild(menuWrapLeft4)
    menuWrapLeft4.classList.add("menu__content_wrap-left")
    menuWrapLeft4.appendChild(menuImg4)
    menuImg4.classList.add("menu__content-img")
    menuImg4.appendChild(tagImg4)
    tagImg4.classList.add("menu-img")
    tagImg4.src = "/src/pizza.png"
    menuWrapLeft4.appendChild(menuTitle4)
    menuTitle4.classList.add("menu-title")
    menuTitle4.appendChild(h14)
    h14.innerHTML = "Salsiccia"
    menuWrapLeft4.appendChild(menuMain14)
    menuMain14.classList.add("menu__main")
    menuMain14.appendChild(p4)
    p4.innerHTML = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"

    menuContentWrap4.appendChild(menuWrapRight4)
    menuWrapRight4.classList.add("menu__content_wrap-right")
    menuWrapRight4.appendChild(menuImgRight4)
    menuImgRight4.classList.add("menu__content-img")
    menuImgRight4.appendChild(tagImgRight4)
    tagImgRight4.classList.add("menu-img")
    tagImgRight4.src = "/src/pizza.png"
    menuWrapRight4.appendChild(menuTitleRight4)
    menuTitleRight4.classList.add("menu-title")
    menuTitleRight4.appendChild(h1Right)
    h1Right4.innerHTML = "Salsiccia"
    menuWrapRight4.appendChild(menuMain1Right4)
    menuMain1Right4.classList.add("menu__main")
    menuMain1Right4.appendChild(pRight4)
    pRight4.innerHTML = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
}

export default menu