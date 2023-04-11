function mostrarPromo(){
    // Reference
    let inNome = document.getElementById("inNome");
    let inPrice = document.getElementById("inPrice");
    let outNome = document.getElementById("outNome");
    let outResultado = document.getElementById("outResultado");

    // Content
    let name = inNome.value;
    let price = Number(inPrice.value);

    // Calcul
    let promo = Math.floor(price * 2);

    // Resposta
    outNome.textContent = "Promoção de " + name;
    outResultado.textContent = "Leve 2 por apenas R$: " + promo;
}

var btMostrar = document.getElementById("btMostrar");

btMostrar.addEventListener("click", mostrarPromo);