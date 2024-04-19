/*Buscar la palabra más larga.
Completa la función que tomando un array de strings como argumento devuelva
el más largo, en caso de que dos strings tenga la misma longitud deberá
devolver el primero.*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {
  let longestWord = avengers[0]; // Inicializamos con la primera palabra del array

  for (let i = 1; i < avengers.length; i++) {
    if (avengers[i].length > longestWord.length) {
      longestWord = avengers[i];
    }
  }

  return longestWord;
}

// Ejemplo de uso
const longestAvenger = findLongestWord(avengers);
console.log("La palabra más larga es:", longestAvenger);