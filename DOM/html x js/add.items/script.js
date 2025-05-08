const btAddItem = document.querySelector("#addItem")

function adicinarItem(){
    const input = document.querySelector("#itemInput")
    const item = input.ariaValueMax.trim()

    if(item !== ""){
        const li = document.createElement("li")
        li.textContent = item
        document.querySelector("#lista").appendChild(li)
        input.value = ""
    }
}

btAddItem.addEventListener("click", ()=>{
    adicionarItem()
})
