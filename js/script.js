// VALIDAÇÃO DOS CONCEITOS DOS CAPÍTULOS 1 E 2

// ===== CAPÍTULO 1: VARIÁVEIS =====

// Uso de const para valores que não mudam
const IDADE_MINIMA = 13;
const IDADE_MAXIMA = 120;
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Uso de let para variáveis que podem mudar
let usuarios = []; // Array para armazenar usuários
let usuariosFiltrados = []; // Array para filtros
let contadorIds = 0; // Contador para IDs únicos

// ===== CAPÍTULO 2: TIPOS DE DADOS =====

// Função que demonstra tipos de dados primitivos e estruturas
function criarUsuario(dadosFormulario) {
    // Incrementa contador (number)
    contadorIds++;
    
    // Cria objeto (estrutura de dados não-primitiva)
    const novoUsuario = {
        // Propriedades com diferentes tipos primitivos
        id: contadorIds,                           // number
        nome: dadosFormulario.nome.trim(),         // string
        idade: parseInt(dadosFormulario.idade),    // number (conversão)
        email: dadosFormulario.email.toLowerCase(), // string
        cidade: dadosFormulario.cidade.trim(),     // string
        profissao: dadosFormulario.profissao,      // string
        ativo: Boolean(dadosFormulario.ativo),     // boolean (conversão)
        dataCadastro: new Date().toLocaleDateString(), // string (data)
        // Propriedade calculada
        maiorIdade: parseInt(dadosFormulario.idade) >= 18 // boolean
    };
    
    return novoUsuario;
}

// Função de validação que usa diferentes tipos de dados
function validarFormulario(dados) {
    const erros = {}; // Object para armazenar erros
    
    // Validação de string (nome)
    if (typeof dados.nome !== 'string' || dados.nome.trim().length < 2) {
        erros.nome = 'Nome deve ter pelo menos 2 caracteres';
    }
    
    // Validação de number (idade)
    const idade = parseInt(dados.idade);
    if (isNaN(idade) || idade < IDADE_MINIMA || idade > IDADE_MAXIMA) {
        erros.idade = `Idade deve estar entre ${IDADE_MINIMA} e ${IDADE_MAXIMA} anos`;
    }
    
    // Validação de string com regex (email)
    if (typeof dados.email !== 'string' || !REGEX_EMAIL.test(dados.email)) {
        erros.email = 'Email deve ter um formato válido';
    }
    
    return erros;
}

// Event listener para o formulário
document.getElementById('userForm').addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    // Coleta dados do formulário em um objeto
    const dadosFormulario = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        email: document.getElementById('email').value,
        cidade: document.getElementById('cidade').value,
        profissao: document.getElementById('profissao').value,
        ativo: document.getElementById('ativo').checked
    };
    
    // Validação
    const erros = validarFormulario(dadosFormulario);
    
    // Limpa erros anteriores
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Se há erros, exibe e para execução
    if (Object.keys(erros).length > 0) {
        for (let campo in erros) {
            document.getElementById(campo + 'Error').textContent = erros[campo];
        }
        return;
    }
    
    // Cria e adiciona usuário
    const usuario = criarUsuario(dadosFormulario);
    usuarios.push(usuario); // Adiciona ao array
    
    // Atualiza interface
    atualizarEstatisticas();
    renderizarUsuarios(usuarios);
    limparFormulario();
    
    // Feedback para usuário
    alert('Usuário cadastrado com sucesso!');
});

// Função que demonstra operações com arrays e objetos
function atualizarEstatisticas() {
    // Usa métodos de array e propriedades de objeto
    const totalUsuarios = usuarios.length;
    const usuariosMaiores = usuarios.filter(user => user.maiorIdade).length;
    const usuariosAtivos = usuarios.filter(user => user.ativo).length;
    
    // Atualiza DOM com conversão para string
    document.getElementById('totalUsers').textContent = totalUsuarios.toString();
    document.getElementById('adultUsers').textContent = usuariosMaiores.toString();
    document.getElementById('activeUsers').textContent = usuariosAtivos.toString();
}

// Função que renderiza lista de usuários
function renderizarUsuarios(listaUsuarios) {
    const container = document.getElementById('usersList');
    
    // Se array vazio, mostra mensagem
    if (listaUsuarios.length === 0) {
        container.innerHTML = '<p>Nenhum usuário cadastrado.</p>';
        return;
    }
    
    // Constrói HTML usando template strings e propriedades do objeto
    let html = '';
    listaUsuarios.forEach(function(usuario, indice) {
        html += `
            <div class="user-card">
                <div class="user-info">
                    <div class="info-item">
                        <span class="info-label">ID:</span> ${usuario.id}
                    </div>
                    <div class="info-item">
                        <span class="info-label">Nome:</span> ${usuario.nome}
                    </div>
                    <div class="info-item">
                        <span class="info-label">Idade:</span> ${usuario.idade} anos
                    </div>
                    <div class="info-item">
                        <span class="info-label">Email:</span> ${usuario.email}
                    </div>
                    <div class="info-item">
                        <span class="info-label">Cidade:</span> ${usuario.cidade}
                    </div>
                    <div class="info-item">
                        <span class="info-label">Profissão:</span> ${usuario.profissao}
                    </div>
                    <div class="info-item">
                        <span class="info-label">Status:</span> ${usuario.ativo ? 'Ativo' : 'Inativo'}
                    </div>
                    <div class="info-item">
                        <span class="info-label">Maior de idade:</span> ${usuario.maiorIdade ? 'Sim' : 'Não'}
                    </div>
                    <div class="info-item">
                        <span class="info-label">Cadastro:</span> ${usuario.dataCadastro}
                    </div>
                </div>
                <button class="btn btn-secondary" onclick="removerUsuario(${indice})">Remover</button>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Funções que demonstram manipulação de arrays
function ordenarUsuarios() {
    const usuariosOrdenados = [...usuarios].sort((a, b) => a.idade - b.idade);
    renderizarUsuarios(usuariosOrdenados);
}

function filtrarAtivos() {
    const usuariosAtivos = usuarios.filter(user => user.ativo === true);
    renderizarUsuarios(usuariosAtivos);
}

function mostrarTodos() {
    renderizarUsuarios(usuarios);
}

function removerUsuario(indice) {
    if (confirm('Tem certeza que deseja remover este usuário?')) {
        usuarios.splice(indice, 1); // Remove do array
        atualizarEstatisticas();
        renderizarUsuarios(usuarios);
    }
}

function limparTodos() {
    if (usuarios.length === 0) {
        alert('Não há usuários para remover!');
        return;
    }
    
    if (confirm('Tem certeza que deseja remover todos os usuários?')) {
        usuarios = []; // Reatribui array vazio
        atualizarEstatisticas();
        renderizarUsuarios(usuarios);
    }
}

function limparFormulario() {
    document.getElementById('userForm').reset();
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
}

// Inicialização: demonstra diferentes tipos de dados
function inicializarSistema() {
    console.log('=== DEMONSTRAÇÃO DOS CONCEITOS ===');
    console.log('Tipos primitivos:');
    console.log('String:', typeof 'Olá mundo');
    console.log('Number:', typeof 42);
    console.log('Boolean:', typeof true);
    console.log('Undefined:', typeof undefined);
    console.log('Null:', typeof null);
    
    console.log('\nTipos não-primitivos:');
    console.log('Array:', typeof []);
    console.log('Object:', typeof {});
    console.log('Function:', typeof function(){});
    
    console.log('\nVariáveis utilizadas:');
    console.log('const IDADE_MINIMA:', IDADE_MINIMA);
    console.log('let usuarios:', usuarios);
    console.log('let contadorIds:', contadorIds);
    
    // Inicializa a interface
    atualizarEstatisticas();
    renderizarUsuarios(usuarios);
}

// Executa inicialização quando página carrega
document.addEventListener('DOMContentLoaded', inicializarSistema);
