var xstream = require('./index').default;

function noop () {}

class FakeEventTarget {
  constructor() {}

  emit(x) {
    if (typeof this.handler !== 'function') {
      return;
    }
    this.handler.call(void 0, x);
  }

  addEventListener(e, handler, capture) {
    this.event = e;
    this.handler = handler;
    this.capture = capture;
  }

  removeEventListener(e, handler, capture) {
    this.removedEvent = e;
    this.removedCapture = capture;
    this.handler = this.event = this.capture = void 0;
  }

  dispatchEvent(event) {
    return true;
  }
}

module.exports = {
  require: {
    xstream: xstream
  },

  regexRequire: {
    'xstream/extra/(.*)': function (_, extra) {
      return require('./extra/' + extra).default;
    }
  },

  globals: {
    xs: xstream,
    stream: xstream.empty(),
    A: xstream.never(),
    B: xstream.never(),
    setInterval: noop,
    console: {
      log: noop,
      error: noop
    },
    document: new FakeEventTarget(),
    listener: {
      next: noop,
      error: noop,
      complete: noop
    }
  }
}
