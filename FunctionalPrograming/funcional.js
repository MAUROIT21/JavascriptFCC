console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°')
console.log(document.querySelector('title').text)
console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°')


// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); 
// esto es callback?, es de primera clase SI, es de orden superior SI, 
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// PROGRAMACION IMPERATIVA VS PROGRAMCION FUNCIONAL

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    //.join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

  /** 
   * Antes de gmail falta VINE, y luego de gmail falta WORKMAIL.
   finalTabs.tabs, debería estar ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']
   */

console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°')
console.log('')
  
// VERSION FREE CODE CAMP, FUNCIONA SOLO PARA UNA ENTRADA...

/* // The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
console.log('bookList: ', bookList)

// Change code below this line
 function add(arr, bookName) {
    let copiaLista = [...arr]
    copiaLista.push(bookName);
    return copiaLista;
  
  // Change code above this line
}
console.log('Nueva Lista de Books: ', add(bookList, 'Eloquent Javascript'))
console.log('Book list original: ', bookList)


// Change code below this line
function remove(arr, bookName) {
  let copiaLista = [...arr]  
  const book_index = copiaLista.indexOf(bookName);
  if (book_index >= 0) {

    copiaLista.splice(book_index, 1);
    return copiaLista;

    // Change code above this line
    }
}

console.log(remove(bookList, 'The Hound of the Baskervilles'))
console.log('Book Original: ', bookList)
 */



// VERSION MIA, FUNCIONARIA PARA VARIAS ENTRADAS, Y VARIAS BORRADOS SOBRE LA MISMA COPIA DE LISTA EN QUE SE TRABAJA SIN REINICIARLA CADA VEZ
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
console.log('bookList: ', bookList)

let copiaLista = [...bookList]

// Change code below this line
 function add(copiaLista, bookName) {
    copiaLista.push(bookName);
    return copiaLista;
  
  // Change code above this line
}
console.log('Nueva Lista de Books: ', add(copiaLista, 'Eloquent Javascript'))
console.log('Book list original: ', bookList)


// Change code below this line
function remove(copiaLista, bookName) {
  const book_index = copiaLista.indexOf(bookName);
  if (book_index >= 0) {

    copiaLista.splice(book_index, 1);
    return copiaLista;

    // Change code above this line
    }
}

console.log(remove(copiaLista, 'The Hound of the Baskervilles'))
console.log('Book Original: ', bookList)

console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°')
console.log('EL METODO MAP() ')

/**
 El metodo map itera sobre cada elemento de una matriz y devuelve una nueva matriz, que contiene los resultados de llamar a la función de devolución de llamada en cada elemento. Hace esto sin mutar la matriz original.

Cuando se utiliza la devolución de llamada, se pasan tres argumentos:
El primer argumento es el elemento actual que se está procesando. 
El segundo es el índice de ese elemento y 
el tercero es la matriz sobre la que MAP se llamó al método.

*/

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const names = users.map(user => user.name);
  console.log(names);
  
  const ages = users.map(user => user.age);
  console.log(ages);
  
  const ambosDatos = users.map(function (user) {
    return user.name + ' *++* ' + user.age;
  })
  console.log(ambosDatos)
  
  
  // EJERCICIO:
  
  // The global variable
  const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Only change code below this line
  
  let ratings = [];
  /* for (let i = 0; i < watchList.length; i++) {
    ratings.push(
      {title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]}
      );
  } */
  
  
  ratings = watchList.map(function(titulo){
    //return titulo.Title+': '+' tiene ImdbRating: '+titulo.imdbRating+' y cantidad de votos: '+titulo.imdbVotes
    return {title: titulo["Title"],rating: titulo["imdbRating"]}
  })
  /* 
  ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
  }));
   */
  // Only change code above this line
  console.log(ratings)
  console.log(ratings[2].rating);
  console.log('')
  console.log(JSON.stringify(ratings));

/**
 Como ha visto al aplicar Array.prototype.map(), o simplemente map()antes, el mapmétodo devuelve una matriz de la misma longitud que la que se invocó. Tampoco altera la matriz original, siempre que su función de devolución de llamada no lo haga.

En otras palabras, map es una función pura y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.

*/
console.log('**** Mi map() *****')
/**
 You might learn a lot about the map method if you implement your own version of it ==>> 
 Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.
 */
console.log('')
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
 for (let i = 0; i < this.length; i++) {
  //console.log('Soy this[i]: ', this[i]) // es el array s.
  newArray.push(callback(this[i])); //
  }  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2; 
});

console.log(s)
console.log(new_s)

/* 
Solucion 2:
Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Add your code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;
}; 

Solucion 3:
Array.prototype.myMap = function(callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};

*/


// Consigna =  Solo que liste el Title y Rating (> a 8.0)
 
  // Only change code below this line
  
  const listaFiltrada = watchList.filter(
    function (element) {return element.imdbRating >= '8.0'}
    //element => element.imdbRating == '8.0'
    );
  
  // Only change code above this line

  listaFinal = listaFiltrada.map(function(titulo){
    //return titulo.Title+': '+' tiene ImdbRating: '+titulo.imdbRating+' y cantidad de votos: '+titulo.imdbVotes
    return {title: titulo["Title"],rating: titulo["imdbRating"]}
  }) 
  
  console.log('filteredList: ', listaFiltrada);
  console.log('finalList: ', listaFinal)
  console.log(JSON.stringify(listaFinal));
  

  console.log('////////////////////////')
  console.log('Slice of an array')

  function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice)
  
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3))

  console.log('////////////////////////')
  console.log('Solo los 3 primeros sin modificar con splice el array')

  function nonMutatingSplice(cities) {
    // Only change code below this line
    //return cities.splice(3);
    let newArr = [];
    newArr = cities.slice(0, -2)
    return newArr;
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities))

  console.log('////////////////////////')
  console.log('Concat arrays sin modificarlos')

  function nonMutatingConcat(original, attach) {
    // Only change code below this line
    var concatenacion = first.concat(second)
    return concatenacion;
  
    // Only change code above this line
  }
  
  console.log('////////////////////////')
  console.log('Concat arrays sin modificarlos')

  const first = [1, 2, 3];
  const second = [4, 5];
  
  console.log(nonMutatingConcat(first, second))

  console.log('////////////////////////')
  console.log('Concat arrays sin modificarlos')

  function nonMutatingPush(original, newItem) {
    // Only change code below this line
    let concat = original.concat(newItem)
    console.log(original, newItem)
    return concat; 
    //original.push(newItem);
  
    // Only change code above this line
  }
  
  const first1 = [1, 2, 3];
  const second1 = [4, 5];
  
  console.log(nonMutatingPush(first1, second1))

  console.log('////////////////////////')
  console.log('Use the reduce Method to Analyze Data')

/**
+  Array.prototype.reduce(), or simply reduce(), ** is the most general of all array operations in JavaScript **. You can solve almost any array processing problem using the reduce method.
+  The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce. The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.
 */

const misUsuarios = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
console.log('Array misUsuarios: (con 3 objetos)', users)


const sumOfAges = misUsuarios.reduce((sum, user) => sum + user.age, 0);
const sumOfNames = misUsuarios.reduce((sum, user) => sum + user.name + ' ** ', '');
console.log('sumOfAges: ', sumOfAges);
console.log('sumOfNames: ', sumOfNames);

console.log('////////////////////////////////')

const usersObj = misUsuarios.reduce((obj, user) => {
  obj[user.name] = user.age;
  console.log('Soy el parametro obj: ', obj)
  console.log('Soy el parametro user: ', user)
  console.log('obj[user.name]: ', obj[user.name])
  return obj;
}, {});

console.log('usersObj: (resultado del reduce: )', usersObj); // el resultado del reduce
console.log('usersObj[´Amy´]: ', usersObj['Amy']) // 20
console.log('users[0]: ', misUsuarios[0]) // John: 34


console.log('')
console.log('/////////////////////////')
// De la guia de ayuda
function getRating(watchList){
  // Add your code below this line
  const averageRating = watchList
    // Use filter to find films directed by Christopher Nolan 
    .filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers // Convierte a number
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings // Los Acumula
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide by the number of Nolan films to get the average rating // FILTRA PARA TOMAR EL LENGTH DE LOS QUE TIENEN ESE DIRECTOR
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Add your code above this line
  return averageRating;
}
console.log(getRating(watchList));

console.log('')
console.log('Desmenuzado: paso por paso!')
const filtro = watchList.filter(film => film.Director === 'Christopher Nolan')
console.log('filtro: ', filtro);
const mapeo = filtro.map(film => Number(film.imdbRating))
console.log('mapeo: paso a numero el rating: ', mapeo)
const reducidoSuma = mapeo.reduce((sumaDeRating, rating) => sumaDeRating + rating)
console.log('reducidoSuma: ', reducidoSuma)
const cantidadConNolan = watchList.filter(film => film.Director === "Christopher Nolan").length
console.log('cantidad Con Christopher Nolan: ', cantidadConNolan)
const averageFinal = reducidoSuma / cantidadConNolan;
console.log('average Final: ', averageFinal)

// Conclusion del paso a paso: va haciendo un objeto de cada paso y sobre ese va haciendo el resto de los procesos.
console.log('')
console.log('DEVUELVE NUMEROS positivos, enteros y al cuadrado')

const squareList = arr => {
  // Only change code below this line
  let newArr = [];
  newArr = arr
  .filter(value => value >= 0)
  .filter(value => Number.isInteger(value))
  .map(value => value*value )
  return newArr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

console.log('')
console.log('Sort')
/**
 JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
 */

 function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort()
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))

console.log('')
console.log('////////////////////////////////')
console.log('Sin mutar el array original')
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
var nuevo = arr.slice(0)
nuevo.sort(function(a, b) {
    return a-b; // orden ascendente
    //return b-a; //orden descendente
  })
return nuevo;
  // Only change code above this line
}

console.log('Ordenado: (nuevo con slice())', nonMutatingSort(globalArray))
console.log('Original: ', globalArray)

console.log('')
console.log('////////////////////////////////')
console.log('Metodos split y join para trabajar con strings, y regular expresion')

function sentensify(str) {
  // Only change code below this line
let arrWords = str.split(/\W/);
let frase = arrWords.join(" ");
let minuscula = frase.toLower
return frase
  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"))


console.log('')
console.log('////////////////////////////////')
console.log('Apply Functional Programming to Convert Strings to URL Slugs')

// Only change code below this line
function urlSlug(title) {
  return title
  .toLowerCase()
  .trim() // saca espacios iniciales y finales a la frase
  .split(/\s+/) // saca los que se repiten mas de una vez (los guiones)
  .join("-") // les agrega el guion

  }
  // Only change code above this line
  console.log(urlSlug("   A   Mind    Needs Books    Like A    Sword   Needs   A Whetstone   "))

console.log('')
console.log('////////////////////////////////')
console.log('Every method')
/**
 The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.
 */
 const numbers = [1, 5, 8, 0, 10, 11];

 var a = numbers.every(function(currentValue) {
   return currentValue > 10;
 });
 
 console.log(a)
 
 
 function checkPositive(arr) {
   // Only change code below this line
   let n = arr.every(function(value) {
     return value > 0;
   })
 return n
   // Only change code above this line
 }
 
 console.log(checkPositive([1, 2, 3, -4, 5]))
 
 console.log('////////////////////////////////')
 console.log('Some method')
/**
 The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.
 */

 function checkPositive(arr) {
  // Only change code below this line
let k = arr.some(function(value) {
  return value > 0
})
return k;
  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));


console.log('')
console.log('////////////////////////////////')
console.log('Introduction to Currying and Partial Application')
/**
 The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1
 */

 /**
 Introduction to Currying and Partial Application
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
 */

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

//const curried = x => y => x + y // es lo mismo que la anterior declaracion de la funcion


console.log('curried: ', curried(1)(2))
console.log('unCurried: ', unCurried(1,2))

const funcForY = curried(1);
console.log('funcForY(2): ', funcForY(2)); // 3

/*
This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. 
*/
// EL EJERCICIO QUE PASA PARAMETROS Y SUMA LOS 3 CON CURRYNG
function add(x) {
  // Only change code below this line
  return function(y) {
    return function(z) {
      return x+y+z
    }
  }

  // Only change code above this line
}


console.log(add(10)(20)(30));

//Utilizo la function ADD para ir agregando los parametros de cada parte de la funcion en una variable paso a paso

console.log('Por separado en variables ejecuto la funcion ADD: ')
const varx = add(10)
const varz= varx(20)
console.log(varz(30))

console.log('')
console.log('Partial Aplication: ')
/**
 Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:
 */

function impartial(x, y, z) {
  return x + y + z;
}
console.log('Impartial aplication (todo de una): ', impartial(10,1,2))
const partialFn = impartial.bind(this, 1, 2); //Bind = une el 10 a los otros dos parametros (ya estaban pasados estos)
console.log('Partial aplication: ', partialFn(10)); // 13