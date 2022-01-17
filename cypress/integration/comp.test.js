import { Form } from '../../src/App.js'
import { mount } from '@cypress/react'
import React from 'react'
describe('My First Test', function () {
  it('Should pass!', function () {
    //cy.visit('http://localhost:3000')
    mount(<Form />)

    cy.get('span')
      .first()
      .should('haveText', '1/2')
  })
})
