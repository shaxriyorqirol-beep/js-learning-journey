// let box = document.querySelector("#box")

// box.addEventListener("click", function(event) {
//     console.log("target:", event.target)
//     console.log("currentTarget:", event.currentTarget)

//     console.log(event.target === event.currentTarget)
// })

// let box = document.querySelector("#box")
 
// box.addEventListener("click", function(event) {
//     let bos = event.target.textContent

//     console.log("Sen " + bos + " ni bosding")
// })

let box = document.querySelector("#box")

box.addEventListener("click", function(event) {
    event.target.textContent = "Bosildi"
})