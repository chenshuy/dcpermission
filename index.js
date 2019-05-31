import Component from './src/Component';
Component.install = (Vue) => {
  Vue.component(Component.name, Component);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Component);
}

export default Component;
