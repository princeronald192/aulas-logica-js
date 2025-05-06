//function saudacao() {
    //console.log("Bom dia!")
//}

//arrow function com parãmentros

//const saudacao = (turno,nome="João")=>{
  //  console.log('${turno} ${nome}')
//}
//saudacao("Bom dia","Luciano")
//saudacao("Boa noite")

//const soma = (x,y)=>{
    //return x+y

//}
const soma = (x,y)=> x+y+z
const multiplicaçao = (x,y)

//const resultadoDoDaSoma = soma(5,8,9)

//console.log(resultadoDoDaSoma)

//funçao retornando o calculo das suas funçoes

//const calculo = (x,y)=>{
  //  return soma(x,y ) + multiplicaçao(z,a) 
//}
//const resultadoDoCalculo = calculo(10,2,5,7)
//console.log("resultado do cálculo" resultaDoCalculo,)

// retonar o valor de varias funçaoes em um return dentro do objeto

//const calculo = (x,y)=>{
    //return {
        //soma :soma(x,y),
        //subtracao : subtraçao(x,y),
        //multiplicacao: multiplicaçao(x,y),
        //divisao :divisao(x,y),

   //}
 //}
//const resultado finalDoCalculo = calculo(20,10)

//console.log("resultado final",
  //  resultadoFinalDoCalculo
//)
// escopo global e local (de bloco ou funçao)

const escopoGlobal= "Escopo local"

function chamaEscopo() {
    console.log("escopo local",escopoGlobal)
    
}
console.log(escopoGlobal)
