describe('My HTML/JS Tests', () => {
  it('good addProduct stylo in commande.html', () => {
    //partir de index.html
    cy.visit("http://localhost:3000/index.html")
    //cliquer sur le lien comportant 'commande'
    cy.contains('commande').click()
    cy.wait(50)
    // Should be on a new URL which includes '/commande'
    cy.url().should('include', '/commande')
    // à compléter

    cy.get('#qte').clear().type('3').should('have.value', '3')

    cy.get('#btnAdd').trigger("click")

    cy.get("#bodyTableau")
    .find("tr")
    .then((row) => {
      //row.length will give you the row count
      cy.log(row.length);
    });

  })

  })







