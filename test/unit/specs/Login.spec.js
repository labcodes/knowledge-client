import Login from '@/components/Login';

describe('Login.vue', () => {
  it('check if the component has correctly types.', () => {
    expect(typeof Login.name).to.equal('string');
    expect(typeof Login.data).to.equal('function');

    expect(typeof Login.methods.handleLogin).to.equal('function');
    expect(typeof Login.methods.emitEvent).to.equal('function');
    expect(typeof Login.methods.clearForm).to.equal('function');
  });

  it('check if the data will be set correctly.', () => {
    const ComponentData = Login.data();

    expect(typeof ComponentData).to.equal('object');

    expect(ComponentData.form.username).to.equal('');
    expect(ComponentData.form.password).to.equal('');
    expect(ComponentData.form.isLoading).to.equal(false);
  });
});
