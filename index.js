
const letras = ['a', 'e', 'r', 'b']

console.log(letras)

letras.sort()

letras.unshift('js')
letras.push('g')
console.log(letras)

const prompt = require('prompt-sync')();
const user = prompt('Letra: ');

console.log(letras.includes(user) ? `A letra ${user.toUpperCase()} está na lista` : `A letra ${user.toUpperCase()} não está na lista` )