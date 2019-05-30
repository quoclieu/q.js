import createElement from './createElement';
import render from './render';
import mount from './mount';

const app = createElement({
  type: 'div',
  attributes: {
    id: 'container'
  },
  children: [
    'hello word',
    createElement({
      type: 'ul',
      attributes: {
        className: 'shopping list'
      },
      children: [
        createElement({
          type: 'li',
          children: ['apple']
        })
      ]
    })
  ]
});

let root = mount(render(app), document.getElementById('app'));
