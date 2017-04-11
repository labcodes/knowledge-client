import ApiService from '@/assets/js/ApiService';

describe('ApiService.', () => {
  it('ao ser instanciado deve conter uma apiUrl.', () => {
    const service = new ApiService();
    const apiUrl = 'http://localhost:3000/api';

    expect(service.apiUrl).to.be.equal(apiUrl);
  });
});
