class LoginOnlineStorePage {

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    navigate() {
        cy.visit('https://www.saucedemo.com/')
    }

    typeUsername(username){
        this.elements.usernameInput().type(username)
    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickBtn(){
        this.elements.loginBtn().click()
    }

    login(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickBtn()
    }
}

module.exports = new LoginOnlineStorePage();