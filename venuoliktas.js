// console.log’e, naudojant ciklą atspausdinti atsitiktinius 
// skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
// Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne 
// anksčiau nei po 11 ciklų;

let sk;
let sum = 0;
let count = 0;

while (sum <=20 || count <=10) {
sk = Math.trunc(Math.random() * 11)
    count = count + 1;
    if (sum <=20) {
        sum += sk; 
    }
  console.log(sk);

}
console.log('suma', sum);
console.log(count);