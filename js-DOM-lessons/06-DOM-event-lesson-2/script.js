// let input = document.getElementById("name");

// input.addEventListener("focus", function() {
//     console.log("Input tanlandi !");
// });

// let  input = document.getElementById("name");
// let title = document.getElementById("title");

// input.addEventListener("focus", function() {
//     title.textContent = "Yozishni boshlashing mumkin !";
//     title.classList.add("add_style");
// });

// input.addEventListener("blur", function() {
//     title.textContent = "Inputni tanlang !";
//     title.classList.remove("add_style");
// });

// let input = document.getElementById("name");
// let title = document.getElementById("title");

// input.addEventListener("input", function() {
//     title.textContent = input.value;
// });

// 1 - vazifa 
// let input = document.getElementById("name");
// let title = document.getElementById("status");

// input.addEventListener("focus", function() {
//     title.textContent = "✍️ Yozishni boshlang..."
// });

// input.addEventListener("blur", function() {
//     title.textContent = "😴 Input tanlanmagan"
// });

// 2 - vazifa 
// let input = document.getElementById("naruto")
// let result = document.getElementById("result")

// input.addEventListener("input", function() {
//     result.textContent = input.value
// }); 

// 3 - vazifa 
let input = document.getElementById("name")
let result = document.getElementById("result")

input.addEventListener("focus", function() {
    result.textContent = "Ismingizni yozing..."
});

input.addEventListener("input", function() {
    result.textContent = input.value
});

input.addEventListener("blur", function() {
    result.textContent = "❌ Ism kiritilmadi"
});