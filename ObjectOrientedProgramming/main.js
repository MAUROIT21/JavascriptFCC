console.log('*******************************************************************')
console.log(document.querySelector('title').textContent)
console.log('*******************************************************************')


//Ejemplo constructor de objetos (francisco y mauro)

function Player(nombre, remera, edad) {
  this.name = nombre;
  this.color = remera;
  this.age = edad;
}

let francisco = new Player('francis','rojoazul', 12)
let mauro = new Player('mauro', 'verde', 34)
console.log(francisco, mauro)

console.log('Soy el constructor (Player): ------ ', Player)
console.log('Soy el prototypo: =>  ', Player.prototype)
console.log('Mauro is prototype of: ?', Player.prototype.isPrototypeOf(mauro))
console.log('Francisco is prototype of: ?', Player.prototype.isPrototypeOf(francisco))

console.log('francisco.constructor: ', francisco.constructor === Player);
console.log('mauro.constructor: ', mauro.constructor === Player);

console.log('mauro.constructor === Object: ', mauro.constructor === Object);
console.log('mauro instanceof Player?: ', mauro instanceof Player);
console.log('francisco instanceof Player?: ', francisco instanceof Player);


console.log('*******************************************************************')
console.log('Remember to Set the Constructor Property when Changing the Prototype')
console.log('*******************************************************************')


Player.prototype = {
    constructor : Player,
    numFamiliars : 5,
    bestFriends : ['Manu', 'Nacho', 'Ivan', 'Milton'],
    amigos: function() {
        console.log(Player.prototype.bestFriends);
    }

}

console.log('Player: ', Player)
console.log('Player.prototype: ', Player.prototype)
//console.log(Player.prototype.amigos())

console.log('*******************************************************************')
console.log('Understand the Prototype Chain')
console.log('All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.')
console.log('*******************************************************************')

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");

  console.log(beagle)
  console.log('typeof Dog: ', typeof Dog)
  console.log('Dog.prototype (es un objeto)', Dog.prototype)
  console.log('Object.prototype: ', Object.prototype)
  console.log('Object.prototype.isPrototypeOf(Dog.prototype): ', Object.prototype.isPrototypeOf(Dog.prototype))


  console.log('*******************************************************************')
  console.log('Inherit Behaviors from a Supertype')
  console.log('*******************************************************************')
  
  function Animal() { }

  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  // Only change code below this line
  
  let duck = Object.create(Animal.prototype); // Otra forma de crear objetos
  let perro = Object.create(Animal.prototype); // Ademas del operador New Animal()

  console.log(duck.eat())



  
console.log('*******************************************************************')
console.log('Reset an Inherited Constructor Property')
console.log('*******************************************************************')
  
//EJEMPLO DE FCC:

function Bird() { }
console.log('Bird.prototype: (pre-definirlo', Bird.prototype)
Bird.prototype = Object.create(Animal.prototype);
console.log('Bird.prototype: (post-definirlo)', Bird.prototype)
let ducky = new Bird();
ducky.name = 'Pio pio'
ducky.age = 45

ducky.constructor = Bird;
console.log(ducky)
console.log(ducky.constructor)

console.log('*******************************************************************')

//EJERCICIO:
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird
Dog.prototype.constructor = Dog


let pato = new Bird();
let perrito = new Dog();
//console.log(duck, beagle)
console.log(pato.constructor, perrito.constructor)

//Los constructores sin hacer esto son los de Animal.

console.log('*******************************************************************')
console.log('Add Methods After Inheritance')
console.log('*******************************************************************')

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function() {
  console.log('Woof!')
};

// Only change code above this line

let elBeagle = new Dog();
elBeagle.name = 'Soy el beagle Rufo'

console.log(elBeagle, elBeagle instanceof Dog, elBeagle instanceof Animal, elBeagle instanceof Bird)
console.log(Dog, Dog.prototype.constructor)

console.log(elBeagle)
console.log(elBeagle.bark())

console.log('*******************************************************************')
console.log('Use a Mixin to Add Common Behavior Between Unrelated Objects')
console.log('*******************************************************************')


/*
As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
*/

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  // console.log(bird)
  // Only change code below this line
  
  let glideMixin = function (obj) {
    obj.glide = function () {
      console.log('I can glide very good!!!')
    }
  }
  
  /* console.log(typeof glideMixin)
  console.log(typeof bird.glide) // Undefined */

  glideMixin(bird)
  
  bird.glide()
/* 
  console.log(bird) // Ahora tiene el metodo agregado glide()
  console.log(typeof bird.glide) */


  console.log('*******************************************************************')
  console.log('Use Closure to Protect Properties Within an Object from Being Modified Externally')
  console.log('*******************************************************************')
  
  function Bird() {
    this.weight = 15; // no es una variable privada, se puede acceder desde afuera
    this.name = 'MAURO'
  
    let altura = 38; // con "let" hago la variable privada, y puedo acceder con la funcion desde afuera.
    this.getAltura = function () {
      return altura;
    }
    this.getNewAltura = function (crecio) {
      return altura + crecio;
    }
  }
  
  let pajarito = new Bird()
  console.log('pajarito: ', pajarito)
  
  console.log('Mi altura es: ', pajarito.altura) // no puede acceder a la propiedad altura
  
  console.log('altura: ', pajarito.getAltura()) // aqui si puede, con una funcion dentro del constructor
  
  console.log('crecio: ', pajarito.getNewAltura(10))
  
  pajarito.weight = 25
  pajarito.name = 'Carlos'
  console.log('pajarito: ', pajarito)


console.log('*******************************************************************')
console.log('Understand the Immediately Invoked Function Expression (IIFE)')
console.log('*******************************************************************')
  
function makeNest() {
  console.log("A cozy nest is ready");  
}
makeNest();

(function () {
  console.log('A cozy nest is ready and autoinvoked!')
})() // Con el parentesis del final se autoinvoca
 

console.log('*******************************************************************')
console.log('Use a IIFE to create a module')
console.log('*******************************************************************')
  
// ASI EMPEZABA EL EJERCICIO CON LAS DOS VARIABLES QUE GUARDABAN LAS FUNCIONES.  
/* let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
 */

// SE PIDE CREAR UN MODULO PARA GUARDAR AMBAS FUNCIONES

let funModule = (function (){
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    }, 
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
}
)(); 

let objeto1 = {
  id: 1,
  nombre: 'Mauro1'
}

let objeto2 = {
  id: 2,
  nombre: 'Pedro1'
}

console.log('Primer objeto: ', objeto1)
console.log('Segundo objeto: ', objeto2)

//Le aplico los metodos del modulo a cada objeto
funModule.isCuteMixin(objeto1)
funModule.singMixin(objeto2)


console.log('Soy el metodo de objeto1: ', objeto1, '||| Nuevo metodo: ', objeto1.isCute())
console.log('Soy el metodo de objeto2: ', objeto2, '||| Nuevo metodo: ', objeto2.sing())


/* 
// Aqui lo mismo pero con ES6, con arrow functions
let funModule = ( () => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => { true; };
    },
    singMixin: (obj) => {
      obj.sing = () => { console.log("Singing to an awesome tune"); }
    }

  }
})(); */