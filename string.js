const escola ="Cod3r"

console.log(escola.charAt(4))//charAt retorna o char na posição desejada
console.log(escola.charAt(5))//mesmo estando fora da string não restonar erro retorna apenas um valor vazio
console.log(escola.charCodeAt(3))//retonar o valor do char da tabela ASCII ou Unicode
console.log(escola.indexOf('3'))//retorna onde está(em qual indice) o char dentro da string

console.log(escola.substring(1))//imprime a string a partir do indice indicado
console.log(escola.substring(0,3))//indicando o inicio e o fim da substring

console.log('Escola '.concat(escola).concat("!"))//concatena as strings é possivel usar das duas formas mostradas 
console.log('Escola ' + (escola) + ("!"))
console.log(escola.replace(3,'e'))//substitui o primeiro pelo segundo dentro da string
console.log(escola.replace(/\d/,'e'))//substitua todos os digitos pela letra e(curso de regex)
console.log(escola.replace(/\w/g,'e'))//substuir tudo pela letra e


console.log('Ana,Maria,Pedro'.split(','))//comando split usa o que vc quer usar como separador entre as aspas 
                                        //e transforma em array com três elementos independentes

