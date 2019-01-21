describe('My First Test', function() {
    it('clicking "type" navigates to a new url', function() {
        cy.visit('http://make-everything-ok.com/')
    
        cy.get('#button').should('be.visible')
        cy.get('#progress').should('be.hidden')
        cy.get('#answer').should('be.hidden')
        cy.get('#button').click()

        cy.get('#button').should('be.visible')
        cy.get('#progress').should('be.visible')
        cy.get('#answer').should('be.hidden') 
        
        cy.pause()

        cy.get('#button').should('be.visible')
        cy.get('#progress').should('be.hidden')
        cy.get('#answer').should('be.visible') 
    })
})