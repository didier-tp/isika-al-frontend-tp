describe('test commande', () => {
    it('ajout de ligne tableau', () => {
  
      //partir de index.html
      cy.visit("http://localhost:3000/commande.html")
  
      // Get an input, type data into it 
      //and verify that the value has been updated
      cy.get('#qte')
        .clear()
        .type('6')
        .should('have.value', '6')
  
      //declencher click sur bouton addition
      cy.get('#btnAdd')
        .click()
  
      //vérifier que le tableau comporte au moins une ligne de données
      cy.get('#bodyTableau')
        .should('have.length', '1')

      //vérifier que la colonne quantite de cette ligne vaut bien 5
        cy.get('#bodyTableau tr td:nth-child(5)')
        .should('have.text', '6')
    })
  
  
  })