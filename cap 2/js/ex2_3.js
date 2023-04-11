function mostrarPromo(){
    // Reference
    let inCarro = document.getElementById("inCarro");
    let inPrice = document.getElementById("inPrice");
    let outCarro = document.getElementById("outCarro");
    let outEntrada = document.getElementById("outEntrada");
    let outParcelas = document.getElementById("outParcelas");

    // Content
    let car = inCarro.value;
    let price = Number(inPrice.value);

    // Entrada
    let entrada = price * 0.5;
    let parcela = (price * 0.5) / 12;

    // Alterar 
    outCarro.innerHTML = "Promoção:" + car;
    outEntrada.innerHTML = "Entrada R$:" + entrada.toFixed(2);
    outParcelas.innerHTML = "+ 12x de R$:" + parcela.toFixed(2);
}

// Botão
var btPromo = document.getElementById("btPromo");

btPromo.addEventListener("click", mostrarPromo);