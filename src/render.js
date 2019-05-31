const render = node => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const { type = '', attributes = {}, children = [] } = node;
  const element = document.createElement(type);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  children.forEach(child => {
    const childElement = render(child);
    element.appendChild(childElement);
  });
  return element;
};

export default render;
