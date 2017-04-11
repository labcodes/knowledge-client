import Storage from '@/assets/js/Localstorage';

describe('Localstorage.', () => {
  it('should set a new value into localstorage.', () => {
    const storage = new Storage('userInfo');
    storage.set({ username: 'user', token: '123' });

    const userGetInfo = storage.get();

    expect(storage.key).to.be.equal('userInfo');
    expect(userGetInfo.username).to.be.equal('user');
    expect(userGetInfo.token).to.be.equal('123');
  });

  it('should remove the value into localstorage', () => {
    const storage = new Storage('newUser');

    storage.set({ username: 'user', token: '123' });
    storage.clear();

    const userGetInfo = storage.get();

    expect(userGetInfo).to.be.equal(null);
  });
});
