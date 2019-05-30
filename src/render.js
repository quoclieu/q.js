const renderElement = node => {
  let nodeElement = document.createElement(node.type);

  // set attributes
  for (const [key, value] of Object.entries(node.attributes)) {
    nodeElement.setAttribute(key, value);
  }

  //set children
  node.children.forEach(child => {
    const childElement = render(child);
    nodeElement.appendChild(childElement);
  });
  return nodeElement;
};

const render = node => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  return renderElement(node);
};

export default render;
