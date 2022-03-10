var nome = "Caio";

var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 7;
var notaDoTerceiroBimestre = 4;
var notaDoQuartoBimestre = 2;

var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4;
if (notaFinal >= 6) {
  console.log("APROVADO");
} else {
  console.log("REPROVADO");
}

console.log(`Bem vindo ${nome}, sua nota é ${notaFinal.toFixed(1)}.`);

//Revisão
//variáveis, strings, console.log(), toFixed, operações matemáticas, concatenação.
