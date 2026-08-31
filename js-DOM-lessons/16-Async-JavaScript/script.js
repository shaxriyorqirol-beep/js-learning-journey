// console.log(1)

// setTimeout(function() {
//     console.log(2)
// }, 2000)

// console.log(3)

// let btn = document.querySelector("#btn")
// let result = document.querySelector("#result")
// let box = document.querySelector("#box")
// let text = document.createElement("p")

// box.append(text)
// btn.addEventListener("click", function(event) {
//     result.textContent = "kod boshlandi !"
//     setTimeout(() => {
//         result.textContent = "Bu matin 1 sonyadan son ekranga uzatildi !"
//     }, 1000);

//     setTimeout(() => {
//         text.textContent = "bu kod tugadi 2 sonya otdi !"
//     }, 2000)
// })

setTimeout(() => {
    console.log("Salom !")
}, 1000)

function salomBer() {
    console.log("Salom !")
}

setTimeout(salomBer, 2000)