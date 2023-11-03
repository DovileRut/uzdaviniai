/*
Uždavinių sprendimui nenaudoti masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

// let vardas = "Dovilė"
// let pavarde = "Rutkauskaitė"
// let gimimoData = 1996
// let dabartiniaiMetai = 2023

// console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${dabartiniaiMetai - gimimoData} metai.`);


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

// let a = Math.round(Math.random() * 4)
// let b = Math.round(Math.random() * 4)

// let didesnis = (Math.max(a,b));
// let mazesnis = (Math.min(a,b))

// let skaicius = didesnis / mazesnis

// console.log(skaicius.toFixed(2))

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

// let a = Math.round(Math.random() * 25) 
// let b = Math.round(Math.random() * 25)
// let c = Math.round(Math.random() * 25)

// if (a < b && a > c || a < c && a > b) {
//     console.log(`Skaičių ${a}, ${b}, ${c} vidurinė reikšmė yra ${a}`);
// } else if (b > c && b < a || b > a && b < c) {
//     console.log(`Skaičių ${a}, ${b}, ${c} vidurinė reikšmė yra ${b}`);
// } else {
//     console.log(`Skaičių ${a}, ${b}, ${c} vidurinė reikšmė yra ${c}`);
// }


/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

// Bet kurių dviejų kraštinių suma yra didesnė už trečiosios kraštinės ilgį.

// let kr1 = Math.floor((Math.random() * 10) + 1)
// let kr2 = Math.floor((Math.random() * 10) + 1)
// let kr3 = Math.floor((Math.random() * 10) + 1)


// if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
//     console.log(`Iš kraštinių kr1=${kr1}, kr2=${kr2}, kr3=${kr3} galima sudaryti trikampį`);
// } else {
//     console.log(`Trikampio negalima sudaryti iš kraštinių kr1=${kr1}, kr2=${kr2}, kr3=${kr3}`);
// }

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

// let a = Math.round(Math.random() * 2)
// let b = Math.round(Math.random() * 2)
// let c = Math.round(Math.random() * 2)
// let d = Math.round(Math.random() * 2)

// let nulis = 0
// let vienetas = 0
// let dvejetas = 0

// if (a ===0){
//     nulis++
// } else if (a === 1) {
//     vienetas++
// } else {
//     dvejetas++
// }

// if (b ===0){
//     nulis++
// } else if (b === 1) {
//     vienetas++
// } else {
//     dvejetas++
// }

// if (c === 0){
//     nulis++
// } else if (c === 1) {
//     vienetas++
// } else {
//     dvejetas++
// }

// if (d === 0){
//     nulis++
// } else if (d === 1) {
//     vienetas++
// } else {
//     dvejetas++
// }

// console.log(`Skaičiuose ${a},${b},${c},${d} yra ${nulis} nuliai(-is), ${vienetas} vienetai(-as), ${dvejetas} dvejetai(-as).`);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

// let a = Math.floor((Math.random() * (21) - 10))
// let b = Math.floor((Math.random() * (21) - 10))
// let c = Math.floor((Math.random() * (21) - 10))

// if (a < 0) {
//     console.log(`[${a}]`);
// } else if (a === 0) {
//     console.log(`(${a})`);
// }
// else {
//     console.log(`{${a}}`)
// }

// if (b < 0) {
//     console.log(`[${b}]`);
// } else if (b === 0) {
//     console.log(`(${b})`);
// }
// else {
//     console.log(`{${b}}`)
// }

// if (c < 0) {
//     console.log(`[${c}]`);
// } else if (c === 0) {
//     console.log(`(${c})`);
// }
// else {
//     console.log(`{${c}}`)
// }

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

// let zvakiuKaina = 1
// let zvakiuKiekis = Math.floor((Math.random() * (3000 - 5 + 1) + 5))

// if (zvakiuKiekis > 2000) {
//     console.log(`Perkama ${zvakiuKiekis} vnt zvakiu ir ju kaina uz vnt yra ${zvakiuKaina * 0.96} Eur`);
// } else if (zvakiuKiekis > 1000) {
//     console.log(`Perkama ${zvakiuKiekis} vnt zvakiu ir ju kaina uz vnt yra ${zvakiuKaina * 0.97} Eur`);
// } else {
//     console.log(`Perkama ${zvakiuKiekis} vnt zvakiu ir ju kaina uz vnt yra ${zvakiuKaina} Eur`);
// }

/* 08. NEPADARYTAS
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

// let a = Math.round(Math.random() * 100)
// let b = Math.round(Math.random() * 100)
// let c = Math.round(Math.random() * 100)

// let vidurkis = (a + b + c) / 3
// console.log(`Skaičių ${a}, ${b}, ${c} aritmetinis vidurkis yra: ${Math.round(vidurkis)}`)



/* 09. NEPADARYTAS
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
// let valandos = Math.round(Math.random() * 24)
// let minutes = Math.round(Math.random() * 60)
// let sekundes = Math.round(Math.random() * 60)

// let laikrodis = (`${valandos}:${minutes}:${sekundes}`)
// console.log(laikrodis);

// let papildomosSekundes = Math.round(Math.random() * 300)


/* 10. NEPADARYTAS
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

// let a = Math.floor(Math.random() * 9000) + 1000
// let b = Math.floor(Math.random() * 9000) + 1000
// let c = Math.floor(Math.random() * 9000) + 1000
// let d = Math.floor(Math.random() * 9000) + 1000
// let e = Math.floor(Math.random() * 9000) + 1000
// let f = Math.floor(Math.random() * 9000) + 1000

// let skaiciai = a + " " + b + " " + c + " " + d + " " + e + " " + f
// console.log(skaiciai);



