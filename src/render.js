const setStyle = (style = {}, element) => {
  for (const [key, value] of Object.entries(style)) {
    element.style[key] = value;
  }
  return element;
};

const setEvents = (events = {}, element) => {
  for (const [event, callback] of Object.entries(events)) {
    element.addEventListener(event, callback);
  }
};

const setChildren = (children = [], element) => {
  children.forEach(child => {
    const childElement = render(child);
    element.appendChild(childElement);
  });
};

const setAttributes = (attributes = {}, element) => {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
};

const render = node => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const { type, attributes, children, events, style } = node;
  let element = document.createElement(type);

  setAttributes(attributes, element);
  setChildren(children, element);
  setEvents(events, element);
  setStyle(style, element);

  return element;
};

export default render;
