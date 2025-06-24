describe('CSS Locators - MacBook Search', () => {
  it('Searches for MacBook and validates heading', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/');

    // Type "MacBook" into the search bar and press Enter (no need to click)
    cy.get('input[name="search"]:visible').first().type('MacBook{enter}');

    // Assert the search heading appears correctly
    cy.get('h1.h4').should('contain.text', 'Search - MacBook');

    // Optional: Check that at least one result is shown
    cy.get('.product-thumb h4 a').should('contain.text', 'MacBook');
  });
});

