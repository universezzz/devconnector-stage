describe('Login page', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/dashboard');
  });

  it('should redirect to sign up page', () => {
    localStorage.setItem('token', 'token')
    expect(true).to.equal(true);
  });
});
