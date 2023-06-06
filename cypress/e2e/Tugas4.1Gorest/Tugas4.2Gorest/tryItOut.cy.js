/// <reference types="cypress" />

describe('Testing gorest API', () => {

  it('Validate GET of Gorest API', () => {
      cy.request('https://gorest.co.in/public/v2/users/2277393').as('get')
      cy.get('@get').its('body').should('contain' ,{ id :2277393})
  });

  it('Validate POST of Gorest API with Auth Token', () => {

      cy.request({ 

          method: 'POST',
          url: 'https://gorest.co.in/public/v2/users/',

          headers: {
          authorization: 'Bearer 129fb26e624508807ea05814ae9b769bb13b75c1e08bfcc2875dc608ad8cd93e'
           },

           body: {
            "name": "Hasbi Diki 2",
            "gender": "male",
            "email": "hasbi1@mail.com",
            "status": "active"
          },
          
          failOnStatusCode: false
        }).as('postWithAuth')

        cy.get('@postWithAuth').its('status').should('equal', 201)

  })

  it('Validate POST of Gorest API without Auth Token', () => {
      cy.request({ 

          method: 'POST',
          url: 'https://gorest.co.in/public/v2/users/',

  
           body: {
            "name": "Hasbi Diki 2",
            "gender": "male",
            "email": "hasbi1@mail.com",
            "status": "active"
           },
          
          failOnStatusCode: false
        }).as('postWithoutAuth')

        cy.get('@postWithoutAuth').its('body').should('contain', {message: "Authentication failed"})
      })

  it('Validate PUT of Gorest API with auth token', () => {
      cy.request({ 
          headers: {
          authorization: 'Bearer 129fb26e624508807ea05814ae9b769bb13b75c1e08bfcc2875dc608ad8cd93e'
      },
          method: 'PUT',
          url: 'https://gorest.co.in/public/v2/users/2277393',
          failOnStatusCode: false
        }).as('putWithAuth'),
      cy.get('@putWithAuth').its('body').should('contain' ,{ id :2277393})
  });

  it('Validate PUT of Gorest API without auth token', () => {
      cy.request({
          method: 'PUT',
          url: 'https://gorest.co.in/public/v2/users/2277393',
          failOnStatusCode: false
        }).as('putWithoutAuth')
      cy.get('@putWithoutAuth').its('status').should('equal' ,401)
      cy.get('@putWithoutAuth').its('body').should('contain', {message: "Authentication failed"})
  });

  // it('Validate DELETE of Gorest API with token', () => {
  //     cy.request({ 
  //         headers: {
  //         authorization: 'Bearer 129fb26e624508807ea05814ae9b769bb13b75c1e08bfcc2875dc608ad8cd93e'
  //     },

  //         method: 'DELETE',
  //         url: 'https://gorest.co.in/public/v2/users/1397',
  //         failOnStatusCode: false
  //       }).as('deleteWithAuth'),{}
  //     cy.get('@deleteWithAuth').its('status').should('equal' ,204)
  // });

  // it('Validate DELETE of Gorest API without token', () => {
  //     cy.request({ 
  //         method: 'DELETE',
  //         url: 'https://gorest.co.in/public/v2/users/1397',
  //         failOnStatusCode: false
  //       }).as('deleteWithoutAuth'),{}
  //     cy.get('@deleteWithoutAuth').its('status').should('equal' ,401)
  // });

});