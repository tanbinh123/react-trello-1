describe('Board', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Log in').click()
    cy.contains('Submit').click()
  })
  it.skip('can create and delete a list', () => {
    cy.get('div[data-testid="input-addlist"]').type('testcolumn{enter}')
    cy.get('div[data-testid="list"]').should('exist')
    cy.get('[data-testid="delete-button-list"]').click()
    cy.get('div[data-testid="list"]').should('not.exist')
  })
})
