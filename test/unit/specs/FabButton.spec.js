import FabButton from '@/components/FabButton';

describe('FabButton.vue', () => {
  it('check if the component has correctly types.', () => {
    expect(typeof FabButton.name).to.equal('string');
    expect(typeof FabButton.data).to.equal('function');

    expect(typeof FabButton.methods.openModal).to.equal('function');
  });

  it('check if the data will be set correctly.', () => {
    const ComponentData = FabButton.data();

    expect(typeof ComponentData).to.equal('object');
    expect(ComponentData.modalActive).to.equal(false);
  });
});
