import loginOnlineStorePage from '../../pages/desktop/loginOnlineStorePage'; 

describe ('Login Online Store', () => {

  beforeEach(() => {
    loginOnlineStorePage.navigate()
  })
  
  it('Successful login with valid user', () => {
    loginOnlineStorePage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
  })

  it('Login failed with incorrect credentials', () => {
    loginOnlineStorePage.login('fake_user', 'wrong_password')
    loginOnlineStorePage.elements.errorMessage().should('be.visible')
    .and('contain', 'Username and password do not match')
  })
})