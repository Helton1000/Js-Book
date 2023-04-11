function mostrarPromo(){
    // Reference
    let inProduto = document.getElementById("inProduto");
    let inPrice = document.getElementById("inPrice");
    let outProduto = document.getElementById("outProduto");
    let outPromo = document.getElementById("outPromo");

    // Content
    let produto = inProduto.value;
    let price= Number(inPrice.value);

    // Calcu
    let terceiro = price / 2;
    let total = (price * 2) + terceiro;

    // Resposta
    outProduto.textContent = produto + " - Promoção:Leve 3 por R$ " + total.toFixed(2);
    outPromo.textContent = "O 3 produto custa apenas R$: " + terceiro.toFixed(2);
}

var btVer = document.getElementById("btVer");

btVer.addEventListener("click", mostrarPromo);