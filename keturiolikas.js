// console.log’e, naudojant ciklą atspausdinti po porą skirtingų 
// atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
// Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose 
// (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, 
// kol kiekviena iš sumų bus daugiau nei 100;
let sk1 = 0;
let sk2 = 1;

while (sk1 <= 100 || sk2 <= 100) {
    sk1 = Math.trunc(Math.random() * 10 + 1);
    sk1 += sk2;
    sk2 = Math.trunc(Math.random() * 10 + 1);
    sk2 += sk1;
    console.log( sk1, sk2);
}


