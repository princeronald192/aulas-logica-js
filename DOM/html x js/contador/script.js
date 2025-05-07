let contador = 0

const resultado = document.querySelector("resultado")

const btnIncrementValor = document.querySelector("btnIncrementar")

btnIncrementValor.addEventListener("click", ()=>{
    contador++
    resultado.textContador = 'Contador: $(contador)'
})