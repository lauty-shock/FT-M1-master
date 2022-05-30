"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
BinarySearchTree.prototype.size = function(){
  if(!this.left && !this.right) return 1;
  else if(this.left && this.right) return 1 + this.left.size() + this.right.size();
  else if(!this.left && this.right) return 1 + this.right.size();
  else return 1 + this.left.size();
}
BinarySearchTree.prototype.insert = function(value){
  if(value >= this.value){
    if(!this.right){
      this.right = new BinarySearchTree(value);
    }
    else {
      this.right.insert(value);
    }
  }
  else if(!this.left){
    this.left = new BinarySearchTree(value);
  }
  else{
    this.left.insert(value);
  }
}
BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true; // Pregunto si el valor del árbol es igual al "value"
  //Voy a correr el código como si lo fuera a agregar
  if(value > this.value){ //Pregunto si el "value" es mayor que el valor del árbol actual
    if(this.right) return this.right.contains(value); //Pregunto si hay otro árbol en la rama derecha (si lo hay hago recursion)
    else return false; // Si no hay otro árbol a la derecha devuelvo "false"
  } 
  else { //El "else" es para cuando el "value" es menor al valor actual 
    if(this.left) return this.left.contains(value); //Pregunto si hay otro árbol en la rama izquierda (si lo hay hago recursion)
    else return false; // Si no hay otro árbol a la derecha devuelvo "false"
  }
}
BinarySearchTree.prototype.depthFirstForEach = function(order = "in-order"){
  let array =[this.value]
  // Post-order = izquierda - derecha - root
  if(order === "post-order"){
    if(this.left) this.left.depthFirstForEach(order);
    else if(this.right) this.right.depthFirstForEach(order);
    else array.push(this.value);
    return array;
  }
  // Pre-order = root - izquierda - derecha
  else if(order === "pre-order"){}
  // In-order = izquierda - root - derecha
  else {}
}
BinarySearchTree.prototype.breadthFirstForEach = function(){}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
