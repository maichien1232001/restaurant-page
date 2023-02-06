function footer(){
    const content = document.getElementById("content")
    const footer = document.createElement("footer")
    const p = document.createElement("p")
    const i = document.createElement("i")

    content.appendChild(footer)
    footer.classList.add("footer")

    footer.appendChild(p)
    p.innerHTML = "Copyright © 2023 maichien"

    footer.appendChild(i)
    i.classList.add("fa-brands", "fa-github")
}

export default footer