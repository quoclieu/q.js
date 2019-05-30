import render from './render';

const diffAttributes = (old, new ) => {
  const patches = [];
  for (const [key, value] of Object.entries(old)) {
    patches.push()
  }
}

const 

const diff = (prevNode, newNode) => {
  if (!newNode) {
    return nodeElement => {
      nodeElement.remove();
      return undefined;
    };
  }

  if (prevNode.type !== newNode) {
    return newNodeElement => {
      const newNodeElement = render(newNode);
      newNodeElement.replaceWith();
      return newNodeElement;
    };
  }

  const patchAttributes = diffAttributes(
    prevNode.attributes,
    newNode.attributes
  );
  const patchChildren = diffChildren(prevNode.children, newNode.children);

  return newNodeElement => {};
};

export const diff;