function calcularMedia(){
    // Reference
    let inNome = document.getElementById("inNome");
    let inNotaUm = document.getElementById("inNotaUm");
    let inNotaDois = document.getElementById("inNotaDois");
    let outMedia = document.getElementById("outMedia");
    let outSituacao = document.getElementById("outSituacao");

    // Conteudo
    let nome = inNome.value;
    let notaUm = Number(inNotaUm.value);
    let notaDois = Number(inNotaDois.value);

    // Media
    let media = (notaUm + notaDois) / 2;

    // Apresenta o resultado
    outMedia.textContent = "Média das Notas: " + media.toFixed(1);

    // Condição
    if(media >= 7){
        // Altera i estilo da cor
        outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)";
        outSituacao.style.color = "green";
    }else{
        outSituacao.textContent = "Ops " + nome + "... Você foi reprovado(a)";
        outSituacao.style.color = "red";
    }
}

// botao
var botao = document.getElementById("btExibir");

botao.addEventListener("click",calcularMedia);