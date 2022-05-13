console.log('######################################')
console.log(document.querySelector('title').textContent)
console.log('######################################')

console.log('******************************')
console.log('Checker Palindromo')
console.log('******************************')
console.log('')

function soloAlfaNumerico (str) {
    //console.log('str original: ', str)
    return str.replace(/[^a-z0-9]/gi, '') //
}

function strLowerCase (str) {
    //console.log('str original: ', str)
    return str.toLowerCase()
}

function strAlReverso (str) {
    //console.log('str original: ', str)
    let strSeparado = str.split('')
    let alreves = strSeparado.reverse()
    //console.log(strSeparado)
    let strProcesado = alreves.join('')

    return strProcesado;

}

function palindrome (str) {
    console.log('str original: ', str)
    const strLimpio = soloAlfaNumerico(str)
    const lowerCaseStr = strLowerCase(strLimpio)
    console.log(lowerCaseStr)
    const strReverso = strAlReverso(lowerCaseStr)
    console.log(strReverso)
    //if(lowerCaseStr === strReverso) {return 'Es palindromo!'} else {return 'No es Palindromo!'}
    
    return lowerCaseStr === strReverso;
}


console.log('Funcion Palindromo: ')
console.log(palindrome('eye'))
console.log(palindrome('Allí ves Sevilla'))
console.log('')


console.log('******************************')
console.log('   Roman Numeral Converter')
console.log('******************************')
console.log('')
//Regla nemotecnica: "MeDiCaL XaViEr"
/**
 M: 1000
 D: 500
 C: 100
 L: 50
 X: 10
 V: 5
 I: 1
 */


/* function convertToRoman(num) {
    console.log('Numero ingresado: ', num)
    return num;
   }
   
   console.log(convertToRoman(36))
 */
function convertToRoman(num) {
/* 
Main IDea
convert num to str 
convert each str char to it's corresponding Roman number considering it's order 
join the result 
*/ 
var str ='';
str += num;

//pruebas
console.log(str, ': ', typeof(str))
/* console.log(str[str.length-1])
console.log(str.length-1)
 */

var result = [];
var res1 = '';
var res2 = '';
var res3 = '';
var res4 = '';
if (str.length == 0){
result = [];
}else if (str.length > 0){
    switch (str[str.length-1]){
    case "1" :
    res1 = "I";
    break;
    case "2" :
    res1 = "II";
    break;
    case "3" :
    res1 = "III";
    break;
    case "4" :
    res1 = "IV";
    break;
    case "5" :
    res1 = "V";
    break;
    case "6" :
    res1 = "VI";
    break;
    case "7" :
    res1 = "VII";
    break;
    case "8" :
    res1 = "VIII";
    break;
    case "9" :
    res1 = "IX";
    break;
    
}
    switch (str[str.length-2]){
        
    case "1" :
    res2 = "X";
    break;
    case "2" :
    res2 = "XX";
    break;
    case "3" :
    res2 = "XXX";
    break;
    case "4" :
    res2 = "XL";
    break;
    case "5" :
    res2 = "L";
    break;
    case "6" :
    res2 = "LX";
    break;
    case "7" :
    res2 = "LXX";
    break;
    case "8" :
    res2 = "LXXX";
    break;
    case "9" :
    res2 = "XC";
    break;
    }
    switch (str[str.length-3]){
        
    case "1" :
    res3 = "C";
    break;
    case "2" :
    res3 = "CC";
    break;
    case "3" :
    res3 = "CCC";
    break;
    case "4" :
    res3 = "CD";
    break;
    case "5" :
    res3 = "D";
    break;
    case "6" :
    res3 = "DC";
    break;
    case "7" :
    res3 = "DCC";
    break;
    case "8" :
    res3 = "DCCC";
    break;
    case "9" :
    res3 = "CM";
    break;
    }
    switch (str[str.length-4]){
        
    case "1" :
    res4 = "M";
    break;
    case "2" :
    res4 = "MM";
    break;
    case "3" :
    res4 = "MMM";
    break;
    case "4" :
    res4 = "MMMM";
    break;
    case "5" :
    res4 = "MMMMM";
    break;
    case "6" :
    res4 = "MMMMMM";
    break;
    case "7" :
    res4 = "MMMMMMM";
    break;
    case "8" :
    res4 = "MMMMMMMM";
    break;
    case "9":
    res4 = "MMMMMMMMM"
    }
}
result.push(res4,res3,res2,res1);
console.log('Numero ingresado: ', num)
return result.join("");
}

console.log(convertToRoman(69999))


//Solucion 2
function convertToRoman2(num) {
	
	var arabicToRoman = {1: "I", 2: "II", 3: "III",  4 : "IV", 5: "V", 6: "VI", 7 : "VII", 8 : "VIII", 9 : "IX", 
10 : "X", 20 : "XX", 30 : "XXX", 40 : "XL", 50 : "L", 60 : "LX", 70 : "LXX", 80 : "LXXX", 90 : "XC", 
100 : "C", 200 : "CC", 300 : "CCC", 400 : "CD", 500 : "D", 600 : "DC", 700 : "DCC", 800 : "DCCC", 900 : "CM", 
1000: "M", 2000: "MM", 3000: "MMM"};

  var digits = String(+num).split(""); //array with digits
  console.log(digits)
  var result = ''; //empty result initialized
  for(var i =0; i <digits.length; i++){
    var lookupKey = digits[i]*Math.pow(10,digits.length-i-1); //find the key of the current index value multiplied by power of 10^i  
    if(arabicToRoman[lookupKey]){
      result +=  arabicToRoman[lookupKey];
      console.log(i, ': ', result)
    }    
  }
  return result;    
    
}

console.log(convertToRoman2(169999))

console.log('')
// Solucion 3
function convertidorRomano (num) {
    let result = '';

    console.log('CONVERTIDOR DE NUMEROS ROMANOS: ');
    console.log('Numero a convertir: ', num)
    
    
    // Ciclos while
    while (num >= 1000) {
        result += 'M'
        num -= 1000;
    }
    while (num >= 900) {
        result += 'CM'
        num -= 900;
    }
    while (num >= 500) {
        result += 'D'
        num -= 500;
    }
    while (num >= 400) {
        result += 'CD'
        num -= 400;
    }
    while (num >= 100) {
        result += 'C'
        num -= 100;
    }
    while (num >= 90) {
        result += 'XC'
        num -= 90;
    }
    while (num >= 50) {
        result += 'L'
        num -= 50;
    }
    while (num >= 40) {
        result += 'XL'
        num -= 40;
    }
    while (num >= 10) {
        result += 'X'
        num -= 10;
    }
    while (num >= 9) {
        result += 'IX'
        num -= 9;
    }
    while (num >= 5) {
        result += 'V'
        num -= 5;
    }
    while (num >= 4) {
        result += 'IV'
        num -= 4;
    } 
    while (num >= 1) {
        result += 'I'
        num -= 1;
    }


    return result;
}

console.log(convertidorRomano(1200))

console.log('******************************')
console.log('        Caesars Cipher        ')
console.log('******************************')
console.log('')
/**
 ROT13 ("rotate by 13 places") is a simple letter substitution cipher.
  Input: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
 Output: NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm
 */

let rotTrece = {
    A: 'N',
    B: 'O', 
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S', 
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W', 
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A', 
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E', 
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I', 
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M', 
    ' ': ' ', 
    '.':'.',
    '!':'!',
    '?':'?'    
}
console.log(rotTrece)
// Para una sola letra
function rotterOne (str) {
    return rotTrece[str]
}
console.log(rotterOne('X')) // N



// Para palabras
function rotterWord(arrLetras) {
    // cada letra del array la evaluo en el rot13 (con la funcion rotterOne)
    
    /* // Con for y array 
    let roteada = [];
    for (let i = 0; i < arrLetras.length; i++) {
        roteada.push(rotterOne(arrLetras[i]))
    } */
    
    // Con str, for y concatenacion de letras:
    let roteada = '';
    for (let i = 0; i < arrLetras.length; i++) {
        // Evaluo cada caracter para ver si es afanumerico?
        roteada += rotterOne(arrLetras[i])
    }

    return roteada;
}

function rot13 (str) {
    console.log('Expresion a convertir (ROT13): ', str)
    //Lo coloco en mayuscula.
    let strMayus = str.toUpperCase();
    //Separo el str en un array por letras.
    let splitted = strMayus.split('')
    console.log('splitted: ', splitted)
    // Cada letra de splitted se evalua en rotterWord
    let conversion = rotterWord(splitted)
    
    return conversion;
}



console.log(rot13('HOLA mundo que tal'))
console.log(rot13("SERR PBQR PNZC"))// should decode to the string FREE CODE CAMP
console.log(rot13("SERR CVMMN!"))// should decode to the string FREE PIZZA!
console.log(rot13("SERR YBIR?"))// should decode to the string FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))// should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// SOLUCION 2: en una linea de codigo reemplaza las tres funciones del ejemplo anterior.

function roter13(str) {
    var cracker = {
      A: "N",B: "O",C: "P", D: "Q", E:"R", F:"S",
      G:"T",H:"U",I:"V",J:"W",K:"X",L:"Y",
      M:"Z",N:"A",O:"B",P:"C",Q:"D",
      R:"E",S:"F",T:"G",U:"H",V:"I",
      W:"J",X:"K",Y:"L",Z:"M", " ":" ", 
      ".":".", "!":"!", "?":"?"
    }
    console.log('')
    console.log('-------------------------------------------')
    console.log('Solucion con una linea de codigo con MAP()')
    return str.split("").map(char => cracker[char]).join("");
  }
  
  console.log(roter13("SERR PBQR PNZC!"))

  
console.log('**********************************')
console.log(' Validador de Numero de Telefono  ')
console.log('**********************************')
console.log('')
/*
// VALIDAR O REJECTAR.
// EL CODIGO DE AREA ES REQUERIDO. SI EL CODIGO DE PAIS ES DADO: COUNTRY CODE = 1. 
// Retorna True o False

Formatos de numeros validos:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

*/

const RE = /^\d{3}-\d{3}-\d{4}$/;
const RE2 = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
const RE3 = /^\d{3}\s?\d{3}\s?\d{4}$/ // CON EL ? LUEGO de s, seteo el regex para cuando haya espacio o no entre los numeros, matchea entonces para el caso en que estan todos los numeros juntos.
//const RE4 = /^\d{10}$/
const RE4 = /^1\s\d{3}\s\d{3}\s\d{4}$/
//const RE4 = 
const RE5 = /^1\s\d{3}-\d{3}-\d{4}$/
const RE6 = /^1\s?\(\d{3}\)\s?\d{3}-\d{4}/

const REGEXES = [RE, RE2, RE3, RE4, RE5, RE6]

function telephoneCheck(str) {
    console.log(`El numero ingresado es: ${str}`)
    for (let regex of REGEXES) {
        if (regex.test(str)) {
            return true;
        }
    }
    return false;
    //return RE.test(str) || RE2.test(str) || RE3.test(str);

    
  }
  
console.log(telephoneCheck("1 555-555-5555"))


console.log('**********************************')
console.log('        Caja Registradora         ')
console.log('**********************************')
console.log('')

const LOOKUP = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    'ONE HUNDRED': 10000

}


function checkCashRegister(price, cash, cid) {
    console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°')
    console.log(`Price: ${price}, Cash: ${cash}`)
    // store variable with amount of change due
    const changeDue = cash - price;
    let changeDueCents = changeDue * 100;

    console.log('changeDue:', changeDue)
    console.log('changeDueCents:', changeDueCents)
    console.log('cid:', cid)
    
    // sum up all the cents in the cash drawer
    const available = cid.reduce ((acc, billType) => {
        return acc + billType[1] * 100 ; // Lo que tengo disponible convertido a centavos de dolar.
    }, 0);
    console.log('Available: ', available);

    // if the cents in the cid is equal to the change due : caja cerrada
    if (available === changeDueCents) {
        return {status: "CLOSED", change: cid}
    }
    

    //Reverse the cid, loop through, and add up for each billType, the amount of money for that billType
    const change = cid.reverse().map(([name, amount]) => {
        
        // Loop while the change due is more than the value on the bill type, and the amount of money for that bill type is sufficient
        let total = 0;
        const nameValue = LOOKUP[name];
        //console.log()
        let amountCents = amount * 100;
        //console.log('nameValue: ', nameValue, 'amount: ', amount,'amountCents: ', amountCents)
        while (nameValue <= changeDueCents && amountCents > 0) {
            // Add one bill's worth to the total
            total += nameValue;
            //Subtract that nameValue from the total change due
            changeDueCents -= nameValue;
            //Subtract that nameValue from how much money of that bill type is available
            amountCents -= nameValue;
        }
        return [name, total / 100];
        // solo los mayores de 0: 
    }).filter(([, amount]) => amount > 0);

    const changeTotal = change.reduce((acc, [, amount]) => {
        return acc + amount;
    }, 0.00)
    console.log(changeTotal);
    
    if (changeTotal < changeDue) {
        return {status: 'INSUFFICIENT_FUNDS', change: []}
    }

    return {status: 'OPEN' , change: change}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
