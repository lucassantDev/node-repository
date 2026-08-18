
// biblioteca

// cadastrar, listar e alugar livros enquanto estiver em loop

const livros = ['Tuareg', 'O ato criativo', 'Vidas Secas', 'A Odisseia']

function livrosDisponiveis() {
    console.log('--------------------LIVROS DISPONÍVEIS')
    for (livro of livros) {
        console.log(livro)
    }
    console.log('--------------------------------------')
}

function cadastrarNovoLivro() {
    console.log('--------------------NOVO CADASTRO')
    let prompt = require('prompt-sync')();
    let livroNovo = prompt('Nome do livro: ')

    livros.push(livroNovo.trim())
    console.log(livros)
    console.log('--------------------------------------')
}

function alugarLivro(arr) {
    console.log('--------------------ESCOLHA UM LIVRO PARA ALUGAR')
    arr.forEach((livro, index) => {
        console.log(`${index} - ${livro}`)
    })
    let prompt = require('prompt-sync')();
    let livroDesejado = Number(prompt('Qual Livro deseja alugar? '))
    let data = new Date()
    console.log('-------------------------------------------------')
    

    console.log(`O livro ${arr[livroDesejado]} será alugado pelos proximos 30 dias! Retorne no dia ${data.getDate()}/0${data.getMonth()}/${data.getFullYear()}`)
}

resposta = 0
console.log('Iniciando Programa')
while (resposta != 4) {
    const prompt = require('prompt-sync')();
    console.log('----------------------\n1- Livros Disponiveis\n2- Cadastrar Novo Livro\n3- Alugar Livro\n----------------------\n')
    let resposta = Number(prompt('Qual sua escolha? '));
    if (resposta === 1) {
        livrosDisponiveis()
    } else if (resposta === 2) {
        cadastrarNovoLivro()
    } else if (resposta === 3) {
        alugarLivro()
    } else if (resposta === 4) {
        console.log('Finalizando o programa...')
        break
    }

}

