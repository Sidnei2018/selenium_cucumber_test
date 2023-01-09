Feature: UC001_2 - Pesquisa na página

O usuário acessa a pagina de pesquisa.
O usuário pesquisa por "teste de software".
O usuário clica no botão pesquisar.

Scenario: Fluxo principal

Given usuario acessou a pagina de pesquisa
When o usuario pesquisar por teste de software
Then o usuario vizualiza teste de software