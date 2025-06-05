class AddToCartPage {
    elements = {
      title: () => cy.get('.title'), // "Products"
      addToCartButtonByName: (productName) =>
        cy.contains('.inventory_item', productName).find('button'),
      cartIcon: () => cy.get('.shopping_cart_link'),
      cartBadge: () => cy.get('.shopping_cart_badge'),
      productItems: () => cy.get('.inventory_item')
    }
  
    verifyOnInventoryPage() {
      this.elements.title().should('have.text', 'Products')
    }
  
    addProductToCart(productName) {
      this.elements.addToCartButtonByName(productName).click()
    }
  
    goToCart() {
      this.elements.cartIcon().click()
    }
  
    verifyProductCountInCart(count) {
      this.elements.cartBadge().should('have.text', count.toString())
    }
  }
  
  module.exports = new AddToCartPage()