// contando vogais utilizando a logica de listas e método includes
function contarVogais(char){
    let palavra = char.toLowerCase()
    vogais = []
    consoantes = []
    for(caracter of palavra){
        console.log(caracter)
        if('aeiou'.includes(caracter)){
            vogais.push(caracter)
        }else{
            consoantes.push(caracter)
        }

    } 
    
    console.log(`Há ${vogais.length} vogais: ${vogais}`)
    console.log(`Há ${consoantes.length} consoantes: ${consoantes}`)
    }
    
contarVogais('Lucas')
