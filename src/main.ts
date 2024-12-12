import "./style.css";

var precio_con_descuento = 120 -18;
console.log("El coste total sin las bebidas es de: " + precio_con_descuento + " euros.");

var gasto_individual = precio_con_descuento / 7;
var gasto_individual_redondeado = gasto_individual.toFixed(2);

console.log("El coste por persona, sin bebidas, es de : " +  gasto_individual + " euros, sin redondear. \nRedondeando, el precio es: " + gasto_individual_redondeado + " euros.");