export default ({ type, attributes = {}, children = [] } = {}) => {
  return {
    type,
    attributes,
    children
  };
};
