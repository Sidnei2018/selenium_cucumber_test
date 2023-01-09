Feature: UC001 - Cadastrar usuário

O usuário preenche os campos: Nome, e-mail, senha e confirmação de senha.
O usuário clica no botão 'Cadastrar'.
O sistema exibe uma mensagem de sucesso.

Scenario: Fluxo principal

Given usuario acessa menu de cadastro
When preenche campos nome, email, senha e confirmacao
Then o usuario foi cadastrado