const numeros = [1,2,3,4,5]

const pares = numeros.filter(num => num % 2 === 0)

// console.log("numeros pares", pares)

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

const produtosMaioresQueMil =  produtos.filter(produto => produto.preco > 1000)