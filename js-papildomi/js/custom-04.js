/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

// let augalai = ["kiaulpienė", "ramunė", "kaktusas", "rožė", "tulpė", "lelija", "obelis", "neužmirštuolė", "papartis", "pienė"]

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/

// for(let i = 0; i < augalai.length; i++) {
//     console.log(augalai[i]);
// }

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

// let paskutinis = augalai.length -1
// for(let i = paskutinis; i >= 0; i--) {
//     console.log(augalai[i]);
// }

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

// let trumpesni = 0
// let ilgesni = 0
// for (let i = 0; i < augalai.length; i++) {
//     if (augalai[i].length < 5) {
//         trumpesni++
//     } else if (augalai[i].length > 7) {
//         ilgesni++
//     }
// }

// console.log(`Trumpesnių nei 5 simboliai žodžių yra ${trumpesni}, o ilgesnių nei 7 simboliai žodžių yra ${ilgesni}`);
