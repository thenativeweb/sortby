'use strict';

var sortBy = require('sort-by');

var by = function (fields) {
  var args = [],
      name;

  for (name in fields) {
    if (fields.hasOwnProperty(name)) {
      args.push(fields[name] === 1 ? name : ('-' + name));
    }
  }

  return sortBy.apply(null, args);
};

module.exports = by;
