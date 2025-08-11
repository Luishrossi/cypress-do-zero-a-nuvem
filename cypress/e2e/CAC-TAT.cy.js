describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() =>{
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
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

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    cy.get('.button')
      .click()

    cy.get('span.error')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
    })

  it('telefone', () => {


    cy.get('#phone').should('be.visible').type('dsadsaa')
    cy.get('#phone').should('be.empty')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.get('#firstName').should('be.visible').type('Luis H', { delay: 0 })
    cy.get('#firstName').should('have.value', 'Luis H')

    cy.get('#lastName').should('be.visible').type('Rossi', { delay: 0 })
    cy.get('#lastName').should('have.value', 'Rossi')

    cy.get('#email').should('be.visible').type('rossi@gmail.com', { delay: 0 })
    cy.get('#email').should('have.value', 'rossi@gmail.com')

    cy.get('#open-text-area').should('be.visible').type('Luis H Rossi', { delay: 0 })
    cy.get('#open-text-area').should('have.value', 'Luis H Rossi')

    cy.get('#phone-checkbox').should('be.visible').click()
    // cy.get('#phone').should('be.visible').type('123456789')
    // cy.get('#phone').should('have.value', '123456789')
    cy.contains('.button', 'Enviar').click()
    cy.get('span.error').should('be.visible').and('contain', 'Valide os campos obrigatórios!')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

    cy.get('#firstName').should('be.visible').type('Luis H', { delay: 0 })
    cy.get('#firstName').should('have.value', 'Luis H').clear().should('have.value', '')

    cy.get('#lastName').should('be.visible').type('Rossi', { delay: 0 })
    cy.get('#lastName').should('have.value', 'Rossi').clear().should('have.value', '')

    cy.get('#email').should('be.visible').type('rossi@gmail.com', { delay: 0 })
    cy.get('#email').should('have.value', 'rossi@gmail.com').clear().should('have.value', '')

    cy.get('#open-text-area').should('be.visible').type('Luis H Rossi', { delay: 0 })
    cy.get('#open-text-area').should('have.value', 'Luis H Rossi').clear().should('have.value', '')   
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {

    cy.contains('.button', 'Enviar').click()
    cy.get('span.error')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')

  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
  })

})
