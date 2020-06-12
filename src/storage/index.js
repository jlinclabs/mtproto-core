const cache = {};

class Storage {
  constructor(prefix, options = {}) {
    this._prefix = prefix;
  }

  setPrefix(prefix) {
    this._prefix = prefix;
  }

  pSet(name, value) {
    const key = `${this._prefix}${name}`;

    this.set(key, value);
  }

  pGetBytes(name) {
    return new Uint8Array(this.pGet(name));
  }

  pGet(name) {
    const key = `${this._prefix}${name}`;

    return this.get(key);
  }

  set(key, value) {
    cache[key] = value
  }

  get(key) {
    if (key in cache) {
      return cache[key];
    }

    return null;
  }
}

module.exports = { Storage };
