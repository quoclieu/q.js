import render from './render';
import mount from './mount';
import diff from './diff';

const createVApp = count => {
  return {
    type: 'div',
    attributes: {
      datacount: count,
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
          },
          {
            type: 'li',
            class: 'list-item'
          }
        ]
      }
    ]
  };
};

const state1 = {
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
        },
        {
          type: 'li',
          class: 'list-item'
        }
      ]
    }
  ]
};

const state2 = {
  type: 'div',
  attributes: {
    class: 'container'
  },
  children: [
    {
      type: 'ul',
      children: [
        {
          type: 'div',
          class: 'list-item',
          children: ['apple']
        },
        {
          type: 'li',
          class: 'list-item',
          children: ['oranges']
        },
        {
          type: 'li',
          class: 'list-item',
          children: ['oranges']
        },
        {
          type: 'li',
          class: 'list-item',
          children: ['oranges']
        },
        {
          type: 'li',
          class: 'list-item',
          children: ['oranges']
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

// let oldApp = createVApp(0);

let root = mount(render(state1), document.getElementById('app'));
// let count = 0;

const patch = diff(state1, state2);
root = patch(root);

// setInterval(() => {
//   count++;
//   const newApp = createVApp(count);
//   // root = mount(render(newApp), root);
//   const patch = diff(oldApp, newApp);
//   root = patch(root);
//   // oldApp = newApp;
// }, 1000);
