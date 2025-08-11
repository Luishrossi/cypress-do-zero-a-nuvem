// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', teste => {
    cy.visit('./src/index.html')
    cy.get('#firstName').should('be.visible').type('Luis H', { delay: 0 })
    cy.get('#firstName').should('have.value', 'Luis H')

    cy.get('#lastName').should('be.visible').type('Rossi', { delay: 0 })
    cy.get('#lastName').should('have.value', 'Rossi')

    cy.get('#email').should('be.visible').type('rossi@gmail.com', { delay: 0 })
    cy.get('#email').should('have.value', 'rossi@gmail.com')

    cy.get('#open-text-area').should('be.visible').type('Luis H Rossi', { delay: 0 })
    cy.get('#open-text-area').should('have.value', 'Luis H Rossi')

    cy.contains('.button', 'Enviar').click()

    cy.get('span.success').should('be.visible').and('contain', 'Mensagem enviada com sucesso.')

})