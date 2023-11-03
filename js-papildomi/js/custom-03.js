/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

// for(let i = 0; i < 10; i++) {
//     console.log("Labas");
// }

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

// for(let i = 0; i <= 9; i++) {
//     console.log(i);
// }

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

// for(let i = 10; i <= 50; i += 2) {
//     console.log(i);
// }

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/

// for(let i = 10; i <= 50; i += 2) {
//     if (i % 10 == 0) {
//         continue
//     }
//     console.log(i)
// }

/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

// let porinisSkaicius = 0
// for(let i = 0; i <= 20; i++){
//     if (i % 2 == 0 ) {
//         porinisSkaicius++
//     }
// }
// console.log(porinisSkaicius)


/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

// let atsitiktinis = []
// let didesni = 0

// for (let i= 0; i < 300; i++) {
//     let atsitiktinisSkaicius = Math.round(Math.random() * 300)
//     if (atsitiktinisSkaicius > 275) {
//         atsitiktinis.push(`[${atsitiktinisSkaicius}]`)
//     } else {
//         atsitiktinis.push(atsitiktinisSkaicius)
//     }
//     if(atsitiktinisSkaicius > 150) {
//         didesni++
//     }
// }

// console.log(atsitiktinis.join(" "));
// console.log(`Didesnių nei 150 yra ${didesni}`);

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

// let skaiciai = []
// for (let i = 1; i <= 3000; i++){
//     if(i % 77 === 0) {
//         skaiciai.push(i)
//     }
// }

// console.log(skaiciai.join(", "));

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

// console.log(`* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *`);