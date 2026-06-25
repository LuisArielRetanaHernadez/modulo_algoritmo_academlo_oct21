//Problema #1 (Fuerza Bruta)
function isUnique(str){
	
  const uniqueStr = [...new Set(str.split(''))];
  return uniqueStr.length === str.length;

}
  //Costo/Complejidad: o(1)
  
  //Problema #1 (Optimizado)
function isUniqueOptimize(str) {
  const hashTable = {};

  for (let i = 0; i < str.length; i++) {

    if (hashTable[str[i]]) {
      return false;
    } else {
      hashTable[str[i]] = true;
    }
  }
  return true;
}
  //Costo/Complejidad: o(n)
 


//Problema #2 (Fuerza Bruta)
function isPermutation(str1, str2){

  if (str1.length !== str2.length) return false;

  const str1Sort = [...str1].sort().join('')
  const str2Sort = [...str2].sort().join('')

  return str1Sort === str2Sort;
}
//Costo/Complejidad: o(n)

//Problema #2 (Optimizado)
function isPermutationOptimize(str1, str2){
  const hashTable = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) { 
    hashTable[str1[i]] = true
  }

  str2.split('').forEach(char => {
    if (!hashTable[char]) return false;  
  })

  return true;
}
//Costo/Complejidad: O(n)

console.log(isPermutation('holoa', 'hoola'));