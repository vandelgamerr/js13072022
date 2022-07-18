// Crea una funcion llamada palindrome() que reciba como parametro
// una palabra, si la oracion es palindromo la funcion debera devolver
// true en otro caso devolver false


function palindrome(palabra){
    const palabraInversa = palabra.split("").reverse().join("");
    return palabraInversa === palabra ? "es palindromo" : "no es palindromo";
  }

var palabra = prompt('Inserta una palabra').toLowerCase();
alert(palindrome(palabra));

