let form = document.querySelector("#form")
let name = document.querySelector("#name")
let result = document.querySelector("#result")

form.addEventListener("submit", function(event) {
    event.preventDefault()


    if(name.value === "") {
        result.textContent = "Kechirasiz, ism kiritishni unutingiz !"

    } else if (name.value.length < 3) {
        result.textContent = "Kechirasiz ism kamida 3 ta harifdan iborat bolishi kerak !"
    }

    else {
        result.textContent = "Ism qabul qilindi !"
    }
})
