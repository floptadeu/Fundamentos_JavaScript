let valor // não inicializada
console.log(valor)

valor = null // ausência de valor 
console.log(valor)


//console.log(valor.tostring())// Erro!


const produto = {}
console.log(produto.preco)
console.log(produto)


produto.preco = 3.5
console.log(produto)


produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // deletar
console.log(produto)


produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)