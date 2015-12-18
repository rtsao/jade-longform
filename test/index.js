'use strict';

var test = require('tape');
var lex = require('jade-lexer');
var parse = require('jade-parser');
var walk = require('jade-walk');
var gen = require('jade-source-gen');

var transformAst = require('../');

test('basic transform', function t(assert) {

  var source = [
    'div.',
    '  paragraph 1',
    '',
    '  paragraph 2',
    '',
    '',
    '  paragraph 3.a',
    '  paragraph 3.b',
    '',
    '  paragraph 4'
  ].join('\n');

  var processed = transformAst(parse(lex(source)));

  var expected = [
    'div',
    '  p paragraph 1',
    '  p paragraph 2',
    '  p.',
    '    paragraph 3.a',
    '    paragraph 3.b',
    '  p paragraph 4'
  ].join('\n');

  assert.equal(gen(processed), expected, 'matches expected');
  assert.end();

});
