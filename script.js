dadoNomeInput = document.getElementById("dado-nome-input");
dadoEnderecoInput = document.getElementById("dado-endereco-input");

opcaoCarneInput = document.getElementById("opcao-carne-input");
opcaoFrangoInput = document.getElementById("opcao-frango-input");
opcaoLegumeInput = document.getElementById("opcao-legume-input");
opcaoLinguicaInput = document.getElementById("opcao-linguica-input");

resumoDadoNome = document.getElementById("resumo-dado-nome");
resumoDadoEndereco = document.getElementById("resumo-dado-endereco");
resumoDadoPreco = document.getElementById("resumo-dado-preco");

resumoOpcaoCarne = document.getElementById("resumo-opcao-carne");
resumoOpcaoFrango = document.getElementById("resumo-opcao-frango");
resumoOpcaoLegume = document.getElementById("resumo-opcao-legume");
resumoOpcaoLinguica = document.getElementById("resumo-opcao-linguica");

dadoNomeInput.addEventListener("input", alterarResumo);
dadoEnderecoInput.addEventListener("input", alterarResumo);
opcaoCarneInput.addEventListener("input", alterarResumo);
opcaoFrangoInput.addEventListener("input", alterarResumo);
opcaoLegumeInput.addEventListener("input", alterarResumo);
opcaoLinguicaInput.addEventListener("input", alterarResumo);

let estado = false;

const valorCarne = 4.00
const valorFrango = 3.00
const valorLegume = 2.50
const valorLinguica = 3.50

let preco

document.addEventListener("keydown", function (event) {
    if (event.altKey) {
        switch (event.key) {
            case "1":
                window.location.href = "#banner-inicial";
                break;
            case "2":
                window.location.href = "#nossos-espetinhos"; 
                break;
            case "3":
                window.location.href = "#kit-churrasco"; 
                break;
            case "4":
                window.location.href = "#form-pedido-container"; 
                break;
            case "5":
                alternarEstadoLeitura();
                break;
        }
    }
});

function alterarResumo() {
    resumoDadoNome.innerHTML = "Nome - " + dadoNomeInput.value;
    resumoDadoEndereco.innerHTML = "Endereco - " + dadoEnderecoInput.value;
    numCarne = Number(opcaoCarneInput.value)
    numFrango = Number(opcaoFrangoInput.value)
    numLegume = Number(opcaoLegumeInput.value)
    numLinguica = Number(opcaoLinguicaInput.value)

    preco = "Preço - R$" + (numCarne * valorCarne + numFrango * valorFrango + numLegume * valorLegume + numLinguica * valorLinguica);
    resumoOpcaoCarne.innerHTML = "Carne - " + Number(opcaoCarneInput.value);
    resumoOpcaoFrango.innerHTML = "Frango - " + Number(opcaoFrangoInput.value);
    resumoOpcaoLegume.innerHTML = "Legume - " + Number(opcaoLegumeInput.value);
    resumoOpcaoLinguica.innerHTML = "Linguiça - " + Number(opcaoLinguicaInput.value);

    resumoDadoPreco.innerHTML = preco;
    
}

function alternarEstadoLeitura() {
    estado = !estado
    if(!estado){
        pararLeitura();
    }
    else{
        lerPagina();
    }
}

let fala;
let botaoFala = document.querySelector("button[class='botao-flutuante']");

let atalho = "(Alt+5)";

function lerPagina(){
    let texto = document.body.innerText;
    fala = new SpeechSynthesisUtterance(texto);
    fala.lang ="pt-BR"
    botaoFala.innerHTML = "Parar Leitura" + atalho;
    speechSynthesis.speak(fala);
}
function pararLeitura(){
    botaoFala.innerHTML = "Ouvir Página" + atalho;
    speechSynthesis.cancel();
}

function interromperLeituraParaVideo(){
    if(estado)
        estado = !estado;
    pararLeitura()
}
    
function trocaCor(){
    document.documentElement.classList.toggle("modo-preto-branco");
}

