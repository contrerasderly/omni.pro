class ModifyCartPage {
    elements = {
      title: () => cy.get('.title'),
      cartItems: () => cy.get('.cart_item'),
      removeButtonByProduct: (productName) =>
        cy.contains('.cart_item', productName).find('button'),
      checkoutButton: () => cy.get('[data-test="checkout"]')
    }
  
    verifyOnCartPage() {
      this.elements.title().should('have.text', 'Your Cart')
    }
  
    verifyProductInCart(productName) {
      cy.contains('.cart_item', productName).should('exist')
    }
  
    removeProduct(productName) {
      this.elements.removeButtonByProduct(productName).click()
    }
  
    goToCheckout() {
      this.elements.checkoutButton().click()
    }
  }
  
  module.exports = new ModifyCartPage()
  