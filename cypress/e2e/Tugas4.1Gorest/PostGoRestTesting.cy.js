/// <reference types="cypress" />
describe("API Testing for Post Go Rest", () => {
  const baseUrl = Cypress.env("BASE_URL");
  const authToken = Cypress.env("API_KEY");
  it("Create a user post", () => {
    const postBody = {
      title: "Hasbi Diki",
      body: "ini postingan hasbi",
    };
    cy.request({
      method: "POST",
      url: `${baseUrl}/users/2585/posts`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: postBody,
    }).as("createUserPost");
    cy.get("@createUserPost").then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.deep.include(postBody);
    });
  });

  it("Create a user comment", () => {
    const postBody = {
      post_id: 41493,
      name: "Sartika Susanti",
      email: "Sartika@mail.com",
      body: "Sartika mencintai hasbi",
    };
    cy.request({
      method: "POST",
      url: `${baseUrl}/comments`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: postBody,
    }).as("createUserComment");
    cy.get("@createUserComment").then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.deep.include(postBody);
    });
  });

  it("Create a user todo", () => {
    const postBody = {
      user_id: 2349061,
      title: "User todo nih",
      due_on: "2023-06-27T00:00:00.000+05:30",
      status: "completed",
    };
    cy.request({
      method: "POST",
      url: `${baseUrl}/users/2858/todos`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: postBody,
    }).as("createUserTodo");
    cy.get("@createUserTodo").then((response) => {
      expect(response.status).to.equal(201);
      const responseBody = {
        id: response.body.id,
        user_id: response.body.user_id,
        due_on: response.body.due_on,
        title: response.body.title,
        status: response.body.status
      }
      expect(response.body).to.deep.include(responseBody);
    });
  });

  it("Retrieves posts", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users/2585/posts`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).as("getUserPosts");
    cy.get("@getUserPosts").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array").that.is.not.empty;
    });
  });

  it("Retrieves comments", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/posts/41493/comments`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).as("getUserComments");
    cy.get("@getUserComments").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array").that.is.not.empty;
    });
  });

  it("Retrieves todos", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users/2858/todos`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).as("getUserTodo");
    cy.get("@getUserTodo").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array").that.is.not.empty;
    });
  });
});
