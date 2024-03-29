// Algoritmo

// CALCULARIMC
// 1. Pegar os valores
// 2. Calcular o IMC
// 3. Gerar a classificação do IMC
// 4. Organizar as informações
// 5. Salvar os dados na lista
// 6. Ler a lista com os dados
// 7. Renderizar o conteudo no html
// 8. Botão de limpar os registros 

//Função principal
function calcularImc(event) {
    /* event.preventDefault(); */

    console.log("Funcionante!!!");

    let dadosUsuario = pegarValores();

    let imc = calcular(dadosUsuario.altura, dadosUsuario.peso);

    let classificacaoImc = classificarImc(imc);

    let usuarioAtualizado = organizarDados(dadosUsuario, imc, classificacaoImc);

    cadastrarUsuario(usuarioAtualizado);
}

// Passo 1 - Pegar valor
function pegarValores() {
    //trim retirada espaços em branco
    let nomeRecebido = document.getElementById("nome").value.trim();
    let alturaRecebida = parseFloat(document.getElementById("altura").value);
    let pesoRecebido = parseFloat(document.getElementById("peso").value);

    let dadosUsuario = {
        nome: nomeRecebido,
        altura: alturaRecebida,
        peso: pesoRecebido
    }

    console.log(dadosUsuario);

    return dadosUsuario;
}


//Passo 2 - Calcular
function calcular(altura, peso) {
    let imc = peso / (altura * altura)

    console.log(imc);

    return imc;
}


//Passo 3 - Classificar
function classificarImc(imc) {
    /*
        Resultado	        Situação
        Abaixo de 18,5      Filezinho!!
        Entre 18,5 e 24,99	Diliça!!!!
        Entre 25 e 29,99	Ta Top!!!
        Acima de 30      	Oh la em casa!!!
    */

    if (imc < 18.5) {
        return "Filezinho!!!";

    } else if (imc < 25) {
        return "Diliça!!!";

    } else if (imc < 30) {
        return "Ta Top!!!";

    } else {
        return "Oh la em casa!!!";
    }
}


/* Passo 4 - Organizar informações */
function organizarDados(dadosUsuario, valorImc, classificacaoImc) {
    let dataHoraAtual = Intl.DateTimeFormat("pt-BR", { timeStyle: "long", dateStyle: "short" }).format(Date.now());

    //Três pontos recebe os atributos de um outro objeto já criado
    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        imc: Math.round(valorImc * 100) / 100,
        classificacao: classificacaoImc,
        dataCadastro: dataHoraAtual
    };

    console.log(dadosUsuarioAtualizado);

    return dadosUsuarioAtualizado;
}

/* Passo 5 - Salvar */
function cadastrarUsuario(usuario) {
    let listaUsuarios = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    listaUsuarios.push(usuario);

    return localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios));
}

/* Passo 6 - Ler lista */
function carregarUsuarios() {
    let listaUsuarios = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    if (listaUsuarios.length === 0) {
        let tabela = document.getElementById("corpo-tabela");

        return tabela.innerHTML = `<tr class="linha-mensagem">
            <td colspan="6">Nenhum usuário cadastrado</td>
        </tr>`;
    } else {
        return montarTabela(listaUsuarios);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    carregarUsuarios();
});

/* Passo 7 - Montar a tabela */
function montarTabela(listaDeCadastrados) {
    let tabela = document.getElementById("corpo-tabela");

    let template = "";

    listaDeCadastrados.forEach(pessoas => {
        template += `<tr>
        <td data-cell="nome">${pessoas.nome}</td>
        <td data-cell="altura">${pessoas.altura}</td>
        <td data-cell="peso">${pessoas.peso}</td>
        <td data-cell="valor do IMC">${pessoas.imc}</td>
        <td data-cell="classificação do IMC">${pessoas.classificacao}</td>
        <td data-cell="data de cadastro">${pessoas.dataCadastro}</td>
    </tr>`;
    });

    tabela.innerHTML = template;
}

/* Passo 8 - Deletar tabela */
function deletarTabela() {
    localStorage.clear();

    let tabela = document.getElementById("corpo-tabela");

    tabela.innerHTML = `<tr class="linha-mensagem">
            <td colspan="6">Nenhum usuário cadastrado</td>
        </tr>`;
}