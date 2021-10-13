// // console.log’e, naudojant ciklą atspausdinti atsitiktinius 
// skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
// Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;


let sk;
let sum = 0;

while (sum <100) {
sk = Math.trunc(Math.random() * 11)
  console.log(sk);
  sum += sk;
}
console.log('suma ', sum);