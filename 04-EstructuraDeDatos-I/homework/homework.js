'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n>-1 && n<2){
    return n;
  } else {
    var suma = n*(n-1);
    n--
    for(;n>1;){
      suma = suma*(n-1);
      n--;
    }
  }
  return suma;
}

function nFibonacci(n) {
  // var secuencia=[];
  // for(let i=0;i<=n;i++){
  //   if(i>=1){
  //     secuencia.push(secuencia[i] + secuencia[i-1]);
  //   }
  //   else{
  //     secuencia.push(secuencia[i]+1);
  //   }
  // }
  // return secuencia[n];

  if(n<2){
    return n;
  }
  else if(n<0){
    return n;
  }
  return nFibonacci(n-1)+nFibonacci(n-2);
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor(){
    this.elementos = [];
  }
  enqueue(valor){
    this.elementos.push(valor);
  }
  dequeue(){
    if(this.elementos.length == 0){
      return undefined;
    }
    let i = this.elementos.shift();
    return i;
  }
  size(){
    return this.elementos.length;
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
