let menu = document.getElementById("menu")
let burger = document.getElementById("burger")


burger.addEventListener("click", openNav)

function openNav() {
    console.log("ok");
    menu.classList.toggle("inactive")
}


