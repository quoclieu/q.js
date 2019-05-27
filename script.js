const body = document.body;

const initialState = [
  {
    type: 'div',
    textNode: 'hello',
    class: 'container',
    children: [
      {
        type: 'ul',
        textNode: '',
        class: 'shopping-list',
        children: [
          {
            type: 'li',
            textNode: 'apples',
            class: 'list-item',
            children: []
          },
          {
            type: 'li',
            textNode: 'oranges',
            class: 'list-item',
            children: []
          }
        ]
      }
    ]
  }
];

const secondState = [
  {
    type: 'div',
    textNode: 'hello',
    class: 'container',
    children: [
      {
        type: 'ul',
        textNode: '',
        class: 'shopping-list',
        children: [
          {
            type: 'li',
            textNode: 'apples',
            class: 'list-item',
            children: []
          },
          {
            type: 'li',
            textNode: 'oranges',
            class: 'list-item',
            children: []
          }
        ]
      }
    ]
  }
];

// loop through elements in state
// create a the document element and append it to parent
// loop through children and do the same

const render = (nodes, parent) => {
  nodes.forEach(node => {
    const nodeElement = document.createElement(node.type);
    // refactor this part to check for children or parents
    nodeElement.textContent = node.textNode;
    nodeElement.className = node.class;
    ///////////////
    parent.appendChild(nodeElement);
    render(node.children, nodeElement);
  });
};

render(initialState, body);

// do a breadth first search to search for which child has changes
// if it hits something that is different - update that entire branch

const diff = (initialState, updatedState, parent) => {};

const equals = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};

const removeNodes = parent => {
  let firstChild = parent.firstChild;
  while (firstChild) {
    parent.removeChild(firstChild);
    firstChild = parent.firstChild;
  }
};

let a = document.querySelectorAll('ul');
console.log(a);
removeNodes(a);
