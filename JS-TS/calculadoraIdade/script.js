//Função principal
function calcularIdade(event) {
    /* event.preventDefault(); */

    console.log("Funcionante!!!");

    let dadosUsuario = pegarValores();

    let idade = calcular(dadosUsuario.diaNascimento, dadosUsuario.mesNascimento, dadosUsuario.anoNascimento);

    let classificacao = classificarIdade(idade);

    let usuarioAtualizado = organizarDados(dadosUsuario, idade, classificacao);

    cadastrarUsuario(usuarioAtualizado);
}

// Passo 1 - Pegar valor
function pegarValores() {
    //trim retirada espaços em branco
    let nomeRecebido = document.getElementById("nome").value.trim();
    let diaNascimentoRecebido = parseFloat(document.getElementById("dia-nascimento").value);
    let mesNascimentoRecebido = parseFloat(document.getElementById("mes-nascimento").value);
    let anoNascimentoRecebido = parseFloat(document.getElementById("ano-nascimento").value);

    let dadosUsuario = {
        nome: nomeRecebido,
        diaNascimento: diaNascimentoRecebido,
        mesNascimento: mesNascimentoRecebido,
        anoNascimento: anoNascimentoRecebido,
    }

    console.log(dadosUsuario);

    return dadosUsuario;
}


//Passo 2 - Calcular
function calcular(diaNascimento, mesNascimento, anoNascimento) {
    let hoje = new Date();

    // Diferença da idade sem mês e dia
    let idade = hoje.getFullYear() - anoNascimento;

    // Se o mês atual é maior que o do aniversário, então ele fez mais um ano de vida
    if (hoje.getMonth() < mesNascimento) {
        idade--;
    } 
    
    // Se os meses são os mesmos mas os dias atuais são menores ou iguais ao dia de aniversário, então ele fez mais um ano de vida
    else if (hoje.getMonth() == mesNascimento && hoje.getDate() <= diaNascimento) {
        idade--;
    }

    console.log(idade);

    return idade;
}


//Passo 3 - Classificar
function classificarIdade(idade) {
    /*
        Resultado            Faixa
        0 à 12               Criança
        13 à 17              Adolescente
        18 à 65              Adulto
        Acima de 65          Idoso
    */

    if (idade <= 12) {
        return "Criança";
    } else if (idade <= 17) {
        return "Adolescente";

    } else if (idade <= 65) {
        return "Adulto";

    } else {
        return "Idoso";
    }
}


/* Passo 4 - Organizar informações */
function organizarDados(dadosUsuario, idade, classificacaoIdade) {
    let nascimento = new Date(`${dadosUsuario.anoNascimento}/${dadosUsuario.mesNascimento}/${dadosUsuario.diaNascimento}`);
    let nascimentoFormatado = Intl.DateTimeFormat("pt-BR", { dateStyle: "short" }).format(nascimento);

    //Três pontos recebe os atributos de um outro objeto já criado
    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        idade: idade,
        classificacao: classificacaoIdade,
        dataNascimento: nascimentoFormatado
    };

    console.log(nascimentoFormatado);

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
        <td data-cell="data de nascimento">${pessoas.dataNascimento}</td>
        <td data-cell="idade">${pessoas.idade}</td>
        <td data-cell="faixa etária">${pessoas.classificacao}</td>
    </tr>`;
    });

    tabela.innerHTML = template;
}

/* Passo 8 - Deletar tabela */
function deletarTabela() {
    localStorage.removeItem("usuariosCadastrados");

    window.location.reload();
}