// https://docs.cypress.io/api/introduction/api.html

describe('Home Page Test', () => {
  it('Visits the app home page', () => {
    cy.visit('/')
    cy.contains('p', 'Welcome to the Vue.js Starter SPA')
  })
})

describe('Search Results Page Test', () => {
  it('Visits the app search results page', () => {
    cy.visit('/search/test')
    cy.contains('p', 'Search results for "test"')
  })
})
