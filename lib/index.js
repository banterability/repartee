'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var marked = require('marked');

function parseMetadata(metaBlob) {
  return metaBlob.split('\n').map(function (metaItem) {
    var _metaItem$match = metaItem.match(/(.+?):(.*)/m);

    var _metaItem$match2 = _slicedToArray(_metaItem$match, 3);

    var key = _metaItem$match2[1];
    var value = _metaItem$match2[2];

    return { key: key, value: value };
  }).reduce(function (result, item) {
    var key = item.key;
    var value = item.value;

    result[key] = value.trim();
    return result;
  }, {});
};

function parseBody(bodyBlob) {
  return marked(bodyBlob, { smartypants: true });
}

function parse(post) {
  var splitAt = post.indexOf('\n\n');
  var metaBlob = post.slice(0, splitAt);
  var bodyBlob = post.slice(splitAt + 1);

  return {
    meta: parseMetadata(metaBlob),
    body: parseBody(bodyBlob)
  };
};

module.exports = parse;
