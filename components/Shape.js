export default class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  create() {
    return {
      type: 'div',
      attributes: {
        class: 'container'
      },
      style: {
        backgroundColor: 'red',
        height: this.height + 'px',
        width: this.width + 'px'
      }
    };
  }
}
