// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių 
// skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, 
// kol neiškris abu vienodi skaičiai;

let sk1 = 0;
let sk2 = 1;

while (sk1 !== sk2) {
    sk1 = Math.trunc(Math.random() * 10 + 1);
    sk2 = Math.trunc(Math.random() * 10 + 1);
    console.log(sk1, sk2);
} 

