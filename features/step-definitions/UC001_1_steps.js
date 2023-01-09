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

Given('usuario acessa menu entrar', {timeout: 15 * 1000}, async () => {
    // Write code here that turns the phrase above into concrete actions
    await driver.get("http://publicazo.insprak.com/")
    await driver.findElement(By.linkText("Entrar")).click()

});

When('preenche campos nome e email', {timeout: 15 * 1000}, async () => {
    // Write code here that turns the phrase above into concrete actions
    await driver.manage().window().setRect(1936, 1056)
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys("sid@gmail.com")
    await driver.findElement(By.id("user_password")).click()
    await driver.findElement(By.id("user_password")).sendKeys("123456")

});

Then('o usuario vizualiza a pagina', {timeout: 15 * 1000}, async () => {
    // Write code here that turns the phrase above into concrete actions
    await driver.findElement(By.name("commit")).click()
    await driver.close()

});