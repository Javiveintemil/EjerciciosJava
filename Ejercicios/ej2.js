/*---------------------------------------------------------------------------
1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};
---------------------------------------------------------------------------*/
const character = {
  name: "JackSparrow",
  age: "10",
};
const newAge = 25;
character.age = newAge;

console.log(character);

/*---------------------------------------------------------------------------
1.2 Declara 3 variables con los nombres y valores siguientes 
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24; 
Muestralos por consola de esta forma: 
'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
-----------------------------------------------------------------------------*/
var firstName = 'Jon';
var LastName = 'Snow';
var age = 24;
console.log('Soy' + ' ' + firstName + ' ' + LastName + ', tengo ' + age + ' años y me gustan los lobos.');


/*-------------------------------------------------------------------------
1.3 Dado el siguiente código, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rayo mcKing', price: 29};
--------------------------------------------------------------------------*/
const toy1 = {
  name: 'Buss myYear',
  price: 19
};
const toy2 = {
  name: 'Rayo mcKing',
  price: 29
};
var total = toy1.price + toy2.price;
console.log('La suma de ambos juguetes es: ' + total);


/*-------------------------------------------------------------------------
1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
--------------------------------------------------------------------------*/
let globalBasePrice = 10000;

const car1 = {
  name: 'BMW m&m',
  basePrice: 50000,
  finalPrice: 60000
};

const car2 = {
  name: 'Chevrolet Corbina',
  basePrice: 70000,
  finalPrice: 80000
};

var NewGlobalBasePrice = 25000;
var NewPrice1 = car1.finalPrice + NewGlobalBasePrice;
var NewPrice2 = car2.finalPrice + NewGlobalBasePrice;

console.log(NewPrice1)
console.log(NewPrice2)

