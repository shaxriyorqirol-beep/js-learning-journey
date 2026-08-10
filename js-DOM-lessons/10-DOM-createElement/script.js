// let box = document.querySelector("#box");

// let salom = document.createElement("p");
// salom.textContent = "Bu yangi dars 🍃"

// box.append(salom)
// salom.remove()

// let box = document.querySelector("#box")

// let text = document.createElement("p")
// let textOne = document.createElement("p")
// let textTwo = document.createElement("p")

// text.textContent = "Birinchi"
// textOne.textContent = "Ikkinchi"
// textTwo.textContent = "Uchinchi"

// box.append(text)
// box.append(textOne)
// box.append(textTwo)

// let img = document.querySelector("#rasm")

// img.setAttribute("src", "photo.jpg")
// img.setAttribute("alt", "Mening rasmim")
// console.log(img.getAttribute("alt"))

// let link = document.querySelector("#link")

// link.setAttribute("href", "https://google.com")
// console.log(link.getAttribute("href"))

// link.removeAttribute("href")
// console.log(link.getAttribute("href"))

let link = document.querySelector("#link")

link.setAttribute("href", "https://google.com")
link.setAttribute("target", "_blank")

console.log(link.getAttribute("href"))
console.log(link.getAttribute("target"))


link.removeAttribute("target")
console.log(link.getAttribute("target"))

