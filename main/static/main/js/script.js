let menuOpenButton = document.querySelector(".menuOpenButton")
let menuCloseButton = document.querySelector(".menuCloseButton")
let sidebar = document.querySelector(".sidebar")
let header = document.querySelector("header")
let content = document.querySelector(".content")
let main = document.querySelector(".main")

menuOpenButton.addEventListener("click", () => {
    menuOpenButton.style.display = "none"
    menuCloseButton.style.display = "block"
    sidebar.style.display = "none"
    main.classList.remove("open-menu")
    main.classList.add("close-menu")
})

menuCloseButton.addEventListener("click", () => {
    menuCloseButton.style.display = "none"
    sidebar.style.display = "block"
    menuOpenButton.style.display = "block"
    main.classList.remove("close-menu")
    main.classList.add("open-menu")
})
