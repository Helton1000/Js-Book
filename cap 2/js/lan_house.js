function calcularValor(){
    // Reference
    let inValor = document.getElementById("inValor");
    let inTempo = document.getElementById("inTempo");
    let outValor = document.getElementById("outValor");

    // Content
    let valor = Number(inValor.value);
    let tempo = Number(inTempo.value);

    // Calc
    let pagar = Math.ceil(tempo / 15) * valor;


    // Result
    outResultado.textContent = "Valor a pagar R$: " + pagar.toFixed(2);
}

var pagar = document.getElementById("btPagar");

pagar.addEventListener("click", calcularValor);