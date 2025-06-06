const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
const resp3 = document.querySelector("h5")

frm.addEventListener("submit",(e)=>{
    

    const Veiculo = frm.inVeiculo.value
    const entrada = Number (frm.inPreco.value)
    const promocao = Math.floor(entrada / 2)
    const divisao = promocao %12

    resp1.innerText = Veiculo
    resp2.innerText = `Entrada de R$: ${promocao}`
    resp3.innerText = `12x de R$ ${divisao}`
    
    e.preventDefault() 
})