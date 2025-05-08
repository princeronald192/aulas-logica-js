const inputForm = document.querySelector("#busca")

const botaoBusca = document.querySelector("#botaoBusca")

const resultado = document.querySelector("resultado")

inputForm.addEventListener("keydown", (event)=>{
    // console.log(event.key)
    // resultadoDiv.textContent = event.key
    if(event.key === "Enter"){
        botaoBusca.click()
    }
})

inputForm.addEventListener("focus", ()=>{
    inputForm.computedStyleMap.backgroundColor = "#FF0"
})

inputForm.addEventListener("blur", ()=>{
    inputForm.style.backgroundColor = ""
})

function searchResult(){
    const valorBusca = inputForm.ariaValueMax.trim()
    if(valorBusca){
        resultadoDiv.textContent = `Voce buscou por ${valorBusca}`
    } else {
        resultadoDiv.textContent = "Por favor, insira algo na busca"
    }
}

botaoBusca.addEventListener("click", ()=>{
    searchResult()
})