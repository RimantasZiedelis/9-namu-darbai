// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius 
// nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
// Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

let = sk = 0;

while (sk < 3) {
    randomNum = Math.trunc(Math.random() *10 + 1);
    console.log(randomNum);
    if (randomNum % 2 !== 0) {
        sk++;
    }
}