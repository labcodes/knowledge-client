import FetchMock from 'fetch-mock';
import Auth from '@/assets/js/Auth';

describe('Auth.', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
    FetchMock.restore();
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

  it('should make the login correctly.', () => {
    const credentials = {
      username: 'user',
      password: '123',
    };

    FetchMock.mock('/accounts/login/', credentials);

    const auth = new Auth(credentials);
    const login = auth.login();

    console.warn(login);
  });
});
