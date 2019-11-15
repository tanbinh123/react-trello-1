describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it.skip('can login', () => {
    cy.contains('Log in').click()
    cy.contains('Submit').click()
    cy.get('body').should('contain', 'Welcome')
  })
})
