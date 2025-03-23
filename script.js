dadoNomeInput = document.getElementById("dado-nome-input");
dadoEnderecoInput = document.getElementById("dado-endereco-input");

opcaoCarneInput = document.getElementById("opcao-carne-input");
opcaoFrangoInput = document.getElementById("opcao-frango-input");
opcaoLegumeInput = document.getElementById("opcao-legume-input");
opcaoLinguicaInput = document.getElementById("opcao-linguica-input");

resumoDadoNome = document.getElementById("resumo-dado-nome");
resumoDadoEndereco = document.getElementById("resumo-dado-endereco");

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

function alterarResumo() {
    resumoDadoNome.innerHTML = "Nome - " + dadoNomeInput.value;
    resumoDadoEndereco.innerHTML = "Endereco - " + dadoEnderecoInput.value;

    resumoOpcaoCarne.innerHTML = "Carne - " + Number(opcaoCarneInput.value);
    resumoOpcaoFrango.innerHTML = "Frango - " + Number(opcaoFrangoInput.value);
    resumoOpcaoLegume.innerHTML = "Legume - " + Number(opcaoLegumeInput.value);
    resumoOpcaoLinguica.innerHTML = "Linguiça - " + Number(opcaoLinguicaInput.value);
}