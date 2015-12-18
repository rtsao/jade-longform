'use strict';

var walk = require('jade-walk');
var EOL = require('os').EOL;

module.exports = transformAst;

function transformAst(ast) {
  return walk(ast, function before(node, replace) {
    if (node.type === 'Tag' && node.textOnly) {
      var res = node.block.nodes.reduce(function(acc, node) {
        var parityOdd = acc.pending.length % 2;
        if (node.val === EOL && !parityOdd) {
          // continue the train
          acc.pending.push(node);
        } else if (node.val === '' && parityOdd) {
          // continue the train
          acc.pending.push(node);
        } else {
          // end the train
          if (acc.pending.length >= 3) {
            // create a paragraph from nodes
            var clone = acc.nodes.slice();
            acc.paragraphs.push(clone);
            acc.nodes.length = 0;
            acc.pending.length = 0;

            acc.nodes.push(node);
          } else {
            acc.nodes = acc.nodes.concat(acc.pending).concat(node);
            acc.pending.length = 0;
          }
        }
        return acc;
      }, {paragraphs: [], nodes: [], pending: []});

      // cleanup stragglers
      if (res.nodes.length) {
        res.paragraphs.push(res.nodes);
      }

      var paragraphs = res.paragraphs.map(function(arr, i) {
        var lineNum = node.line + 1 + i;
        return {
          type: 'Tag',
          name: 'p',
          line: node.line + i + 1,
          attrs: [],
          attributeBlocks: [],
          block: {
            type: 'Block',
            nodes: arr.map(function(n, j) {
              n.line = lineNum + j + (arr.length > 1 ? 1 : 0);
              return n;
            })
          }
        };
      });

      replace({
        type: 'Tag',
        name: node.name,
        attrs: node.attrs,
        line: node.line,
        attributeBlocks: node.attributeBlocks,
        block: {
          type: 'Block',
          nodes: paragraphs
        }
      });
    }

  });
}
