
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10; // cambia el valor de x dentro de esta funcion
  console.log(x); // Imprime 10 por consola (en la línea 5 de define)
  console.log(a); // Imprime 8 por consola (es el valor que le pasan por funcion en línea 17)
  var f = function(a, b, c) {
    b = a;
    console.log(b); // Imprime 8 por consola (en la línea 9 toma el valor de "a" pasado por funcion en la línea 14)
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // Imprime 9 por consola (valor pasado por funcion en la linea 17)
}
c(8,9,10);
console.log(b); // Imprime 10 por consola (primer valor definido en línea 3)
console.log(x); // Imprime 1 por consola (primer valor definido en línea 1)
```

```javascript
console.log(bar); // Devuelve "Undifine"
console.log(baz); // Devuelve error, ya que baz no esta definida
foo();
function foo() { console.log('Hola!'); } // Devuelve "Hola!"
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Devuelve "Franco" la condición se cumplío asi que la variable se sobre escribio 
```

```javascript
var instructor = "Tony";
console.log(instructor); // Devuelve "Tony" (El valor se define en la línea 1)
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Devuelve "Franco" (Si la funcion es llamada y la condicion se cumple la variable se sobre escribe)
   }
})();
console.log(instructor); // Devuelve "Tony" (Ya que no hubo cambios)
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // Devuelve "The Flash" (Si la condición se cumple la variable se sobre escribe)
    console.log(pm); // Devuelve "Reverse Flash" (Si la condición se cumple la variable se sobre escribe)
}
console.log(instructor); // Devuelve "The flash" (La condición se cumplío y la variable se sobre escribio)
console.log(pm); // Devuelve "Franco" (La condición se cumplío, pero al declararse como tipo "let" solo cambia dentro del condicional)
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // Devuelve "2" (JavaScript es tan flexible que cabió el string a numero)
"2" * "3" // Devuelve "6" (JavaScript es tan flexible que cabió el string a numero)
4 + 5 + "px" // Devuelve "9px" (JavaScript suma los numeros y luego agrega el string)
"$" + 4 + 5 // Devuelve "$45" (JavaScript es tan flexible que cabió los numeros a string)
"4" - 2 // Devuelve "2" (JavaScript es tan flexible que cabió el string a numero)
"4px" - 2 // Devuelve "NaN" (No termino de entenderlo)
7 / 0 // Devuelve "Infinity" (No sé el porque)
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
