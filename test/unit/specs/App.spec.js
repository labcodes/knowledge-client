import App from '@/App';

describe('App.vue', () => {
  it('check if the component has correctly types.', () => {
    expect(typeof App.name).to.equal('string');
    expect(typeof App.data).to.equal('function');

    expect(typeof App.methods.handleLogin).to.equal('function');
    expect(typeof App.methods.handleLogout).to.equal('function');
    expect(typeof App.methods.handleUserLogged).to.equal('function');
    expect(typeof App.methods.handleLink).to.equal('function');
    expect(typeof App.methods.handleError).to.equal('function');
  });

  it('check if the data will be set correctly.', () => {
    const ComponentData = App.data();

    expect(typeof ComponentData).to.equal('object');

    expect(ComponentData.isLogged).to.equal(false);
  });
});
