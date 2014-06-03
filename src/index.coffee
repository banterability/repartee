marked = require 'marked'

parseMetadata = (metaBlob) ->
  metadata = {}
  metaBlob.split('\n').forEach (metaItem) ->
    [key, value] = metaItem.split(':')
    metadata[key] = value.trim()
  metadata

parseBody = (bodyBlob) ->
  marked bodyBlob, smartypants: true

parse = (post) ->
  splitAt = post.indexOf '\n\n'
  [metaBlob, bodyBlob] = [post.slice(0, splitAt), post.slice(splitAt + 1)]
  meta = parseMetadata metaBlob
  body = parseBody bodyBlob
  {meta, body}

module.exports = parse
