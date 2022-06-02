'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  
  if (array.length <= 1) return array; //Si el array tiene un valor o menos termina el contexto de ejecución (sirve para llegar terminar la recursion)
  let pivot = array[Math.floor(Math.random() * array.length)]; //Agarramos un elemento aleatorio del array(El pivot)
  let [left, equal, right] = [[], [], []]; //Declaramos los arrays left(para los menores), equal(para los iguales), right(para los mayores)

  for (let i = 0; i < array.length; i++) { //Recorremos el array actual completo
    if (array[i] < pivot) left.push(array[i]); //Si el valor actual es menor que el pivot lo mandamos al array "left"
    else if (pivot < array[i]) right.push(array[i]); //Si el valor actual es mayor que el pivot lo mandamos al array "right"
    else equal.push(array[i]); //Si el valor actual es igual al pivot lo mandamos al array "equal"
  }

  if (!left && !right) return equal; //Si no hay nada en los arrays "left" y "right" retornamos el array "equal"
  else return quickSort(left).concat(equal).concat(quickSort(right)); //Si no retornamos los arrays "left", "equal" y "right" haciendo recursion en "left" y "right"
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  else {
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let orderedArray = [];
  let [L, R] = [0, 0];

  while (L < left.length && R < right.length) {
    if (left[L] < right[R]) {
      orderedArray.push(left[L]);
      L++;
    } else if (left[L] >= right[R]) {
      orderedArray.push(right[R]);
      R++;
    }
  }
  return orderedArray.concat(left.slice(L)).concat(right.slice(R));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
