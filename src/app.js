import { diff, render, mount } from '../q.js';

import app from '../components/App';

let root = mount(render(app), document.getElementById('app'));
let prevApp = JSON.parse(JSON.stringify(app));

setInterval(() => {
  const patch = diff(prevApp, app);
  root = patch(root);
  prevApp = JSON.parse(JSON.stringify(app));
}, 100);
