# selenium_cucumber_test 🌍

Testes manuais e automatizados com selenium e cucumber

## Configurando o ambiente de testes 🚩<br>

1 - Instale o Nodejs do site oficial em sua máquina: https://nodejs.org/en/ 🌍<br>
2 - Escolha uma IDE de sua escolha, estarei utilizando o Visual Studio Code neste tutorial: https://code.visualstudio.com/ 🌍<br>
3 - Instale o selenium IDE https://www.selenium.dev/ com o cucumber 🥒<br>
4 - Documentação do selenium IDE: https://www.selenium.dev/documentation/<br>

Criaremos a pasta do projeto e apontaremos para esta pasta no terminal;<br>
Após acessar a pasta, executamos o comando de instalação: npm init para criar o arquivo package.json e suas dependências<br>

![1](https://user-images.githubusercontent.com/28484134/211394495-225225cb-b7b3-409e-944f-53da77b072f1.jpg)<br>

Em seguida vamos instalar o cucumber com o comando: npm install --save-dev @cucumber/pretty-formatter @cucumber/cucumber<br>
Se tudo correu bem, você verá novas dependências no arquivo mostrado na imagem abaixo.

![3](https://user-images.githubusercontent.com/28484134/211394913-581083db-e96a-4e01-816e-26c0d73b075d.jpg)<br>

Próximo passo será instalar o selenium-webdriver assert: npm install selenium-webdriver assert<br>
As novas dependências aparecerão no arquivo.<br>

![5](https://user-images.githubusercontent.com/28484134/211395516-9c20e082-ced9-4417-862b-1f24dbf0cd11.jpg)<br>

Na próxima etapa serão incluídos os drivers para os navegadores e será preciso realizar uma alteração na linha de comando do "test".<br>
Ela deverá ficar igual a da imagem, para a utilização do relatório cucumber em html.<br>

![6-relatorioHtml](https://user-images.githubusercontent.com/28484134/211396063-cc2fbe13-36d3-4d7f-9552-f9a30a5bdbeb.jpg)<br>

Agora precisamos criar as pastas features e dentro dela a pasta steps-definitions onde ficarão os arquivos com respectivos nomes.<br>
Na pasta features, serão criados os arquivos contendo nosso fluxo de teste na linguagem Guerkin.<br>
Podem ser criados quantos fluxos forem precisos!<br>

![scenario1](https://user-images.githubusercontent.com/28484134/211396840-f28db722-4708-4213-bc42-d3bc3d8c728d.jpg)<br>

Na pasta steps-definitions ficarão os arquivos de testes automatizados em javaScript.<br>
Também podem ser criados quantos testes forem necessários!<br>

![teste1](https://user-images.githubusercontent.com/28484134/211397061-390898b8-9974-4dc1-9755-1f57769974ab.jpg)<br>

Estes testes foram criados anteriormente a este passo utilizando o selenium IDE via browser e importados para uma pasta no computador.<br>
Foram criados 3 testes para este projeto!<br>

![selenium1](https://user-images.githubusercontent.com/28484134/211397369-2824ea2c-66a8-4b67-a34b-d10f1d270a26.jpg)<br>

O último passo é rodar os testes via linha de comando, através do comando: npm test<br>

O resultado será este, caso seus testes passem sem falhas.<br>

![finalizando](https://user-images.githubusercontent.com/28484134/211397726-5dc9c62f-3321-4570-b365-9535684ae3bf.jpg)<br>

Quando o teste é finalizado, um relatório é criado no formato html, para visualização no browser!<br>

![relatorio1](https://user-images.githubusercontent.com/28484134/211397945-40527acb-c547-42da-b3a3-0a161de328a8.jpg)
![relatorio2](https://user-images.githubusercontent.com/28484134/211397964-ae92ad78-7a66-449c-bb60-7e468b376b46.jpg)<br>

Testes finalizados com sucesso!
