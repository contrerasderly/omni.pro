import loginOnlineStorePage from '../../pages/desktop/loginOnlineStorePage'; 
import addToCartPage from '../../pages/desktop/addToCartPage';

describe('Add to shopping cart ', () => {
  beforeEach(() => {
    loginOnlineStorePage.navigate()
    loginOnlineStorePage.login('standard_user', 'secret_sauce')
    addToCartPage.verifyOnInventoryPage()
  })

  it('Add a product to cart', () => {
    addToCartPage.addProductToCart('Sauce Labs Backpack')
    addToCartPage.verifyProductCountInCart(1)
  })

  it('Add two products to cart and verify', () => {
    addToCartPage.addProductToCart('Sauce Labs Backpack')
    addToCartPage.addProductToCart('Sauce Labs Bike Light')
    addToCartPage.verifyProductCountInCart(2)
  })

  it('Go to cart from the icon', () => {
    addToCartPage.addProductToCart('Sauce Labs Backpack')
    addToCartPage.goToCart()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_item').should('have.length', 1)
    
  })
})