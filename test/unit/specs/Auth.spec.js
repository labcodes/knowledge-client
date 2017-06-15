import Auth from '@/assets/js/Auth';

describe('Auth.', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set the data correctly.', () => {
    const credentials = {
      username: 'user',
      password: '123',
    };

    const auth = new Auth(credentials);

    expect(auth.data.username).to.be.equal('user');
    expect(auth.data.password).to.be.equal('123');
  });
});
