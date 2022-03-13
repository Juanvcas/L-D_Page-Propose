window.addEventListener("load",() => {
    const nav = document.getElementById("nav");
    if (screen.width >= 1024) {
        nav.style.width = "auto";
    } else {
        nav.style.width = "0vw";
    }
})

window.addEventListener("resize",() => {
    const nav = document.getElementById("nav");
    if (screen.width >= 1024) {
        nav.style.width = "auto";
    } else {
        nav.style.width = "0vw";
    }
})

const navMenu = () => {
    const nav = document.getElementById("nav");
    if (nav.style.width == "0vw") {
        nav.style.width = "100vw";
    } else {
        nav.style.width = "0vw";
    }
}