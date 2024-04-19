/*Valores únicos: Crea una función que reciba por parámetro un array y
compruebe si existen elementos duplicados, en caso que existan los elimina
para retornar un array sin los elementos duplicados. Puedes usar este array
PISTA: (cuando eliminamos algo de un array, su longitud se verá afectada)
para probar tu función:*/

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    const primerPuntero = param[i];
    for (let j = 0; j < param.length; j++) {
      const segundoPuntero = param[j];
      if (primerPuntero === segundoPuntero) {
        param.splice(j, 1);
        j--;
      }
    }
  }
  console.log(param);
}
removeDuplicates(duplicates)