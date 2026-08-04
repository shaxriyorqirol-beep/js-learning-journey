// console.log('JavaScript ishga tushurildi!');
// console.log("Sahifa ochildi!");
// console.log("Men event kutayabman!");

// let btn = document.getElementById("btn");

// btn.addEventListiner("click", function () {
//     console.log("Button bosildi!");
// });

// 1 - vazifa
let title = document.getElementById("title");
console.log(title.textContent);

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    title.textContent = "Button bosildi!";
});


// 2 - vazifa
let hello = document.getElementById("hello");
console.log(hello.textContent);

let button = document.getElementById("button"); 
button.addEventListener("click", function () {  
    hello.textContent = "assalomu alaykum Hokage 🍃!";
});