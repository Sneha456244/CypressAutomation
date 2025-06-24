describe('My First Test', () => {

  it('Verify title - positive', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM')
  })

  it('Verify title - negative', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('not', 'OrangeHRM123') // Changed to 'not.eq' for a negative test
  })

})
