const { Given, When, Then} = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');

var edge = require('selenium-webdriver/edge');
const EdgeDriver = require('edgedriver');
const { By } = require('selenium-webdriver');
var options = new edge.Options().headless();

let driver = new webdriver.Builder()
    .forBrowser('edge')
    .withCapabilities(webdriver.Capabilities.edge())
    .setChromeOptions(options)
    .build();

Given('usuario acessou a pagina de pesquisa', {timeout: 15 * 1000}, async () => {
    // Write code here that turns the phrase above into concrete actions
    await driver.get("http://publicazo.insprak.com/")
    await driver.findElement(By.id("search")).click()

});

When('o usuario pesquisar por teste de software', {timeout: 15 * 1000}, async () => {
    // Write code here that turns the phrase above into concrete actions
    await driver.findElement(By.id("search")).sendKeys("teste de software")
    await driver.findElement(By.name("commit")).click()
    await driver.findElement(By.linkText("teste de software")).click()

});

Then('o usuario vizualiza teste de software', {timeout: 15 * 1000}, async () => {
    // Write code here that turns the phrase above into concrete actions
    assert(await driver.findElement(By.css("h1")).getText() == "teste de software")
    await driver.close()

});