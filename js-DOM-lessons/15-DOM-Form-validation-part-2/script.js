// let form = document.querySelector("#form")
// let inp = document.querySelector("#inp")

// form.addEventListener("submit", function(event) {
//     event.preventDefault()

//     if (inp.value === "") {
//         console.log("Email kiriting !")
//     } else if (inp.value.length < 4) {
//         console.log("Email kamida 4 ta harifdan iborat bolishi kerak !")
//     } else {
//         console.log("Email kiritildi !")
//     }

//     console.log(inp.value)
// })

let form = document.querySelector("form")
let inp = document.querySelector("#inp")
let result = document.querySelector("#result")


form.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("sumit ishladi")    

    let email = inp.value
    console.log(email)
    console.log(email.indexOf("@") === 0)

    // if (email === "") {
    // result.textContent = "Email kiriting!"
    // } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    // result.textContent = "Email notogri !"
    // } else {
    // result.textContent = "Email togri !"
    // }

    // if (email === "") {
    //     result.textContent = "Email kiriting!"
    // } else if (email.includes("@") && email.includes(".")) {
    //     result.textContent = "Email togri !"
    // } else if (email.indexOf('@') === -1) {
    //     result.textContent = "Emailda @ yoq !"
    // } else {
    //     result.textContent = "Email notogri !"
    // }

    if (email.indexOf("@")  === 0) {
        result.textContent = "notogri email !"
    } else if (email === "") {
        result.textContent = "email kiriting !"
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        result.textContent = "notogri email !"
    } else {
        result.textContent = "togri email !"
    }
    
})