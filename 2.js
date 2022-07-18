// Crea una funcion llamada farenheitToCelsius() que reciba como parametro
// los grados farenheit y los convierta a grados centigrados

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

var grados = parseFloat(prompt('Inserta los grados a convertir'));
alert(fahrenheitToCelsius(grados));