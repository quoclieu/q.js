export const custom = (element, children) => {
  return {
    type: element,
    children
  };
};

const createVirtualNode = tag => {
  return (
    children = '',
    { style = {}, events = {}, props = {}, attributes = {} } = {}
  ) => {
    return {
      type: tag,
      style,
      events,
      props,
      attributes,
      children: [children]
    };
  };
};

export const h1 = createVirtualNode('h1');
export const h2 = createVirtualNode('h2');
export const h3 = createVirtualNode('h3');
export const h4 = createVirtualNode('h4');
export const p = createVirtualNode('p');
