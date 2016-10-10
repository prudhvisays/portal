module.exports = function(markup) {
  if (typeof document !== 'undefined') return;

  var jsdom = require('jsdom').jsdom;
  var React = require('react');

  global.document = jsdom(markup || '');
  global.window = document.defaultView;
  global.navigator = {
    userAgent: 'node.js'
  };

  propagateToGlobal(document.defaultView);

  // from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
  function propagateToGlobal (window) {
    for (let key in window) {
      if (!window.hasOwnProperty(key)) continue;
      if (key in global) continue;

      global[key] = window[key];
    }
    global.React = React;
  }

  global.localStorage = (function() {
      var store = {};
      return {
        getItem: function(key) {
          return store[key];
        },
        setItem: function(key, value) {
          store[key] = value.toString();
        },
        removeItem: function(key){
          delete store.key;
        },
        clear: function() {
          store = {};
        }
      };
    })();

};
