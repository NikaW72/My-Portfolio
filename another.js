let nameElement = document.getElementById("name")
let button = document.getElementById("button")

let names = ["Nika","Beqa","Amanda","George","Paul","Rebecca","John Cena","Micheal","Jordan","Kobe"]

function picker() {
    let randomIndex = Math.floor(Math.random() * names.length)
    nameElement.textContent = names[randomIndex]
}