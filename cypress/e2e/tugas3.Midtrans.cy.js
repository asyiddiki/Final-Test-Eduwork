/// <reference types="cypress" />

describe('Testing Midtrans Demo Website', () => {
	beforeEach(() => {
		cy.visit('https://demo.midtrans.com/')
	})

	it('Click Button Buy Now', () => {
		cy.get('.buy').click()
		cy.get('[data-reactid=".0.0.1.0.1.0.0.0.0"]').should('have.text', 'Product')
	})

	it('Should display succesfull checkout', () => {
		// Using fixture data
		cy.fixture('data').then(user => {
			const name = user.detailedform.name
			const email = user.detailedform.email
			const phone = user.detailedform.phone
			const city = user.detailedform.city
			const address = user.detailedform.address
			const postalCode = user.detailedform.postalCode

			// checkout using custom commands
			cy.filledCheckout(name, email, phone, city, address, postalCode)

			// //Assert the Checkout button
			cy.get('iframe[id="snap-midtrans"]')
		})
	})

	it('Should display error checkout', () => {
		// Using fixture data
		cy.fixture('data').then(user => {
			const name = user.unDetailedform.name
			const email = user.unDetailedform.email
			const phone = user.unDetailedform.phone
			const city = user.unDetailedform.city
			const address = user.unDetailedform.address
			const postalCode = user.unDetailedform.postalCode

			// checkout using custom commands
			cy.unfilledCheckout(name, email, phone, city, address, postalCode)

			// //Assert the error message
			cy.get('[data-reactid=".0.0.0.2.0.1.0.0:0"]').should(
				'have.text',
				'Sorry, something went wrong.'
			)
		})
	})
})
