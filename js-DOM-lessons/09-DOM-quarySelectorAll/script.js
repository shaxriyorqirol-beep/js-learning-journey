// let title = document.querySelector("#title");
// let btn = document.querySelector("#btn");

// title.addEventListener("mouseover", function() {
//     title.classList.add("somsa")
//     title.textContent = "Assalomu alaykum somsalar bor"
// })

// title.addEventListener("mouseout", function() {
//     title.classList.remove("somsa")
//     title.textContent = "Naruto"
// })

// let kun  = document.querySelectorAll(".kun")
// console.log(kun.length)

// kun.forEach(function(kunElementi) {
//     kunElementi.textContent = "Salom sanse somsa bormi"
// });

// let kun = document.querySelectorAll(".kun");

// kun.forEach(function(somsa) {
//     somsa.classList.add("osh");
//     somsa.textContent = "Bugun dars bor 🍃"
// });

// kun[0].classList.add("kabob")
// kun[0].textContent = "Bugub dars bormi ?"

// let kun = document.querySelectorAll(".kun")
// kun.forEach(function(kunElementi) {
//     kunElementi.style.color = "red"
// })

let kun = document.querySelectorAll(".kun");

kun.forEach(function(kunTartibi) {
    kunTartibi.style.color = "green"
    kunTartibi.textContent = "Bugun dars bor 🍃"
});

kun[1].style.color = "red"
kun[1].textContent = "Bugun dars yo‘q 😴"