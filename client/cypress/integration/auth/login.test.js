describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should redirect to dashboard page if user successfully logged in', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: '/api/auth',
      status: 200,
      response: 'fixture:token',
    }).as('login');

    cy.get('.form-group input[type="email"]').type('universezxcv@gmail.com');

    cy.get('.form-group input[type="password"]').type('333333');

    cy.get('.form input[type="submit"]').click();

    cy.wait('@login');

    cy.location('pathname').should('eq', '/dashboard');
  });

  it('should show an error messages if data is not correct', async () => {
    const errorsMock = await cy.fixture('auth-validation-errors');

    cy.server();
    cy.route({
      method: 'POST',
      url: '/api/auth',
      status: 400,
      response: errorsMock,
    }).as('login');

    cy.get('.form-group input[type="email"]').type('@gmail.com');

    cy.get('.form-group input[type="password"]').type('s');

    cy.get('.form input[type="submit"]').click();

    cy.wait('@login');

    cy.location('pathname').should('eq', '/login');

    const errorsContainers = cy.get('.alert.alert-danger');
    errorsContainers.should('have.length', 2);
    errorsContainers.each((error, idx) => {
      expect(error.text()).to.equal(errorsMock.errors[idx].msg);
    });
  });

  it('should redirect to sign up page', () => {
    cy.get('.my-1 a').click();

    cy.location('pathname').should('eq', '/register');
  });
});
