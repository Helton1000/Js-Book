function calcularConsumo(){
    // Reference
    let inPrice = document.getElementById("inPrice");
    let inGrama = document.getElementById("inGrama");
    let outValor = document.getElementById("outValor");

    // Conteúdo
    let price = Number(inPrice.value);
    let grama = Number(inGrama.value);

    // Calcul
    let consumo = (price / 1000) * grama;

    // Resposta
    outValor.textContent = "Valor a pagar R$: " + consumo.toFixed(2);
}

// Botão
var btPrice = document.getElementById("btPrice");

btPrice.addEventListener("click", calcularConsumo);