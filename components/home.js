import { p, h2, h3 } from '../src/element-tags';

const heading = {
  type: 'h1',
  style: {
    'font-size': '60px',
    color: '#bfe38b',
    'text-align': 'center'
  },
  children: ['Q.JS']
};

const square = {
  dragElement: e => {
    const body = document.body;
    if (square.drag) {
      body.style['user-select'] = 'none';
      const squareElement = document.querySelector('.square');
      let x = e.clientX - square.offsetX - squareElement.offsetLeft;
      let y = e.clientY - square.offsetY - squareElement.offsetTop;
      // if (x + 180 > body.clientWidth) {
      //   x = body.clientWidth - 180;
      // }
      // if (x < 0) {
      //   x = body.clientWidth + 180;
      // }
      // if (y + 40 > body.clientHeight) {
      //   y = body.clientHeight - 40;
      // }
      // if (y < 0) {
      //   y = body.clientHeight + 40;
      // }
      squareElement.style.transform = `translate(${x}px, ${y}px)`;
    }
  },
  type: 'div',
  style: {
    height: '40px',
    width: '180px',
    'background-color': 'red'
  },
  attributes: {
    class: 'square'
  },
  drag: false,
  offsetX: null,
  offsetY: null,
  events: {
    mousedown: e => {
      square.drag = true;
      square.offsetX = e.offsetX;
      square.offsetY = e.offsetY;
      const body = document.body;
      body.addEventListener('mousemove', e => square.dragElement(e));
    },
    mouseup: () => {
      const body = document.body;
      body.style['user-select'] = 'auto';
      square.drag = false;
      body.removeEventListener('mousemove', e => square.dragElement(e));
    }
  },
  children: ['I dont really work atm']
};

const button = {
  type: 'button',
  attributes: {
    type: 'button'
  },
  style: {
    padding: '20px',
    border: '1px solid black'
  },
  children: ['dont press this'],
  events: {
    click: () => {
      button.children = ['why'];
    }
  }
};

const textArticle = (heading, text) => {
  return {
    type: 'section',
    style: {
      width: '400px',
      margin: '20px'
    },
    children: [h3(heading), p(text)]
  };
};

const threeColumn = {
  type: 'section',
  style: {
    display: 'flex',
    'justify-content': 'space-between'
  },
  children: [
    textArticle(
      'JSX vs HTML?',
      "neither. we're going pure javascript objects. Every component and DOM node will be written as an object. "
    ),
    textArticle(
      'Component based',
      'Just like react and every other framework but a lot less powerful and a lot more messy'
    ),
    textArticle('why', 'yes')
  ]
};

export default {
  type: 'div',
  children: [
    heading,
    h2('a really bad Javascript library for building interfaces'),
    button,
    square,
    // square,
    // square,
    // square,
    h2('Why would anyone use this'),
    threeColumn,
    h2('Get started'),
    h2('Documentation'),
    h2('To do')
  ]
};
