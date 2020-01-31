const username = 'testdrive@react-trello.now.sh'
const password = 'testdrive'

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Click on `Get Started` should route to /login', () => {
    cy.location('pathname').should('be', '/')
    cy.contains('Get Started').click()
    cy.location('pathname').should('be', '/login')
  })

  it('Should login via Sign in button', () => {
    cy.contains(/sign in/i).click()

    cy.get('input[type="email"]').type(username)
    cy.get('input[type="password"]').type(password)
    cy.get('[type="submit"]').click()

    cy.location('pathname').should('be', '/app')
  })

  // not login with false credentials
  it('Should not login with wrong credentials', () => {
    const falsePassword = 'asdf'

    cy.visit('/app')
    cy.location('pathname').should('be', '/')
    cy.contains('Log in').click()

    cy.get('input[type="email"]').type(username)
    cy.get('input[type="password"]').type(falsePassword)
    cy.get('[type="submit"]').click()

    cy.location('pathname').should('not.be', '/app')
  })
})
