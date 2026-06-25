// function staircase (n) {
//   // Write your code here

//   let stairca = ''

//   for (let i = n; i > 0; i--) {
//     const arrStrs = []

//     for (let j = 1; j < (n + 1); j++) {
//       arrStrs.push(j >= i ? '#' : ' ')
//     }
//     stairca += arrStrs.join('') + '\n'
//   }
//   return stairca
// }

// function staircase (n) {
//   // Write your code here

//   let stairca = ''

//   for (let i = 1; i < (n + 1); i++) {
//     for (let j = 1; j < (n + 1); j++) {
//       stairca += (j <= i ? '#' : ' ')
//     }
//     stairca += '\n'
//   }
//   return stairca
// }

function staircase (n) {
  // Write your code here

  let stairca = ''

  for (let i = n; i > 0; i--) {
    for (let j = 1; j < (n + 1); j++) {
      stairca += (j >= i ? '#' : ' ')
    }
    stairca += '\n'
  }
  return stairca
}

console.log(staircase(96))
