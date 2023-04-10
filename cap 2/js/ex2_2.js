function converterDuracao(){
    // Criar referência para os elementos HTML
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outDuracao = document.getElementById("outDuracao");
    
    // Obtém conteúdos dos campos de entrada
    var titulo = inTitulo.value;
    var duracao = inDuracao.value;

    // Arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao / 60);

    // Obtém o resto da divisão
    var minutos = duracao % 60;

    // Altera o contéudo do paragráfo
    outTitulo.innerHTML = titulo;
    outDuracao.innerHTML = horas + "hora(s) e " + minutos + "minuto(s)";
}

// Referência ao botão
var btConverter = document.getElementById("btConverter");

// Evento de clique
btConverter.addEventListener("click", converterDuracao)