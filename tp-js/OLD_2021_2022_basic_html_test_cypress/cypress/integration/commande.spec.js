describe('My HTML/JS Tests', () => {
 it('good addProduct stylo in commande.html', () => {
    //partir de index.html
    cy.visit("http://localhost:3000/index.html")
    //cliquer sur le lien comportant 'commande'
    cy.contains('commande').click()
    cy.wait(50)
    // Should be on a new URL which includes '/commande'
    cy.url().should('include', '/commande')
    cy.get('#selProd').select('stylo').should('have.value', 'p2')
    // Get an input, type data into it
    //and verify that the value has been updated
      cy.get('#qte').clear().type('3')
        .should('have.value', '3')
    //declencher click sur bouton ajouter
    cy.get('#btnAdd').click()
    cy.get('#selProd').select('cahier').should('have.value', 'p1')
        // Get an input, type data into it
        //and verify that the value has been updated
        cy.get('#qte').clear().type('4')
          .should('have.value', '4')
    //declencher click sur bouton ajouter
    cy.get('#btnAdd').click()
    cy.get('#bodyTableau tr:nth-child(1) td:nth-child(2)')
      .should('have.text','p2')
    cy.get('#bodyTableau tr:nth-child(1) td:nth-child(3)')
      .should('have.text','stylo')
    cy.get('#bodyTableau tr:nth-child(1) td:nth-child(5)')
      .should('have.text','3') //qte valant bien 3
    cy.get('#bodyTableau tr:nth-child(2) td:nth-child(3)')
      .should('have.text','cahier')
    })
})