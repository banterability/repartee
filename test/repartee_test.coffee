assert = require 'assertive'
{readFileSync} = require 'fs'
repartee = require '../lib'

loadFile = (filename) ->
  readFileSync "#{__dirname}/examples/#{filename}", encoding: 'utf-8'

describe 'repartee', ->
  it 'exists', ->
    assert.expect repartee

  it 'parses posts into metadata & body segments', ->
    {meta, body} = repartee loadFile('basic.md')
    assert.deepEqual {title: 'Sample Post', date: '2014-06-03', tags: 'test'}, meta
    assert.equal "<p>This is a <em>sample</em> post. It’s pretty <strong>great</strong>.</p>\n", body

  describe 'body parsing', ->
    it 'replaces straight quotes with "smart" ones', ->
      {body} = repartee loadFile('typography.md')
      assert.equal "<p>I’d prefer “smart” quotes and apostrophies.</p>\n", body
