import LinkCard from '@/components/LinkCard';

describe('LinkCard.vue', () => {
  it('check if the component has correctly types.', () => {
    expect(typeof LinkCard.name).to.equal('string');
    expect(typeof LinkCard.data).to.equal('function');
    expect(typeof LinkCard.props).to.equal('object');

    expect(typeof LinkCard.methods.copyToClipboard).to.equal('function');
    expect(typeof LinkCard.methods.shareFacebook).to.equal('function');
    expect(typeof LinkCard.methods.shareTwitter).to.equal('function');
    expect(typeof LinkCard.methods.makeUrl).to.equal('function');
  });

  it('check if the data will be set correctly.', () => {
    const ComponentData = LinkCard.data();

    expect(typeof ComponentData).to.equal('object');

    expect(ComponentData.fbLink).to.equal('');
    expect(ComponentData.twLink).to.equal('');
  });
});
