var marked = require('marked');

function handleSpecialMetadata(metadata){
  if (metadata.date){
    metadata.date = new Date(metadata.date);
  }
  return metadata;
}

function parseMetadata(metaBlob) {
  var metadata = metaBlob.split('\n').map(metaItem => {
    let [, key, value] = metaItem.match(/(.+?):(.*)/m);
    return {key, value};
  }).reduce((result, item) => {
    let {key, value} = item;
    result[key] = value.trim();
    return result;
  }, {});
  return handleSpecialMetadata(metadata);
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
