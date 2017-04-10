import Vue from 'vue';
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

  it('check if the togglenavbar function change the isActive value.', () => {
    const ComponentData = Header.data();
    const vm = new Vue(Header).$mount();

    const isActive = ComponentData.isActive;

    vm.toggleNavbar();

    expect(isActive).to.equal(!vm.isActive);
  });
});
