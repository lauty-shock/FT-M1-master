'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array=[1]; //1,2,2,3,3,5
  let divisor=2; //3,4,5
  while(num!==1){
    if(num%divisor === 0){
      array.push(divisor)
      num=num/divisor;
    }else{
      divisor++
    }
  }
  return array;
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true; //Declaro una variable que le permita el paso
  while(swap){ //Pregunto si el paso esta permitido
    swap = false;//Declaro el pase en falso (como si hubiese gastado una entrada)
    for(let i=0;i<array.length-1;i++){ //Recorro el array hasta la penultima posicion, porque la ultima posicion es para intercambiar
      if(array[i]>array[i+1]){ //Si el valor de la posicion actual es mayor que su siguiente posicion:
        let aux = array[i]; //Guardo el valor actual en una variable "aux"
        array[i] = array[i+1]; //Cambio el valor de la posicion actual por el valor de la posicion siguiente
        array[i+1] = aux; //Cambio el valor de la siguiente posicion por el valor actual que había guardado en "aux"
        swap = true; //Le doy un pase para que vuelva a pasar el while
      }
    }
  }
  return array; //Retorno el array listo
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=1;i<array.length;i++){
    let j= i-1;
    let aux = array[i];
    while(j >= 0 && aux < array[j]){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0;i<array.length;i++){
    let min = i;
    for(let j=i+1;j<array.length;j++){
      if(array[j]<array[min]){
        min=j;
      }
    }
    let aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
