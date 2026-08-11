// let form = document.querySelector("#form")
// let name = document.querySelector("#name")
// let btn = document.querySelector("#btn")
// let result = document.querySelector("#result")

// form.addEventListener("submit", function(event) {
//     event.preventDefault()

//     btn.textContent = "Yuborildi"
//     console.log(btn.textContent)

//     result.textContent = "Form yuborildi"
// })

let form = document.querySelector("#form")
let name = document.querySelector("#name")
let btn = document.querySelector("#btn")
let result = document.querySelector("#result")

form.addEventListener("submit", function(event) {
    event.preventDefault();

    btn.textContent = "Yuborildi"
    let ism = name.value
    result.textContent = "Salom " + ism
})