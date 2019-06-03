import render from './render';
import mount from './mount';
import diff from './diff';

import app from '../components/App';

let root = mount(render(app), document.getElementById('app'));
let prevApp = JSON.parse(JSON.stringify(app));

// const diffbtn = document.createElement('button');
// diffbtn.textContent = 'diff me';
// document.body.appendChild(diffbtn);
// diffbtn.addEventListener('click', function() {
//   const patch = diff(prevApp, app);
//   root = patch(root);
//   prevApp = JSON.parse(JSON.stringify(app));
// });

setInterval(() => {
  const patch = diff(prevApp, app);
  root = patch(root);
  prevApp = JSON.parse(JSON.stringify(app));
}, 100);
