// contando vogais utilizando a logica de listas e operadores ternarios
function contarVogais(char){
    let palavra = char.toLowerCase()
    vogais = []
    consoantes = []
    for(caracter of palavra){
        console.log(caracter)
        caracter === 'a' ? vogais.push(caracter) : 
        caracter === 'e' ? vogais.push(caracter) :
        caracter === 'i' ? vogais.push(caracter) :
        caracter === 'o' ? vogais.push(caracter) :
        caracter === 'u' ? vogais.push(caracter) :
        consoantes.unshift(caracter)

    } 
    
    console.log(`Há ${vogais.length} vogais: ${vogais}`)
    console.log(consoantes)
    }
    
contarVogais('Lucas')
