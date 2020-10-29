const nome = 'Rebeca'
const concatenaçao = 'Olá' + nome + '!'
const template = `
Olá
${nome}!`
console.log(concatenaçao,template)

//expressoes...

console.log(`1 + 1 = ${1 + 1}`)//tudo que esta dentro do ${} é interpretado pelo sistema

const up = texto => texto.toUpperCase() //isso se chama funçao arrow
console.log(`Ei.. ${up('cuidado')}!`)// agora up será chamada como a funçao  toUpperCase
