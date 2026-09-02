// async function fetchData() {
//     let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.3&longitude=69.3&current_weather=true');

//     let data = await response.json();
//     console.log(data);
// }

// fetchData();

// 1 - vazifa !
// function birinchi() {
//     console.log("A")
// }

// function ikkinchi() {
//     setTimeout(() => {
//         console.log("B")
//     }, 1000)
// }

// function uchinchi() {
//     console.log("C")
// }

// birinchi()
// ikkinchi()
// uchinchi()

// 2 - vazifa !
// function taomTayyorla() {
//     return new Promise((resolve, reject) => {
//         console.log("Taom tayyorlanmoqda...")
        
//         setTimeout(() => {
//             resolve("Osh tayyor!")
//         }, 1000)
//     })
// }

// async function ovqatlan() {
//     console.log("Oshxonaga keldim")
    
//     let natija = await taomTayyorla()
    
//     console.log(natija)
//     console.log("Ovqatlanib bo'ldim")
// }

// ovqatlan()

// 3 - vazifa !
function birinchiIsh() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Birinchi tayyor")
        }, 1000)
    })
}

function ikkinchiIsh() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ikkinchi tayyor")
        }, 1000)
    })
}

async function hammasi() {
    console.log("Boshladik")
    
    let natija1 = await birinchiIsh()
    console.log(natija1)
    
    let natija2 = await ikkinchiIsh()
    console.log(natija2)
    
    console.log("Hammasi tugadi")
}

hammasi()