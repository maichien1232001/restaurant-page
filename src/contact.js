function contact(){
    const content = document.getElementById("content")
    const main = document.createElement("main")
    const contact = document.createElement("div")
    const phone = document.createElement("div")
    const phoneIcon = document.createElement("div")
    const tagI = document.createElement("i")
    const phoneNumber = document.createElement("div")
    const p = document.createElement("p")
    const home = document.createElement("div")
    const homeIcon = document.createElement("div")
    const tagI2 = document.createElement("i")
    const homeContent = document.createElement("div")
    const p2 = document.createElement("p")
    const map = document.createElement("div")
    const tagImg = document.createElement("img")


    content.appendChild(main)
    main.classList.add("main")

    main.appendChild(contact)
    contact.classList.add("contact")

    contact.appendChild(phone)
    phone.classList.add("phone")

    phone.appendChild(phoneIcon)
    phoneIcon.classList.add("phone-icon")

    phoneIcon.appendChild(tagI)
    tagI.classList.add("fa-solid", "fa-phone")

    phone.appendChild(phoneNumber)
    phoneNumber.classList.add("phone-number")

    phoneNumber.appendChild(p)
    p.innerHTML = "123 456 789"

    contact.appendChild(home)
    home.classList.add("home")

    home.appendChild(homeIcon)
    homeIcon.classList.add("home-icon")

    homeIcon.appendChild(tagI2)
    tagI2.classList.add("fa-solid", "fa-house-user")

    home.appendChild(homeContent)
    homeContent.classList.add("home-content")

    homeContent.appendChild(p2)
    p2.innerHTML = "Hollywood Boulevard 42, Los Angeles, USA"

    contact.appendChild(map)
    map.classList.add("map")
    map.appendChild(tagImg)
    tagImg.src = "/src/restaurant-location.png"
}

export default contact