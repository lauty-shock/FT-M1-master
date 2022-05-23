'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  // let invertido = num.toString().split('').reverse();
  // let acum = 0;
  // for(let i=0; i<num.length;i++){
  //   acum += Math.pow(num[i], potencia)
  //   potencia = potencia + 2;
  // }
  // return acum;

  var numArr = num.split('');
  var suma = 0;

  for(let i=0; i<numArr.length;i++){
    suma = suma + Math.pow(2,numArr.length - i - 1) * numArr[i]
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}