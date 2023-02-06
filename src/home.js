
function home(){

    const content = document.getElementById('content')
    


    const divBox = document.createElement("div")
    const divContentHeader = document.createElement("div")
    const divContentOne = document.createElement("div")
    const span1 = document.createElement("span")
    const divContentTwo = document.createElement("div")
    const span2 = document.createElement("span")
    const divImg = document.createElement("div")
    const tagImg = document.createElement("img")
    const divContentFooter = document.createElement("div")
    const span3 = document.createElement("span")

    divBox.classList.add("box")
    content.appendChild(divBox)
    divBox.appendChild(divContentHeader)
    divContentHeader.classList.add("content_header")
    divContentHeader.appendChild(divContentOne)
    divContentOne.classList.add("content_header-one")
    divContentOne.appendChild(span1)
    span1.innerHTML = "Best pizza in your country"
    divContentHeader.appendChild(divContentTwo)
    divContentTwo.classList.add("content_header-two")
    divContentTwo.appendChild(span2)
    span2.innerHTML = "Made with passion since 1908"
    divImg.classList.add("content_img")
    divBox.appendChild(divContentHeader)
    divBox.appendChild(divImg)
    divImg.appendChild(tagImg)
    tagImg.classList.add("img_content")
    tagImg.src = '/src/nguyetdoc.jpg'
    divBox.appendChild(divContentFooter)
    divContentFooter.classList.add("content_footer")
    divContentFooter.appendChild(span3)
    span3.innerHTML = "Order online or visit us!"

}

export default home