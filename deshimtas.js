// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius 
// nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas 
// skaičius turi būti 5 arba 7; 
// Suskaičiuoti kiek ciklų prasisuko;

// return Math.floor(Math.random() * 10)
let sk = 0; 
let random = 0;
 while (random !==5 && random !==7) {
    sk = sk + 1; 
    random = Math.floor(Math.random() * 10);

    console.log(random)
    
}
console.log(sk);

// var arr = [];
// for (var i = 0; i < 5; i++)
// {
//   arr.push(Math.floor(Math.random() * 10) + 1)
// }
