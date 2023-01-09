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

Given('usuario acessa menu de cadastro', {timeout: 15 * 1000}, async () => {
    // Write code here that turns the phrase above into concrete actions
    await driver.get("http://publicazo.insprak.com/")
    await driver.findElement(By.linkText("Cadastre-se")).click()

});

When('preenche campos nome, email, senha e confirmacao', {timeout: 15 * 1000}, async () => {
    // Write code here that turns the phrase above into concrete actions
    await driver.findElement(By.css(".col-md-4")).click()
    await driver.findElement(By.id("user_fullname")).sendKeys("sidnei")
    await driver.findElement(By.css(".row")).click()
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys("sid@gmail.com")
    await driver.findElement(By.css(".row")).click()
    await driver.findElement(By.id("user_password")).click()
    await driver.findElement(By.id("user_password")).sendKeys("123456")
    await driver.findElement(By.id("user_password_confirmation")).click()
    await driver.findElement(By.id("user_password_confirmation")).sendKeys("123456")

});

Then('o usuario foi cadastrado', {timeout: 15 * 1000}, async () => {
    // Write code here that turns the phrase above into concrete actions
    await driver.findElement(By.name("commit")).click()
    await driver.close()

});