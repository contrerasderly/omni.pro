import loginOnlineStorePage from '../../pages/desktop/loginOnlineStorePage'
import addToCartPage from '../../pages/desktop/addToCartPage'
import modifyCartPage from '../../pages/desktop/modifyCartPage'

describe('Shopping cart', () => {
  beforeEach(() => {
    loginOnlineStorePage.navigate()
    loginOnlineStorePage.login('standard_user', 'secret_sauce')
    addToCartPage.addProductToCart('Sauce Labs Backpack')
    addToCartPage.addProductToCart('Sauce Labs Bike Light')
    addToCartPage.goToCart()
    modifyCartPage.verifyOnCartPage()
  })

  it('Verify that the products are in the cart', () => {
    modifyCartPage.verifyProductInCart('Sauce Labs Backpack')
    modifyCartPage.verifyProductInCart('Sauce Labs Bike Light')
    modifyCartPage.elements.cartItems().should('have.length', 2)
  })

  it('Remove a product from the cart', () => {
    modifyCartPage.removeProduct('Sauce Labs Backpack')
    modifyCartPage.elements.cartItems().should('have.length', 1)
    modifyCartPage.verifyProductInCart('Sauce Labs Bike Light')
  })

  it('Navigate to checkout from the cart', () => {
    modifyCartPage.goToCheckout()
    cy.url().should('include', '/checkout-step-one.html')
  })
})