export const custom = (element, children) => {
  return {
    type: element,
    children
  };
};

export const h1 = text => {
  return {
    type: 'h1',
    children: [text]
  };
};

export const h2 = text => {
  return {
    type: 'h2',
    children: [text]
  };
};

export const h3 = text => {
  return {
    type: 'h3',
    children: [text]
  };
};

export const p = text => {
  return {
    type: 'p',
    children: [text]
  };
};
