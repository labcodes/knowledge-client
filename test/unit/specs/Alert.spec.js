import Alert from '@/assets/js/Alert';

describe('Alert.', () => {
  it('should set the alert as an error.', () => {
    const alert = new Alert();

    alert.error();

    expect(alert.alertType).to.be.equal('error');
  });

  it('should set the alert as a success.', () => {
    const alert = new Alert();

    alert.success();

    expect(alert.alertType).to.be.equal('success');
  });

  it('should set the alert as a warning.', () => {
    const alert = new Alert();

    alert.warning();

    expect(alert.alertType).to.be.equal('warning');
  });
});
