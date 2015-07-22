var marked = require('marked');

function parseMetadata(metaBlob) {
  return metaBlob.split('\n').map(metaItem => {
    let [, key, value] = metaItem.match(/(.+?):(.*)/m);
    return {key, value};
  }).reduce((result, item) => {
    let {key, value} = item;
    result[key] = value.trim();
    return result;
  }, {});
};

function parseBody(bodyBlob) {
  return marked(bodyBlob, {smartypants: true});
}

function parse(post) {
  let splitAt = post.indexOf('\n\n');
  let [metaBlob, bodyBlob] = [
    post.slice(0, splitAt),
    post.slice(splitAt + 1)
  ];
  return {
    meta: parseMetadata(metaBlob),
    body: parseBody(bodyBlob)
  };
};

module.exports = parse;
