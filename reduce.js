const num = [2,5,7,10]

const soma = numeros.reduce((total,num) => total + num,0)

// console.log(soma)

const  produtos = [
    {
        nome:"Notebook",
        preco: 300
    },
    {
        nome: "Mouse",
        preco: 50

    },
    {
        nome: "Monitor",
        preco: 1200
    },
    {
        nome: "teclado",
        preco: 120
    }
]

const total = produtos.reduce((soma,produto) => soma + produto.preco, 0)

console.log(total)
