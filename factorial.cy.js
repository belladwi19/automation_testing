import { faker } from '@faker-js/faker'

describe('factorial', () => {
  it('passes', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('input[name=input]').type(faker.random.numeric(2))
    cy.contains('Hitung Faktorial').click()
  })
  it('false', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('input[name=input]').type(faker.random.alpha(2))
    cy.contains('Hitung Faktorial').click()
  })
  it('false', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('input[name=input]').type(faker.random.numeric(3))
    cy.contains('Hitung Faktorial').click()
  })
})
