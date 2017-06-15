import Modal from '@/components/Modal';

describe('Modal.vue', () => {
  it('check if the component has correctly types.', () => {
    expect(typeof Modal.name).to.equal('string');
    expect(typeof Modal.data).to.equal('function');

    expect(typeof Modal.methods.closeModal).to.equal('function');
    expect(typeof Modal.methods.clearFields).to.equal('function');
    expect(typeof Modal.methods.addNewLink).to.equal('function');
  });

  it('check if the data will be set correctly.', () => {
    const ComponentData = Modal.data();

    expect(typeof ComponentData).to.equal('object');

    expect(ComponentData.form.url).to.equal('');
    expect(ComponentData.form.tags.length).to.equal(0);
  });
});
