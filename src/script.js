import render from './render';
import mount from './mount';

const app = {
  type: 'div',
  attributes: {
    class: 'container'
  },
  children: [
    {
      type: 'ul',
      children: [
        {
          type: 'li',
          class: 'list-item',
          children: ['apple']
        },
        {
          type: 'li',
          class: 'list-item',
          children: ['oranges']
        }
      ]
    }
  ]
};

let root = mount(render(app), document.getElementById('app'));
