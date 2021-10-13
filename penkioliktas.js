// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių 
// skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
// Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  
// (skaičiai atskiruose stulpeliuose).

let array = [];
let sk1 = 0;
let sk2 = 1;

while (array.length <= 3) {
    sk1 = Math.trunc(Math.random() * 11);
    sk2 = Math.trunc(Math.random() * 11);
    console.log(sk1, sk2);  
        
        
        if (sk1 % 2 !== 0 ) {
            array.push(sk1);
        } else if (sk2 % 2 !== 0) {
            array.push(sk2);
        }
    }
console.log(array);
