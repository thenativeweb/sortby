'use strict';

var assert = require('node-assertthat');

var by = require('../lib/by');

suite('by', function () {
  test('sorts as desired.', function (done) {
    var users = [
      {
        firstName: 'Tim',
        lastName: 'Cook'
      }, {
        firstName: 'Steve',
        lastName: 'Jobs'
      }, {
        firstName: 'Tim',
        lastName: 'Berners-Lee'
      }
    ];

    var actual = users.sort(by({ firstName: 1, lastName: -1 }));
    assert.that(actual, is.equalTo([
      {
        firstName: 'Steve',
        lastName: 'Jobs'
      }, {
        firstName: 'Tim',
        lastName: 'Cook'
      }, {
        firstName: 'Tim',
        lastName: 'Berners-Lee'
      }
    ]));

    done();
  });
});
