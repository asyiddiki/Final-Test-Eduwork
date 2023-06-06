/// <reference types="cypress" />
describe("API Testing for User Go Rest", () => {
  const baseUrl = Cypress.env("BASE_URL");
  const authToken = Cypress.env("API_KEY");
  it("Create New User", () => {
    const postBody = {
      name: "SArtika 2",
      gender: "male",
      email: "tono@mail.com",
      status: "active",
    };
    cy.request({
      method: "POST",
      url: `${baseUrl}/users`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: postBody,
    }).as("createUser");
    cy.get("@createUser").then((response) => {
      expect(response.status).to.equal(201);
      const { id, name, email, gender, status } = response.body;
      const responseBody = {
        id,
        name,
        email,
        gender,
        status,
      };
      expect(response.body).to.deep.include(responseBody);
    });
  });

  it("Get User Details", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users/2519229`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).as("GetUserDetails");
    cy.get("@GetUserDetails").then((response) => {
      const { id, name, email, gender, status } = response.body;
      const responseBody = {
        id,
        name,
        email,
        gender,
        status,
      };
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.include(responseBody);
    });
  });

  it("Update User Detail", () => {
    const requestBody = {
      name: "Sartika Cantik",
      gender: "female",
      email: "Tass@mail.com",
      status: "active",
    };

    cy.request({
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      url: `${baseUrl}/users/2519229`,
      body: requestBody,
    }).as("UpdateUserDetail");
    cy.get("@UpdateUserDetail").then((response) => {
      const { id, name, email, gender, status } = response.body;
      const responseBody = {
        id,
        name,
        email,
        gender,
        status,
      };
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.include(responseBody);
    });
  });

  it('Delete Existing User', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/users/2519229`,
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }).as('DeleteUser')
    cy.get('@DeleteUser').then(response => {
      expect(response.status).to.equal(204)

    })
  })
});
