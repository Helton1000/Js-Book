function calcularPeso(){
    // Reference
    let inNome = document.getElementById("inNome");
    let rbMasculino = document.getElementById("rbMasculino");
    let rbFeminino = document.getElementById("rbFeminino");
    let inAltura = document.getElementById("inAltura");
    let outResposta = document.getElementById("outResposta");

    // Content
    let nome = inNome.value;
    let masculino = rbMasculino.checked;
    let feminino = rbFeminino.checked;
    let altura = Number(inAltura.value);

    // Verificar se nome foi preenchido e sexo selecionado
    if(nome == "" || (masculino == false && feminino == false)){
        alert("Por favor, informe o nome e selecione o sexo");
        inNome.focus();
        return;
    }

    // Se altura estiver vazio(0) ou NaN
    if(altura == 0 || isNaN(altura)){
        alert("Por favor, informe a altura corretamente");
        inAltura.focus();
        return;
    }

    // Checked
    if(masculino){
        var peso = 22 * Math.pow(altura, 2);
    }else{
        var peso = 21 * Math.pow(altura, 2);
    }

    // Resposta
    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "Kg";
}

// Button
var btResultado = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limparDados(){
    // Limpar os dados
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outResposta").textContent = "";

    // Posicionar foco
    document.getElementById("inNome").focus();
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);
