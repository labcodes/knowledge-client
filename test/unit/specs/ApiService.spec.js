// import sinon from 'sinon';
import ApiService from '@/assets/js/ApiService';

describe('ApiService.', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set the apiUrl after create a new instance.', () => {
    const service = new ApiService();
    const apiUrl = 'http://localhost:3000/api';

    expect(service.apiUrl).to.be.equal(apiUrl);
  });
});
