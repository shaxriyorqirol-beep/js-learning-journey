let form = document.querySelector("#form")
let inp = document.querySelector("#inp")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    if (inp.value === "") {
        console.log("Email kiriting !")
    } else if (inp.value.length < 4) {
        console.log("Email kamida 4 ta harifdan iborat bolishi kerak !")
    } else {
        console.log("Email kiritildi !")
    }

    console.log(inp.value)
})