// André Martinho

import promptsync from "prompt-sync"
const prompt=promptsync()

function somar(a,b){
  return a+b;
}
function subtrair(a,b){
  return a-b;
}
function dividir(a,b){
    return a/b;
}
function multiplicar(a,b){
  return a*b;
}
function calcular(vl1,vl2,operacao){
  return operacao(vl1,vl2);
}

function calcular1() {
  const vl1=parseFloat(prompt("Valor 1:"));
  const vl2=parseFloat(prompt("Valor 2:"));

  const operacao=prompt("Operação: (somar, subtrair, dividir, multiplicar)  ");

  let resultado;

  switch (operacao){
    case "somar":
      resultado = somar(vl1,vl2);
      break;
    case "subtrair":
      resultado = subtrair(vl1,vl2);
      break;
    case "dividir":
      resultado = dividir(vl1,vl2);
      break;
    case "multiplicar":
      resultado = multiplicar(vl1,vl2);
      break;
    default:
      resultado = "Operação inválida";
  }

  console.log(`Resultado da operação ${operacao}: ${resultado}`);
}

calcular1();