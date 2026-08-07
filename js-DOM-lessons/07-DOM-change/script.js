// let input = document.getElementById("name");
// let result = document.getElementById("result")

// input.addEventListener("change", function() {
//     result.textContent = input.value;
// });

let input = document.getElementById("name")
let result = document.getElementById("result")

input.addEventListener("change", function() {
    result.textContent = "Assalomu alaykum " + input.value + " 🍃";
});