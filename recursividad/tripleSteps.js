function tripleStep(n){

    // Caso base
    if (n === 0) return 1

    if (n < 0) return 0

    return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
}
  
console.log(tripleStep(3))