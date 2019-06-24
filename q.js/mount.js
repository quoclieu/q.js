export default (nodeElement, target) => {
  target.replaceWith(nodeElement);
  return nodeElement;
};
