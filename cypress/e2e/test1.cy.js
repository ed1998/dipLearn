describe('template spec', () => {
  it('passes', () => {
    cy.wait(500)
    cy.visit('https://google.com.co')
  })
})