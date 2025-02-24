let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerospol2 = numeros.map (function(numeros) {
  return numeros * numeros;

});

console.log(numerospol2);

let  filtroNumero = numerospol2.filter (function(numerospol2) {
  return numerospol2 > 40;
});

console.log(filtroNumero);