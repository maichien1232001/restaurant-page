// import './style.css';

function addNode(){
    const content = document.getElementById('content')
    const header = document.createElement("div")
    const headerTitle = document.createElement("div")
    const nameRestaurant = document.createElement("h1")
    const nav = document.createElement("nav")
    const navList = document.createElement("ul")
    // const tagA = document.createElement("a")
    // const navItems = document.createElement("li")
    content.appendChild(header)
    header.classList.add("header")

    header.appendChild(headerTitle)
    headerTitle.classList.add("header-title")

    headerTitle.appendChild(nameRestaurant)
    nameRestaurant.innerHTML = "My Restaurant"

    header.appendChild(nav)
    nav.classList.add("navbar")

    nav.appendChild(navList)


    let array = ['Home', 'Menu', 'Contact']  
    let arrayClass = ['home', 'menu', 'contact']
        
    for (let i=0; i<array.length; i++){
        const tagA = document.createElement("a")
        const navItems = document.createElement("li")
    
        tagA.appendChild(document.createTextNode(array[i])) 
        navList.appendChild(navItems)
        navItems.appendChild(tagA)

        // 
        // for(let j=0; j<arrayClass.length; j++){
            navItems.classList.add(arrayClass[i])
        // }
        
    
    }
    // navItems.innerHTML = letters

}
export default addNode