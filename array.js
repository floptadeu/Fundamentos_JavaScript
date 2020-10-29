//array nao tem tamanho fixo e ele é heterogenio por ser fracamente tipada entao dentro dos espaços do array vc pode colocar qualquer coisa

const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])// mesmo nao tendo valor ele nao retorna erro retorna apenas undefined


valores[4] = 10
console.log(valores)


//valores[20] = 10
//console.log(valores)// irá mostrar que tem valores indefinidos no array maravilhoso que daora


console.log(valores.length)//mostra o tamanho do array

valores.push({id: 3}, false , null , 'teste')//adiciona novos elementos no array


console.log(valores)

console.log(valores.pop())//retira o ultimo valor do array
delete valores[0]// deleta o valor do indice especifico
console.log(valores)

console.log(typeof valores)//array é do tipo object