// const one = [1,2,3]
// const two = []
// const three = []

// const n = 2**one.length - 1
// const recursiva = (o, a, d, n, x) => {

//     if (n === 0) {
//         return
//     }


//     if (x%2 ===0) {

        

//         return recursiva(o, a, d, n, x)
//     }
    
// }

// recursiva(one, two, three, n, one.length )

let tower1 =[], tower2 = [], tower3 = [];
let n = 4; // Numero de discos

// Coloca en orden n discos en tower1
initTowers();
show(); // Estado inicial de las torres
hanoi(n, tower1, tower2, tower3);
show(); // Estado final de las torres

function hanoi(n, ori, aux, des) {
 // El caso base es mover 1 disco de ori a des
 if(n === 1) 
  mov(ori, des);
 else {
  // Se mueven n-1 discos de ori a aux
  hanoi(n - 1, ori, des, aux);
  mov(ori, des);
  // Se mueven n-1 discos de aux a des
  hanoi(n - 1, aux, ori, des);
 }
}
// Se mueve un disco de la torre ori a des
function mov(ori, des) { 
 des.push(ori.pop()); 
}
function initTowers() {
 for(var i = 1; i < n+1; i++) 
  tower1.push(i);
}
function show() {
 console.log(tower1);
 console.log(tower2);
 console.log(tower3);
 console.log();
}
