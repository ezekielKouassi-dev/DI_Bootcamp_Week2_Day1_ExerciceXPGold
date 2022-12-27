// Exercice 1

let sentence = ["my","favorite","color","is","blue"];

console.log(sentence.join(" "));

// Exercice 2

let str1 = "mix";
let str2 = "pod";

str1.replace("mi" ,"po");
str2.replace("po", "mi");

let newString = str1 + ' ' + str1;

console.log(newString);

//str1 = str1.split("").splice(0, 1, 'p', 'o').join("");
//str2 = str2.split("").splice(0, 1, 'm', 'i').join("");

// Exercice 3 : calculatrice

let num1 = prompt("saisissez un numéro : ");
console.log(typeof(num1));

num1 = parseInt(num1);

let num2 = prompt("saisissez un second numéro :");
num2 = parseInt(num2);

let result;

let operator = prompt("quel opération souhaité vous faire? (+, -, /, *");

switch(operator) {
    case '+' :
        result = num1 + num2;
        break;
    case '-' :
        result = num1 - num2;
        break;
    case '*' :
        result = num1 * num2;
        break;
    case '/' :
        result = num1 / num2;
        break;
    default :
        result = "erreur";
}

alert(`le resultat est ${result}`);

