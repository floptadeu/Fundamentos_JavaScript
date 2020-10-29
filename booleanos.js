let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//perguntando se é verdadeira(dois nãos)
console.log(!isAtivo)//perguntando se é falso


console.log('os verdadeiros')
console.log(!!3)//inteiros sao verdadeiros
console.log(!!-1)
console.log(!!' ')//espaços vazios ou texto são verdadeiros
console.log(!![])//arrays são verdadeiros
console.log(!!{})//espaços literais são verdadeiros
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))



console.log('os Falsos...')
console.log(!!0)
console.log(!!'')//string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))



console.log('pra finalizar...')
console.log(!!('' || null || 0 || 123))
console.log(('' || null || 0 || 123))//resultado do primeira valor verdadeiro 
 


let nome = ''

console.log(nome || 'Desconhecido')//imprime o desconhecido se nao tiver valor verdadeiro em nome nome