describe('My First Test', function () {
  let inputIds = [0, 1, 2]

  beforeEach(() => {
    inputIds = [0, 1, 2]
  })

  const multipleChekedControl = () => {
    inputIds.forEach(inputId =>
      cy
        .get(`input[name="answer-${inputId}"]`)
        .check()
        .should('be.checked')
    )

    inputIds.splice(-1)

    inputIds.forEach(inputId =>
      cy.get(`input[name="answer-${inputId}"]`).should('not.be.checked')
    )
  }

  it('Should pass!', function () {
    cy.visit('http://localhost:3000')
  })

  it('header text should be equal to expected', function () {
    cy.get('#header').should('be.visible')
    cy.get('#header > span').should('have.text', '1 / 2')
  })

  it('button text should be equal to expected', function () {
    cy.get('button').should('have.text', 'Next Question')
  })

  it('every checkbox should be unchecked', function () {
    inputIds.forEach(inputId =>
      cy.get(`input[name="answer-${inputId}"]`).should('not.be.checked')
    )
  })

  it('checkbox components tested for multiple checking', function () {
    multipleChekedControl()
  })

  it('after button clicked header text should change', function () {
    cy.get('button').click()
    cy.get('#header > span').should('have.text', '2 / 2')
    cy.get('button').should('have.text', 'Next Question')
  })

  it('checkbox components tested for multiple checking', function () {
    multipleChekedControl()
  })

  it('after button clicked form should complete', function () {
    cy.get('button').click()
    cy.get('h5').should('have.text', 'Test is completed')
  })
})
