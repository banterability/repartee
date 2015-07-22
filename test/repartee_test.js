var assert = require('assertive'),
    {readFileSync} = require('fs'),
    repartee = require('../lib');

let loadFile = (filename) => {
  return readFileSync(`${__dirname}/examples/${filename}`, {encoding: 'utf-8'});
}

describe('repartee', () => {
  it('exists', () => {
    assert.expect(repartee);
  });

  it('parses posts into metadata & body segments', () => {
    var {meta, body} = repartee(loadFile('basic.md'));
    assert.deepEqual({title: 'Sample Post', date: '2014-06-03', tags: 'test'}, meta);
    assert.equal("<p>This is a <em>sample</em> post. It’s pretty <strong>great</strong>.</p>\n", body);
  })

  it('handles metadata that includes seperator characters', () => {
    var {meta} = repartee(loadFile('metadata.md'));
    assert.equal('Post 2: Electric Boogaloo', meta.title);
    assert.equal('2014-06-03 15:30', meta.publishedAt);
  });

  describe('body parsing', () => {
    it('replaces straight quotes with "smart" ones', () => {
      var {body} = repartee(loadFile('typography.md'));
      assert.equal("<p>I’d prefer “smart” quotes and apostrophies.</p>\n", body);
    });
  });
});
