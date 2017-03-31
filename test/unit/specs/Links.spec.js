import Links from '@/components/Links';

describe('Links.vue', () => {
  it('check if the component has correctly types.', () => {
    expect(typeof Links.name).to.equal('string');
    expect(typeof Links.data).to.equal('function');

    expect(typeof Links.methods.handleList).to.equal('function');
  });

  it('check if the data will be set correctly.', () => {
    const ComponentData = Links.data();

    expect(typeof ComponentData).to.equal('object');

    expect(ComponentData.linksArray.length).to.equal(0);
  });
});
