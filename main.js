const form = document.getElementById('form-contato');

const nomes = [];
const telefones = [];

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
})

function adicionarLinha () {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    nomes.push(inputNomeContato.value);
    telefones.push(inputTelefoneContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizarTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



