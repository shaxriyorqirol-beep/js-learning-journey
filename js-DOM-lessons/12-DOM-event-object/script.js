// let btn = document.querySelector("#btn")

// btn.addEventListener("click", function(event) {
//     console.log(event.type);
//     console.log(event.target.textContent);
// });

// let box = document.querySelector("#box")

// box.addEventListener("click", function(event) {
//     console.log(event.target)
//     console.log(event.currentTarget)
// })

// let box = document.querySelector("#box")

// box.addEventListener("click", function(event) {
//     event.currentTarget.style.backgroundColor = "red"
// })

// let box = document.querySelector("#box")

// box.addEventListener("click", function(event) {
//     console.log(event.target.textContent)
//     event.currentTarget.classList.add("box")
// })

// let btn = document.querySelector("#btn")

// btn.addEventListener("click", function(event) {
//     console.log(event.type)
//     console.log(event.target.textContent)
// })

let form = document.querySelector("#form")
let btn = document.querySelector("#btn")
let name = document.querySelector("#name")
let nom = document.querySelector("#nom")

form.addEventListener("submit", function(event) {
    console.log(event.type)
    event.preventDefault()

    btn.textContent = "Yuborildi"

    nom.textContent = name.value
})


