# Sistema de Cadastro - Validação Capítulos 1 e 2

Este projeto é um sistema simples de cadastro de usuários que demonstra conceitos básicos de JavaScript abordados nos capítulos 1 e 2: variáveis, tipos de dados, validação e manipulação de arrays e objetos.

---

## Estrutura do Projeto

- `index.html`: arquivo principal que importa a estilização e a lógica.
- `style.css`: arquivo de estilização.
- `script.js`: arquivo que contém a lógica da aplicação.

---

## Passo a passo para criar o projeto

### 1. Criar a estrutura básica do HTML

- Use a declaração `<!DOCTYPE html>` e defina a linguagem como `pt-BR`.
- Configure o `head` com charset UTF-8, viewport responsiva e título.
- Dentro do `body`, crie uma `div.container` que conterá todo o conteúdo.

### 2. Criar o cabeçalho

- Dentro da `container`, crie uma `div.header` com título (`h1`) e subtítulo (`p`).
- Utilize estilos para cores, alinhamento e gradientes.

### 3. Seção de informações sobre a validação

- Adicione uma `div.validation-info` explicando o que será validado no projeto (variáveis, tipos de dados, escopo, etc).

### 4. Estatísticas

- Crie a seção `.stats` com cards mostrando:
  - Total de usuários cadastrados
  - Quantidade de maiores de idade
  - Quantidade de usuários ativos
- Cada card possui um número e um label.

### 5. Formulário de cadastro

- Crie uma seção `.form-section` com um formulário (`form#userForm`) contendo:
  - Campo de texto para nome completo
  - Campo numérico para idade (1 a 120)
  - Campo de email com validação
  - Campo de texto para cidade
  - Select para profissão com opções fixas
  - Checkbox para status ativo
  - Botões para enviar e limpar formulário
- Insira elementos para exibir mensagens de erro embaixo dos campos necessários.

### 6. Lista de usuários cadastrados

- Crie a seção `.users-section` com:
  - Título
  - Botões para ordenar, filtrar, mostrar todos e limpar lista
  - Div onde os usuários serão renderizados dinamicamente

### 7. Estilos CSS

- Defina estilos para o corpo, container, cabeçalho, formulários, botões, cards, erros, e responsividade.
- Use gradientes, bordas arredondadas e sombras para um visual moderno.

### 8. JavaScript

- Defina constantes para idade mínima, máxima e regex de email.
- Use variáveis `let` para arrays e contadores mutáveis.
- Crie funções para:
  - Criar usuário a partir dos dados do formulário, convertendo tipos e incluindo propriedades calculadas (ex.: maiorIdade).
  - Validar os dados do formulário (nome, idade, email) retornando objetos de erros.
  - Atualizar estatísticas no DOM.
  - Renderizar a lista de usuários na tela.
  - Ordenar usuários por idade.
  - Filtrar usuários ativos.
  - Remover usuários individualmente.
  - Limpar todos os usuários.
  - Limpar formulário.
  - Inicializar o sistema com demonstrações no console e atualização inicial da interface.
- Adicione event listener ao formulário para validação e cadastro.
- Use `confirm` para remoção de usuários e alertas para feedback.

### 9. Testar o projeto

- Abra o arquivo HTML no navegador.
- Teste os fluxos de cadastro, validação, remoção e filtros.
- Verifique a atualização das estatísticas em tempo real.

---

## Tecnologias utilizadas

- HTML5
- CSS3 (Flexbox/Grid e Gradientes)
- JavaScript ES6+ (let, const, arrow functions, template strings, métodos de array)

---

## Como executar

1. Salve o arquivo `index.html` em seu computador.
2. Abra o arquivo em qualquer navegador moderno (Chrome, Firefox, Edge).
3. Use o formulário para cadastrar usuários e interagir com a lista.

---

## Sobre

Este projeto serve como exemplo didático para aplicar conceitos básicos de programação web e validação de dados.

---

## Autor

Projeto criado por Eduardo Lacerda, para o roadmap de javascript.
