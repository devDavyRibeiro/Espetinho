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

const valorCarne = 10.00
const valorFrango = 10.00
const valorLegume = 10.00
const valorLinguica = 10.00

let preco

document.addEventListener("keydown", function (event) {
    if (event.altKey) {
        switch (event.key) {
            case "h":
                window.location.href = "#banner-inicial";
                break;
            case "p":
                window.location.href = "#form-pedido-container"; 
                break;
            case "k":
                window.location.href = "#kit-churrasco"; 
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

function calcularPreco(){
    
}