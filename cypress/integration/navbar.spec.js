describe('My First Test', function () {
  it('Should pass!', function () {
    cy.visit('http://localhost:3000')
    cy.click('headlessui-menu-button-1')
    expect(true).to.equal(true)
  })
})
