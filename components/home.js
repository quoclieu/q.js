import { p, h2, h3 } from '../q.js';
import Shape from './Shape';

const heading = {
  type: 'h1',
  style: {
    'font-size': '60px',
    color: '#bfe38b',
    'text-align': 'center'
  },
  children: ['q.JS']
};

const square = {
  function(a, b) {
    this.a = a;
    this.b = b;
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
  props: {
    drag: false,
    offsetX: null,
    offsetY: null
  },
  events: {
    mouseenter: () => {
      square.style.cursor = 'grab';
      square.style['background-color'] = 'blue';
    },
    mousedown: e => {
      square.style.cursor = 'grabbing';
      square.props.drag = true;
      square.props.offsetX = e.offsetX;
      square.props.offsetY = e.offsetY;
      const body = document.body;
      body.addEventListener('mousemove', e => square.dragElement(e));
      body.addEventListener('mouseleave', e => {
        body.style['user-select'] = 'auto';
        square.props.drag = false;
        body.removeEventListener('mousemove', e => square.dragElement(e));
      });
    },
    mouseup: () => {
      square.style.cursor = 'grab';
      const body = document.body;
      body.style['user-select'] = 'auto';
      square.props.drag = false;
      body.removeEventListener('mousemove', e => square.dragElement(e));
    }
  },
  dragElement: e => {
    const body = document.body;
    if (square.props.drag) {
      body.style['user-select'] = 'none';
      const squareElement = document.querySelector('.square');
      let x = e.pageX - square.props.offsetX - squareElement.offsetLeft;
      let y = e.pageY - square.props.offsetY - squareElement.offsetTop;
      if (x + 180 > body.clientWidth) {
        x = body.clientWidth - 180;
      }
      if (x < 0) {
        x = 0;
      }
      squareElement.style.transform = `translate(${x}px, ${y}px)`;
    }
  },
  children: ['drag me']
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

const toggleLightModeBtn = {
  type: 'button',
  attributes: {
    type: 'button'
  },
  style: {
    padding: '10px',
    border: '1px solid black'
  },
  children: ['Toggle Dark Mode'],
  props: {
    darkMode: true
  },
  events: {
    click: () => {
      if (toggleLightModeBtn.darkMode) {
        toggleLightModeBtn.darkMode = false;
        document.body.className = 'light-mode';
      } else {
        toggleLightModeBtn.darkMode = true;
        document.body.className = '';
      }
    }
  }
};

const createbutton = ({ style = {}, text = '' }) => {
  return {
    type: 'button',
    attributes: {
      type: 'button'
    },
    style: {},
    children: [text]
  };
};

const codeBlock = code => {
  return {
    type: 'code',
    children: [code]
  };
};

const article = (h, t) => {
  return {
    type: 'section',
    style: {
      margin: '20px',
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': 0,
      'text-align': 'left'
    },
    children: [h3(h, { style: { 'text-align': 'center' } }), p(t)]
  };
};

const columns = children => {
  return {
    type: 'section',
    style: {
      display: 'flex',
      'justify-content': 'space-between'
    },
    children
  };
};

const libraryDescription = columns([
  article(
    'JSX vs HTML?',
    "Neither. we're going pure javascript objects. Every component and DOM node will be written as an object. "
  ),
  article(
    'Component based',
    'Components can be built much quicker, more intuitive, less files, less libraries '
  ),
  article(
    'SPA',
    "Built to make really simple single page applications. Theres no routing because I don't know how to build it. It's a feature."
  )
]);

const noHtml = article(
  'No HTML or JSX',
  'Everything is constructed from virtual nodes(Javascript Objects). Each virtual must contain a type or a text string for text nodes. Your virtual node can take in styles, attributes such as classes and ids, props, Javascript events and other children virtual nodes.All HTML5 elements can be rendered through the prebuilt functions.'
);

const noCSS = article(
  'Styling',
  'q.JS has one global style sheet. Component styling is done inline. Following the atomic css pattern is also a good idea.'
);

const rendering = article(
  'Rendering',
  'Combine all your components into a single export. Import it into the App.js file and render it in the children'
);

const components = article(
  'Components',
  'All components are built using javascript objects.'
);

const someShape = new Shape(30, 40).create();

export default {
  type: 'div',
  children: [
    someShape,
    heading,
    toggleLightModeBtn,
    square,
    h2('a really bad Javascript library for building simple interfaces'),
    button,
    h2('Why would anyone use this'),
    libraryDescription,
    columns([noHtml]),
    rendering,
    h2('Get started'),

    h2('Documentation'),
    h2('Try it out'),
    h2('To do')
  ]
};
