// console.log('Mensagem teste')

// let numero = 2
// let resultado = numero % 2 == 0 ? `O número ${numero} é PAR` : `O número ${numero} é IMPAR`

// console.log(resultado)


function contagemRegressiva(num){
    for(let i = num; i > 0; i--){
        console.log(`- ${i}`)
    }
    
}

contagemRegressiva(10)