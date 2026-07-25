let lastName = "Shaxriyor";
let firstName = "Uzokov";
const age = 18;

if (lastName === "Shaxriyor" && firstName === "Uzokov" && age === 18) {
    console.log("Salom Shaxriyor Uzokov, siz 18 yoshdasiz!");
} else if (lastName === "Shaxriyor" && firstName === "Uzokov") {
    console.log("Salom Shaxriyor Uzokov, siz 18 yoshda emassiz!");
} else if (lastName !== "Shaxriyor") {
    console.log("Kechirasiz, siz Shaxriyor emassiz!");
} else {
    console.log("Kechirasiz, siz Shaxriyor Uzokov emassiz!");
}

let profession = "webdeveloper";

if (profession === "webdeveloper") {
    console.log("Siz web dasturchisiz!");
} else {
    console.log("Siz web dasturchi emassiz!");
}

console.log("Sizning ismingiz: " + firstName + " " + lastName + ", " + age + " yoshdasiz, kasbingiz: " + profession + ".");