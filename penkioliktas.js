// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių
// skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
// Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių
// (skaičiai atskiruose stulpeliuose).

let stulpelis1 = 0;
let stulpelis2 = 0;

while (stulpelis1 <= 3 || stulpelis2 <= 3) {
  let sk1 = Math.trunc(Math.random() * 11);
  let sk2 = Math.trunc(Math.random() * 11);
  
  if (sk1 % 2 !== 0) {
    stulpelis1++;
  }
  if (sk2 % 2 !== 0) {
    stulpelis2++;
    console.log(sk1, sk2);
  }
}

// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius
// nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
// Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

// let = sk1 = 0;
// let = sk2 = 1;

// while (sk1 <= 3 && sk2 <= 3) {
//     randomNum = Math.trunc(Math.random() *10 + 1);
//     console.log(randomNum);
//     if (randomNum % 2 !== 0) {
//         sk1++ && sk2++
//     }
// }
// console.log(sk1,sk2);

// let sk1 = 0;
// let sk2 = 1;

// while (sk1 % 2 !==0 || sk2 % 2 !==0) {
//     sk1 = Math.trunc(Math.random() * 10 + 1);
//     sk1 += sk2;
//     sk2 = Math.trunc(Math.random() * 10 + 1);
//     sk2 += sk1;
//     console.log( sk1, sk2);
// }
