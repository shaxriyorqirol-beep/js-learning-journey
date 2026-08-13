// let box = document.querySelector("#box")

// box.addEventListener("click", function(event) {
//     event.target.textContent = "Bosildi"
// })

// let box = document.querySelector("#box")

// box.addEventListener("click", function(event) {
//     if (event.target.tagName === "BUTTON") {
//         event.target.textContent = "Bosildi"

//     } else if (event.target.tagName === "H2") {
//         event.target.textContent = "Bu sarlavha"
//     } 
// })

// let box = document.querySelector("#box")

// box.addEventListener("click", function(event) {
//     if (event.target.matches("button")) {
//         event.target.textContent = "Bosildi"
        
//     } else if (event.target.matches(".title")) {
//         event.target.textContent = "Bu sarlavha"
//     } 
// })

// let box = document.querySelector("#box")

// box.addEventListener("click", function(event) {
//     let button = event.target.closest(".delete")

//     if (button) {
//         button.textContent = "O'chrildi"
//     }

// })

let box = document.querySelector("#box")

box.addEventListener("click", function(event) {
    let qiymat = event.target.textContent

    event.target.textContent = "Sen " + qiymat + "ni bosding"
})