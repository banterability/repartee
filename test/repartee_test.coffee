assert = require 'assertive'
repartee = require '../lib'

SAMPLE_FILE = """
title: Sample Post
date: 2014-06-03
tags: test

This is a *sample* post. It's pretty **great**."""

describe 'repartee', ->
  it 'exists', ->
    assert.expect repartee

  it 'parses posts into metadata & body segments', ->
    {meta, body} = repartee SAMPLE_FILE
    assert.deepEqual {title: 'Sample Post', date: '2014-06-03', tags: 'test'}, meta
    assert.equal "<p>This is a <em>sample</em> post. It’s pretty <strong>great</strong>.</p>\n", body
