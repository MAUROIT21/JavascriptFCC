console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log(document.querySelector('title').textContent)
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')

function sumAll(arr) {
    //let [small, big] = arr.sort((a,b) => a-b)
    let [small, big] = arr
    
    //Invierto los valores si big es menor que small
    if (small > big) { [small, big] = [big, small] }
  
  console.log(arr.sort((a,b) => a-b))
  
  let result = 0
    // sumo con un for
    for (let i = small; i<= big; i++) {
      result += i; 
    // console.log('result: ', result, 'i: ', i)
    }
    
    return result;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([4, 1]));
  console.log(sumAll([5, 10]));
  console.log(sumAll([10, 15]));
   
  //console.log(sumAll([10, 15, 1, 3, 11, 200]));
  
  console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
  console.log('')

  function diffArray(arr1, arr2) {
/*     const diffArr = [];
  
    let newArr = [];
    newArr = arr1.concat(arr2)
    console.log(newArr);
    
    // Recorre los dos arrays para cada elemento:
  
   for (let member of newArr) {
    const isInArr1 = arr1.indexOf(member) !== 1;
    const isInArr2 = arr2.indexOf(member) !== 1;
  // 1.arr1 = 0, true y 1.arr2 = 0, true : true : !true : false => false no pushea.
  // 4.arr1 = -1, false y 4.arr2 = 3, true : false : !false : true => true lo pushea.
  
    if (!(isInArr1 && isInArr2)) {
      diffArr.push(member)
    }
   }
   return diffArr; */
   console.log(arr1.concat(arr2));
/* console.log('Chequeo que cada elemento de arr1 este en arr2: ')
for (let i = 0; i <= arr1.length; i++) {
  console.log('arr2.includes(arr1[i]): ', i , ' --- ', arr2.includes(arr1[i]));

} */
  
  
  const filteredArr1 = arr1.filter(elem => !arr2.includes(elem));
  console.log('filteredArr1: ', filteredArr1);
  const filteredArr2 = arr2.filter(elem => !arr1.includes(elem));
  console.log('filteredArr2: ', filteredArr2);

  return 'Resultado de la funcion: ' + filteredArr1.concat(filteredArr2) + ' == >> NO ESTAN EN AMBOS ARRAYS'
  }
  
  console.log(diffArray([1, 2, 3, 5, 100, 101], [1, 2, 3, 4, 5, 8, 10]))
  //console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))



  console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
  console.log('Seek and Destroy')

  // 1) Con filter
  console.log('Con .FILTER() ')

  function destroyer(_arr) {

    /* console.log('arguments: ', arguments)
    console.log(arguments[0], arguments[1], arguments[2], arguments[3])
    console.log('Object.values(arguments): ', Object.values(arguments))
     */
    
    const [values, ...targets] = Object.values(arguments);
    //const datos = [values, ...targets]
    console.log('datos: ', [values, ...targets])
    console.log(targets.indexOf(0) === -1)
    

    fin = values.filter(member => {
      return targets.indexOf(member) === -1;
    })
    //console.log('values: ', values) // permanece igual luego del .filter
    
    return fin;
    
    }
    
    console.log(destroyer([1, 2, 3, 1, 2, 3, 14, 1, 10, 100], 2, 3, 12, 14))

// 2) CON INCLUDES
console.log('Con .INCLUDES() ')
function destructor (_arr) {
const [values, ...targets] = Object.values(arguments);

console.log(!targets.includes(_arr[4])) // No lo incluye en el resultado del .include (gracias a usar el operador -not- !)

  return values.filter(member => {
    return !targets.includes(member)
  })
}

console.log(destructor([40,50,60,100,200], 100, 200))


console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('Wherefore art thou')

function whatIsInAName(collection, source) {
  const arr = [];
  
  // Only change code below this line

  // recorrer la coleccion de objetos 
for (let obj of collection) {
  // si la fuente clave:valor esta presente en el objeto 
  // recorrer a traves de props de source, asegurandose que matchea el in obj

// declare variable for obj matching source, boolean
let matching = true;

for (let prop in source) {
  // if source[prop] is not equals to obj[prop], seteo matching to false.
  if (obj[prop] !== source[prop]) {matching = false}
}

  // agregar el objeto al arr[]
if (matching) {arr.push(obj)}

}

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))

console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}))

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('SPINAL TAP CASE')

function spinalCase(str) {
  return str
  .split(/\W|_|(?=[A-Z])/)
  .join('-')
  .toLowerCase()
}

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("AllThe-small Things"))


console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('Pig Latin - Conversion words with rules')
console.log('********************************************')

/**
 Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas. En JavaScript, las expresiones regulares también son objetos. Estos patrones se utilizan con los métodos exec() y test() de RegExp, y con match(), matchAll(), replace(), replaceAll() (en-US), search() y split() métodos de String.
 */

function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi; //g busca todas las coincidencias, i no distingue mayus
  console.log('La palabra a convertir es: ', str)

  // Check if the first character is a vowel
  console.log('str[0].match(regex): ', str[0].match(regex))
  console.log('str.match(regex)', str.match(regex))
  console.log('vowelIndice: ', vowelIndice)

  if (str[0].match(regex)) { // la primer letra es una vocal?
    pigLatin = str + "way";
  } else if (str.match(regex) === null) { // hay una vocal?
    // Check if the string contains only consonants
    pigLatin = str + "ay";
    //console.log(pigLatin)
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    console.log('vowelIndice: ', vowelIndice)

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    //str.substr => El método substr() devuelve los caracteres de una cadena que comienzan en una localización especificada y de acuerdo al número de caracteres que se especifiquen.
    //cadena.substr(inicio[, longitud])

    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

// test here
console.log(translatePigLatin("consonant"))
console.log('----++++----++++----++++----++++')

console.log(translatePigLatin("Mauro123"))
console.log('----++++----++++----++++----++++')

console.log(translatePigLatin("AEIOU"))
console.log('----++++----++++----++++----++++')

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('     Replace words - Con mayuscula o minuscula: ')
console.log('********************************************')

/* 
const p = 'my word is this'
console.log(p)
console.log(p.charAt(0).toLowerCase() + p.slice(1).toUpperCase()) 

let p = 'El Dog fue mi amigo, pero ahora se fue'
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret')); 

*/

function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}


// test here
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));


console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('     DNA PAIRING ')
console.log('********************************************')


function pairElement(str) {
  console.log('STR a procesar en pares: ', str)
  let arrFinal = [];
  
  for (let letter of str) {
    var letra = '';
    if (letter == 'G') {letra = 'C'} else 
    if (letter == 'C') {letra = 'G'} else
    if (letter == 'A') {letra = 'T'} else {letra = 'A'}

    let arrInsert = [letter, letra]
    arrFinal.push(arrInsert)
  }

  return arrFinal;
}

console.log(pairElement("GCGATTA"))

function elementosPares(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

//test here
console.log(elementosPares("GCG"))

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('     Missing letters   ')
console.log('********************************************')
// Encontrar la letra que falta del abecedario y devolverla
// Si estan todas retorna undefined


function fearNotLetter(str) {
  console.log('str: ', str)
  
  // Una manera de traer los codigos de las letras
  let letras = [];
  for (let letter in str) {
    letras.push(str.charCodeAt(letter))
  }
  console.log(letras)

  // Otra manera:
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);
    //console.log('Letra ', str[i], '- codigo: ', code)

    console.log('letra del codigo: ', code, 'es: ', String.fromCharCode(code - 1));

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1); // devuelve la letra que falta
    }
  }
 
  return undefined;
}
// 97 !== 97 + 0 : false : 
// 98 !== 97 + 1 : false 
// 99 !== 97 + 2 : false
// 101 !== 97 + 3: true = > devuelve la letra "d"

console.log(fearNotLetter("abce")); // 97, 98, 99, 101

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('     Union ordenada   ')
console.log('********************************************')
// Crear una nueva matriz con todas las de los argumentos y que no se repitan los valores.

function uniteUnique(arr1, arr2, arr3) {
  console.log('LOS INPUTS SON: ', arguments)
  // Creates an empty array to store our final result.
  const finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];
    console.log('i: ', i)
    console.log(arguments[i]);

    // Loops through the array at hand
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];
      console.log('indexValue: ', indexValue)

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        console.log('El valor ', indexValue, ' no estaba! lo metemos... ')
        finalArray.push(indexValue);
      } else {console.log(indexValue, ' ==>> NO ENTRA, YA ESTABA! ')}
    }
  }

  return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

console.log('********************************************')
console.log('Segunda forma de resolucion (con includes())')

function uniteUnique2(arr) {
  const args = [...arguments];
  const result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));

console.log('********************************************')
console.log('Tercera forma de resolucion (Con set y flat())')
/*
El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
 */

/* var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3)
console.log('arr3.flat(): ', arr3.flat())
console.log('arr3.flat(1): ', arr3.flat(1))
console.log('arr3.flat(2): ', arr3.flat(2))
console.log('arr3.flat(3): ', arr3.flat(3)) */


function uniteUnique3(...arr) {
  return [...new Set(arr.flat())];
}
console.log(uniteUnique3([1, 3, 2], [5, 2, 1, 4], [2, 1]));

console.log('********************************************')
console.log('Cuarta forma de resolucion (filter() y flat())')

function uniteUnique4() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

console.log(uniteUnique4([1, 3, 2], [5, 2, 1, 4], [2, 1]))

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('     Convert HTML Entities    ')
console.log('********************************************')
/**
 Some characters are reserved in HTML.

If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.

=> Character entities are used to display reserved characters in HTML.
 */

function convertHTML(str) {
  // Split by character to avoid problems.
console.log('El str de input es: ', str)
  var temp = str.split("");
  console.log(temp)
  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }
  console.log('El temp procesado: ', temp)
  temp = temp.join("");
  return temp;
}

//test here
console.log(convertHTML("Dolce & Gabbana"))

/* 
// Solucion con replace y regExp
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana"); 

// Solucion con map
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");

*/

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('     Sum All Odd Fibonacci Numbers        ')
console.log('********************************************')

// Fibonacci: (0,1)+,1,2,3,5,8,13,21...
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
console.log(sumFibs(1000))


/**
function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);
 */

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('           Sum All Primes                 ')
console.log('******************************************')

function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) { 
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

console.log(sumPrimes(10))

console.log(Math.sqrt(10)) //3.1622776601683795

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('         Minimo Comun Multiplo            ')
console.log('******************************************')

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1, 5]))

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('            Drop elements                 ')
console.log('******************************************')

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) { // Siempre sera el primer elemento del array el evaluado en la funcion porque por cada iteracion borra el anterior (que era el primero)
    arr.shift();
  }
  return arr;
}
let numbers = [1,2,3,4,5]
let droping = function(n) { return n > 2 }

console.log('droping(10): ', droping(10)) // devuelve true: es mayor que 2

// test here
console.log(dropElements(numbers, droping))

// function(n) { return n > 2; }
// (n) => n > 2


console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('             SteamRoller                  ')
console.log('******************************************')

function steamrollArray(valores, flatArr = []) {
  console.log('Original arr: ', valores)
  valores.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

console.log('Output: ', steamrollArray([1, [2], [3, [[4]]]]))
console.log('Output: ', steamrollArray([1, {}, [3, [[4]]]]))
console.log('Output: ', steamrollArray([[["a"]], [["b"]]]))

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('             Binary Agents                ')
console.log('******************************************')

function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

// test here
console.log(binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
));

console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('             Every be true                ')
console.log('******************************************')

//Solucion 1
function truthCheck(collection, pre) {
//consigna: retornar true o false!

console.log('Propiedad a evaluar si es Thruty: ', pre)
let flag = false;
  collection.forEach(element => {
    //console.log(element, 'valor a evaluar: ', element[pre])
    //if (!!element[pre]) {console.log(`${pre} es True`)} else console.log(`${pre} es False`)
    //if (!!element[pre]) {console.log(true)} else {console.log(false)}; 
    if (!!element[pre]) {flag = true} else {flag = false}
  
  });

  return flag;
} 

//Solucion 2

/* function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
  
}
 */
//Solucion 3

/* function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
} */

console.log(truthCheck(
  [
    {name: "Pikachu", number: 25, caught: 3}, 
    {name: "Togepi", number: 175, caught: 1}, 
    {name: "MissingNo", number: NaN, caught: 0}
  ], "name"))


console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('             Arguments Optional           ')
console.log('******************************************')

function addTogether() {

  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (second === undefined)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
} 

/* 
function addTogether() {
  const [first, second] = arguments;
  // First argument is not a number
  if (typeof(first) !== "number") {
    return undefined;
  }
  // First argument is a number
  //  and second argument is not defined
  else if (second === undefined) {
    function addSecond(second) {
      // New argument is not a number
      if (typeof(second) !== "number") {
        return undefined;
      }
      // New argument is a number
      else {
        return first + second;
      }
    }
    // Note: returning a *function*
    return addSecond;
  }
  // First argument is a number
  //  and second argument is not a number
  else if (typeof(second) !== "number") {
    return undefined;
  }
  // First argument is a number
  //  and second argument is a number
  else {
    return first + second;
  }
}
 */
console.log(addTogether(2,3))
console.log(addTogether(2))
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
console.log(addTogether(2, "3"))


console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('             Make A Person                ')
console.log('******************************************')

const Person = function(firstAndLast) {
  // Only change code below this line
  let fullName = firstAndLast;
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(' ')[1] + ' ' + fullName.split(' ')[2] // Habria que mejorar en funcion del nombre cantidad de nombres, y cantidad de apellidos.
  }
  this.setFirstName = function(name) {
    fullName = name + ' ' + fullName.split(' ')[1]
  }
  this.setLastName = function(last) {
    fullName = fullName.split(' ')[0] + ' ' + last
  }
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  }

  return fullName;
};

const bob = new Person('Bob White Ross');
console.log('Hola soy: ', bob)

console.log('Hola originalmente soy: ', bob.getFullName())
console.log(bob.getFirstName())
console.log(bob.getLastName())
console.log(bob.setFirstName('Robertoo'))
console.log(bob.setLastName('Gonzalez'))
console.log(bob.setFullName('Max Verstappen'))

console.log('Hola ahora soy: ', bob.getFullName())


console.log('')
console.log('<=><=><=><=><=><=><=><=><=><=><=><=><=><=>')
console.log('             Map the Debris               ')
console.log('******************************************')

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  /* console.log('arr: ', arr)
console.log('obj: ', obj) */
  
const getOrbPeriod = function(obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}


  // SOLUCION 2
  /* function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const newArr = [];
  
    //Looping through each key in arr object
    for (let elem in arr) {
      //Rounding off the orbital period value
      const orbitalPer = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
      );
      //Adding new object with orbitalPeriod property
      newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]); */

  //SOLUCION 3
 /*  function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    // Create new array to prevent modification of the original
    const newArr = JSON.parse(JSON.stringify(arr));
    // Loop through each item in the array arr
    newArr.forEach(function(item) {
      // Calculate the Orbital period value
      const tmp = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
      );
      //Delete the avgAlt property
      delete item.avgAlt;
      //Add orbitalPeriod property
      item.orbitalPeriod = tmp;
    });
  
    return newArr;
  }
 */

  //SOLUCION 4
  /* function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
      const earth = earthRadius + avgAlt;
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
      return { name, orbitalPeriod };
    });
  } */


// test here
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))

console.log(orbitalPeriod([
  { name: "Marte", avgAlt: 48158.1115 },
  { name: "Un satelite Ruso", avgAlt: 12345.488 },
  { name: "Otro satelite Chino", avgAlt: 14345.488 }]))


  // SOLUCION 2
  /* function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const newArr = [];
  
    //Looping through each key in arr object
    for (let elem in arr) {
      //Rounding off the orbital period value
      const orbitalPer = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
      );
      //Adding new object with orbitalPeriod property
      newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]); */

  //SOLUCION 3
 /*  function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    // Create new array to prevent modification of the original
    const newArr = JSON.parse(JSON.stringify(arr));
    // Loop through each item in the array arr
    newArr.forEach(function(item) {
      // Calculate the Orbital period value
      const tmp = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
      );
      //Delete the avgAlt property
      delete item.avgAlt;
      //Add orbitalPeriod property
      item.orbitalPeriod = tmp;
    });
  
    return newArr;
  }
 */

  //SOLUCION 4
  /* function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
      const earth = earthRadius + avgAlt;
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
      return { name, orbitalPeriod };
    });
  } */