// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var setStyle = function setStyle() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var element = arguments.length > 1 ? arguments[1] : undefined;

  for (var _i = 0, _Object$entries = Object.entries(style); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    element.style[key] = value;
  }

  return element;
};

var setEvents = function setEvents() {
  var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var element = arguments.length > 1 ? arguments[1] : undefined;

  for (var _i2 = 0, _Object$entries2 = Object.entries(events); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        event = _Object$entries2$_i[0],
        callback = _Object$entries2$_i[1];

    element.addEventListener(event, callback);
  }
};

var setChildren = function setChildren() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var element = arguments.length > 1 ? arguments[1] : undefined;
  children.forEach(function (child) {
    var childElement = render(child);
    element.appendChild(childElement);
  });
};

var setAttributes = function setAttributes() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var element = arguments.length > 1 ? arguments[1] : undefined;

  for (var _i3 = 0, _Object$entries3 = Object.entries(attributes); _i3 < _Object$entries3.length; _i3++) {
    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
        key = _Object$entries3$_i[0],
        value = _Object$entries3$_i[1];

    element.setAttribute(key, value);
  }
};

var render = function render(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  var type = node.type,
      attributes = node.attributes,
      children = node.children,
      events = node.events,
      style = node.style;
  var element = document.createElement(type);
  setAttributes(attributes, element);
  setChildren(children, element);
  setEvents(events, element);
  setStyle(style, element);
  return element;
};

var _default = render;
exports.default = _default;
},{}],"mount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(nodeElement, target) {
  target.replaceWith(nodeElement);
  return nodeElement;
};

exports.default = _default;
},{}],"diff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _render = _interopRequireDefault(require("./render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var zip = function zip(xs, ys) {
  var zipped = [];

  for (var i = 0; i < Math.max(xs.length, ys.length); i++) {
    zipped.push([xs[i], ys[i]]);
  }

  return zipped;
};

var updateAttributes = function updateAttributes() {
  var oldAtt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var newAtt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var node = arguments.length > 2 ? arguments[2] : undefined;

  for (var _i = 0, _Object$entries = Object.entries(oldAtt); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    node.setAttribute(key, value);
  }

  for (var _i2 = 0, _Object$entries2 = Object.entries(oldAtt); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 1),
        key = _Object$entries2$_i[0];

    if (!(key in newAtt)) {
      node.removeAttribute(key);
    }
  }

  return node;
};

var diffChildren = function diffChildren() {
  var oldChildren = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var newChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var patches = [];
  oldChildren.forEach(function (oldChild, i) {
    patches.push(diff(oldChild, newChildren[i]));
  });
  var additionalPatches = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var additionalChild = _step.value;
      additionalPatches.push(function (DOMNode) {
        DOMNode.appendChild((0, _render.default)(additionalChild));
        return DOMNode;
      });
    };

    for (var _iterator = newChildren.slice(oldChildren.length)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return function (parent) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = zip(patches, parent.childNodes)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            patch = _step2$value[0],
            child = _step2$value[1];

        patch(child);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    additionalPatches.forEach(function (patch) {
      return patch(parent);
    });
    return parent;
  };
};

var diff = function diff(oldNode, newNode) {
  if (!newNode) {
    return function (DOMNode) {
      DOMNode.remove();
      return undefined;
    };
  }

  if (typeof oldNode === 'string' || typeof newNode === 'string') {
    if (oldNode !== newNode) {
      return function (DOMNode) {
        var newDOMNode = (0, _render.default)(newNode);
        DOMNode.replaceWith(newDOMNode);
        return newDOMNode;
      };
    }

    return function (DOMNode) {
      return undefined;
    };
  }

  if (oldNode.type !== newNode.type) {
    return function (DOMNode) {
      var newElementNode = (0, _render.default)(newNode);
      DOMNode.replaceWith(newElementNode);
      return newElementNode;
    };
  }

  var patchChildren = diffChildren(oldNode.children, newNode.children);
  return function (DOMNode) {
    DOMNode = updateAttributes(oldNode.attributes, newNode.attributes, DOMNode);
    patchChildren(DOMNode);
    return DOMNode;
  };
};

var _default = diff;
exports.default = _default;
},{"./render":"render.js"}],"element-tags.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.p = exports.h3 = exports.h2 = exports.h1 = exports.custom = void 0;

var custom = function custom(element, children) {
  return {
    type: element,
    children: children
  };
};

exports.custom = custom;

var h1 = function h1(text) {
  return {
    type: 'h1',
    children: [text]
  };
};

exports.h1 = h1;

var h2 = function h2(text) {
  return {
    type: 'h2',
    children: [text]
  };
};

exports.h2 = h2;

var h3 = function h3(text) {
  return {
    type: 'h3',
    children: [text]
  };
};

exports.h3 = h3;

var p = function p(text) {
  return {
    type: 'p',
    children: [text]
  };
};

exports.p = p;
},{}],"../components/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementTags = require("../src/element-tags");

var heading = {
  type: 'h1',
  style: {
    'font-size': '60px',
    color: '#bfe38b',
    'text-align': 'center'
  },
  children: ['Q.JS']
};
var square = {
  dragElement: function dragElement(e) {
    var body = document.body;

    if (square.drag) {
      body.style['user-select'] = 'none';
      var squareElement = document.querySelector('.square');
      var x = e.clientX - square.offsetX - squareElement.offsetLeft;
      var y = e.clientY - square.offsetY - squareElement.offsetTop; // if (x + 180 > body.clientWidth) {
      //   x = body.clientWidth - 180;
      // }
      // if (x < 0) {
      //   x = body.clientWidth + 180;
      // }
      // if (y + 40 > body.clientHeight) {
      //   y = body.clientHeight - 40;
      // }
      // if (y < 0) {
      //   y = body.clientHeight + 40;
      // }

      squareElement.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
    }
  },
  type: 'div',
  style: {
    height: '40px',
    width: '180px',
    'background-color': 'red'
  },
  attributes: {
    class: 'square'
  },
  drag: false,
  offsetX: null,
  offsetY: null,
  events: {
    mousedown: function mousedown(e) {
      square.drag = true;
      square.offsetX = e.offsetX;
      square.offsetY = e.offsetY;
      var body = document.body;
      body.addEventListener('mousemove', function (e) {
        return square.dragElement(e);
      });
    },
    mouseup: function mouseup() {
      var body = document.body;
      body.style['user-select'] = 'auto';
      square.drag = false;
      body.removeEventListener('mousemove', function (e) {
        return square.dragElement(e);
      });
    }
  },
  children: ['I dont really work atm']
};
var button = {
  type: 'button',
  attributes: {
    type: 'button'
  },
  style: {
    padding: '20px',
    border: '1px solid black'
  },
  children: ['dont press this'],
  events: {
    click: function click() {
      button.children = ['why'];
    }
  }
};

var textArticle = function textArticle(heading, text) {
  return {
    type: 'section',
    style: {
      width: '400px',
      margin: '20px'
    },
    children: [(0, _elementTags.h3)(heading), (0, _elementTags.p)(text)]
  };
};

var threeColumn = {
  type: 'section',
  style: {
    display: 'flex',
    'justify-content': 'space-between'
  },
  children: [textArticle('JSX vs HTML?', "neither. we're going pure javascript objects. Every component and DOM node will be written as an object. "), textArticle('Component based', 'Just like react and every other framework but a lot less powerful and a lot more messy'), textArticle('why', 'yes')]
};
var _default = {
  type: 'div',
  children: [heading, (0, _elementTags.h2)('a really bad Javascript library for building interfaces'), button, square, // square,
  // square,
  // square,
  (0, _elementTags.h2)('Why would anyone use this'), threeColumn, (0, _elementTags.h2)('Get started'), (0, _elementTags.h2)('Documentation'), (0, _elementTags.h2)('To do')]
};
exports.default = _default;
},{"../src/element-tags":"element-tags.js"}],"../components/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = {
  type: 'div',
  attributes: {
    class: 'container'
  },
  events: {},
  children: [_home.default]
};
var _default = app;
exports.default = _default;
},{"./home":"../components/home.js"}],"script.js":[function(require,module,exports) {
"use strict";

var _render = _interopRequireDefault(require("./render"));

var _mount = _interopRequireDefault(require("./mount"));

var _diff = _interopRequireDefault(require("./diff"));

var _App = _interopRequireDefault(require("../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = (0, _mount.default)((0, _render.default)(_App.default), document.getElementById('app'));
var prevApp = JSON.parse(JSON.stringify(_App.default)); // const diffbtn = document.createElement('button');
// diffbtn.textContent = 'diff me';
// document.body.appendChild(diffbtn);
// diffbtn.addEventListener('click', function() {
//   const patch = diff(prevApp, app);
//   root = patch(root);
//   prevApp = JSON.parse(JSON.stringify(app));
// });

setInterval(function () {
  var patch = (0, _diff.default)(prevApp, _App.default);
  root = patch(root);
  prevApp = JSON.parse(JSON.stringify(_App.default));
}, 100);
},{"./render":"render.js","./mount":"mount.js","./diff":"diff.js","../components/App":"../components/App.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55821" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map