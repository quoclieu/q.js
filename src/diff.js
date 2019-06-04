import render from './render';

const zip = (xs, ys) => {
  const zipped = [];
  for (let i = 0; i < Math.max(xs.length, ys.length); i++) {
    zipped.push([xs[i], ys[i]]);
  }
  return zipped;
};

const updateStyles = (oldStyle = {}, newStyle = {}, node) => {
  for (const [key, value] of Object.entries(oldStyle)) {
    node.style[key] = value;
  }
  for (const [key] of Object.entries(oldStyle)) {
    if (!(key in newStyle)) {
      node.removeProperty(key);
    }
  }
  return node;
};

const updateAttributes = (oldAtt = {}, newAtt = {}, node) => {
  for (const [key, value] of Object.entries(oldAtt)) {
    node.setAttribute(key, value);
  }
  for (const [key] of Object.entries(oldAtt)) {
    if (!(key in newAtt)) {
      node.removeAttribute(key);
    }
  }
  return node;
};

const diffChildren = (oldChildren = [], newChildren = []) => {
  const patches = [];
  oldChildren.forEach((oldChild, i) => {
    patches.push(diff(oldChild, newChildren[i]));
  });

  const additionalPatches = [];
  for (const additionalChild of newChildren.slice(oldChildren.length)) {
    additionalPatches.push(DOMNode => {
      DOMNode.appendChild(render(additionalChild));
      return DOMNode;
    });
  }

  return parent => {
    for (const [patch, child] of zip(patches, parent.childNodes)) {
      patch(child);
    }

    additionalPatches.forEach(patch => patch(parent));

    return parent;
  };
};

const diff = (oldNode, newNode) => {
  if (!newNode) {
    return DOMNode => {
      DOMNode.remove();
      return undefined;
    };
  }

  if (typeof oldNode === 'string' || typeof newNode === 'string') {
    if (oldNode !== newNode) {
      return DOMNode => {
        const newDOMNode = render(newNode);
        DOMNode.replaceWith(newDOMNode);
        return newDOMNode;
      };
    }
    return DOMNode => undefined;
  }

  if (oldNode.type !== newNode.type) {
    return DOMNode => {
      const newElementNode = render(newNode);
      DOMNode.replaceWith(newElementNode);
      return newElementNode;
    };
  }

  const patchChildren = diffChildren(oldNode.children, newNode.children);

  return DOMNode => {
    DOMNode = updateAttributes(oldNode.attributes, newNode.attributes, DOMNode);
    DOMNode = updateStyles(oldNode.style, newNode.style, DOMNode);
    patchChildren(DOMNode);
    return DOMNode;
  };
};

export default diff;
