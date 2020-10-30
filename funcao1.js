// Funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)//chama a funçao e imprime o resultado no console

imprimirSoma(2)//se passar 1 valor o outro sera undefined e ira sair um Not a Number NaN

imprimirSoma(2,3,4,5,6,7,8)//vai ignorar os outros e considerar apenas os numeros que a funçao chama

imprimirSoma()//NaN


//Funcao com retono 

function soma(a, b=0){//b agora sera por padrao  0 se nao for passada para a funcao como outro valor
return a + b
}

console.log(soma(2,3))//Com o return agora para imprimir a funçao no console temos que fazr o console.log
console.log(soma(2))
console.log(soma())
