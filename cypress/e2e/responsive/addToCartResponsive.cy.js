import loginOnlineStorePage from '../../pages/desktop/loginOnlineStorePage'
import addToCartPage from '../../pages/desktop/addToCartPage'

describe('Responsive tests - Mobile View (iPhone 8)', () => {
  beforeEach(() => {
    cy.viewport('iphone-8')
    loginOnlineStorePage.navigate()
  })

  it('Successful login in mobile view', () => {
    loginOnlineStorePage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    addToCartPage.elements.title().should('be.visible')
  })

  it('Open navigation menu', () => {
    loginOnlineStorePage.login('standard_user', 'secret_sauce')
    cy.get('#react-burger-menu-btn').click() 
    cy.get('.bm-item-list').should('be.visible') 
  })

  it('Add product to cart in mobile view', () => {
    loginOnlineStorePage.login('standard_user', 'secret_sauce')
    addToCartPage.addProductToCart('Sauce Labs Backpack')
    addToCartPage.elements.cartBadge().should('contain', '1')
  })
})