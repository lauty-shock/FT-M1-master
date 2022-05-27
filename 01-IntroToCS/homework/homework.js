'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  let invertido = num.toString().split('').reverse();
  let acum = 0;
  for(let i=0; i<num.length;i++){
    acum = acum + Math.pow(2, num.length)
    potencia = potencia + 2;
  }
  return acum;

  var numArr = num.split('');
  var suma = 0;

  for(let i=0; i<numArr.length;i++){
    suma = suma + Math.pow(2,numArr.length - i - 1) * numArr[i]
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca

  let numero = num;
  let binario = (numero % 2).toString();
  for (; numero > 1; ) {
      numero = parseInt(numero / 2);
      binario =  (numero % 2) + (binario);
  }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}