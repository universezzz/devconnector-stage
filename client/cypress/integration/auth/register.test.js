describe('Register page', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('should redirect to dashboard page if user successfully registered', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: '/api/users',
      status: 200,
      response: 'fixture:token',
    }).as('register');

    cy.get('.form-group input[name="name"]').type('Artsiom');

    cy.get('.form-group input[type="email"]').type('universezxcv@gmail.com');

    cy.get('.form-group input[name="password"]').type('333333');

    cy.get('.form-group input[name="confirmPassword"]').type('333333');

    cy.get('.form input[type="submit"]').click();

    cy.wait('@register');

    cy.location('pathname').should('eq', '/dashboard');
  });

  it('should show an error messages if passwords do not match', async () => {
    cy.get('.form-group input[name="name"]').type('Artsiom');

    cy.get('.form-group input[type="email"]').type('universezxcv@gmail.com');

    cy.get('.form-group input[name="password"]').type('222222');

    cy.get('.form-group input[name="confirmPassword"]').type('333333');

    cy.get('.form input[type="submit"]').click();

    cy.get('.alert.alert-danger').should('have.text', 'Passwords do not match');
  });

  it.only('should show an error messages if data is not correct', async () => {
    const errorsMock = await cy.fixture('auth-validation-errors');

    cy.server();
    cy.route({
      method: 'POST',
      url: '/api/users',
      status: 400,
      response: errorsMock,
    }).as('register');

  cy.get('.form-group input[name="name"]').type('Artsiom');

  cy.get('.form-group input[type="email"]').type('@gmail.com');

  cy.get('.form-group input[name="password"]').type('test');

  cy.get('.form-group input[name="confirmPassword"]').type('test');

  cy.get('.form input[type="submit"]').click();

    cy.wait('@register');

    cy.location('pathname').should('eq', '/register');

    const errorsContainers = cy.get('.alert.alert-danger');
    errorsContainers.should('have.length', 2);
    errorsContainers.each((error, idx) => {
      expect(error.text()).to.equal(errorsMock.errors[idx].msg);
    });
  });

  it('should redirect to sign up page', () => {
    cy.get('.my-1 a').click();

    cy.location('pathname').should('eq', '/login');
  });
});
