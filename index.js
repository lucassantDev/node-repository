// console.log('Mensagem teste')

// let numero = 2
// let resultado = numero % 2 == 0 ? `O número ${numero} é PAR` : `O número ${numero} é IMPAR`

// console.log(resultado)


// function contagemRegressiva(num){
//     for(let i = num; i > 0; i--){
//         console.log(`- ${i}`)
//     }
    
// }

// contagemRegressiva(10)


// 
// let total = 0

// for(const num of numeros){
//     total+= num
// }

// console.log(total)

let numeros = [1, 2, 5, 6]
function somarValoresArray(lista){
    let valorTotal = 0
    for(const num of lista){
        valorTotal += num 
        
    }

    console.log(valorTotal)
}

somarValoresArray(numeros)