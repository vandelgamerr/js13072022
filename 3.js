// Crea una función que imprima el número de 
// parámetros enviados

function longestCountry(paises) {
    // return countries.sort((c2, c1) => c1.length - c2.length)[0];
    return paises.sort((b, a) => a.length - b.length)[0];
}
  

const paises = ["México", "Panama", "Guatemala", "El Salvador"];
alert(longestCountry(paises));

