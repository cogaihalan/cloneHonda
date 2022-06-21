const SHOWROOM = document.querySelector("#_showroom")
const ICON_ARROW = document.querySelectorAll(".js-arrow")
const OPEN_SHOWROOM = document.querySelector(".js-showroom")
const CLOSE_SHOWROOM = document.querySelector(".showroom-close")
const OPEN_DROPDOWN = document.querySelectorAll(".js-dropdown")
const DROPDOWN_LIST = document.querySelectorAll(".dropdown")
const PLUS_ICON = document.querySelectorAll(".js-plus")
const LINK_HEADING = document.querySelectorAll(".js-heading")
const NAVBAR_TOGGLER = document.querySelector(".navbar-toggler")
const SHOW_MENU = document.querySelectorAll(".navbar-toggler-icon")
const MENU_TEXT = document.querySelector(".menu-text")


function slideFromTop(selector, _class, _icon) {
    selector.classList.toggle(_class)
    if (selector.classList.contains(_class)) {
        _icon.classList.replace("fa-angle-down", "fa-angle-up")
    } else {
        _icon.classList.replace("fa-angle-up", "fa-angle-down")

    }
}

OPEN_SHOWROOM.onclick = () => slideFromTop(SHOWROOM, "slideIn", ICON_ARROW[0])
CLOSE_SHOWROOM.onclick = (e) => {
    e.stopPropagation()
    SHOWROOM.classList.remove("slideIn")
    document.querySelector(".js-arrow").classList.replace("fa-angle-up", "fa-angle-down")
}



OPEN_DROPDOWN.forEach((item, index) => {
    item.onclick = () => slideFromTop(DROPDOWN_LIST[index], "slide", ICON_ARROW[index + 1])
})
// Plus <=> Minus

LINK_HEADING.forEach((item, index) => item.onclick = () => {
    if (PLUS_ICON[index].classList.contains("fa-plus"))
        PLUS_ICON[index].classList.replace("fa-plus", "fa-minus")
    else {
        PLUS_ICON[index].classList.replace("fa-minus", "fa-plus")

    }
}

)

// Menu navbar

NAVBAR_TOGGLER.onclick = () => {

    SHOW_MENU[0].classList.toggle("transform45deg")
    SHOW_MENU[1].classList.toggle("transform-45deg")
    MENU_TEXT.classList.toggle("fadeOut")
    if (SHOWROOM.classList.contains("slideIn")) {
        SHOWROOM.classList.remove("slideIn")
        document.querySelector(".js-arrow").classList.replace("fa-angle-up", "fa-angle-down")

    }
}
