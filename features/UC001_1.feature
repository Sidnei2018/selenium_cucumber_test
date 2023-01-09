Feature: UC001_1 - Acesso à página

O usuário preenche os campos: e-mail e senha.
O usuário clica no botão 'Entrar'.
O sistema exibe uma mensagem de sucesso.

Scenario: Fluxo principal

Given usuario acessa menu entrar
When preenche campos nome e email
Then o usuario vizualiza a pagina