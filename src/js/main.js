const closemenu = document.getElementById("close-menu")
const openmenu = document.getElementById("open-menu")
const menu = document.getElementById("menu")
const menuitems = document.getElementById("menu-items")

const menuItems = document.querySelectorAll("#menu-items > *")

menuItems.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.remove("top-0")
    menu.classList.add("-top-[1000px]")
  })
})

closemenu.addEventListener("click", () => {
  menu.classList.remove("top-0")
  menu.classList.add("-top-[1000px]")
})

openmenu.addEventListener("click", () => {
  menu.classList.remove("-top-[1000px]")
  menu.classList.add("top-0")
})
