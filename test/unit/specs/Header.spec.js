import Header from '@/components/Header';

describe('Header.vue', () => {
  it('check if the component has correctly types.', () => {
    expect(typeof Header.name).to.equal('string');
    expect(typeof Header.data).to.equal('function');
    expect(typeof Header.props).to.equal('object');
    expect(typeof Header.methods.toggleNavbar).to.equal('function');
  });

  it('check if the data will be set correctly.', () => {
    const ComponentData = Header.data();
    const repoUrl = 'https://github.com/labcodes/knowledge-client';

    expect(typeof ComponentData).to.equal('object');

    expect(ComponentData.isActive).to.equal(false);
    expect(ComponentData.repoUrl).to.equal(repoUrl);
  });
});
