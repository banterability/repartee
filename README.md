Repartee
========

A Markdown + metadata parser

[![Build Status](https://travis-ci.org/banterability/repartee.svg?branch=master)](https://travis-ci.org/banterability/repartee)

Turn this:

```
title: Just a thought
date: 2014-06-03

I have a *crazy* idea.
```

into this:

```javascript
{
  meta: {
    title: 'Just a thought',
    date: '2014-06-03'
  },
  body: '<p>I have a <em>crazy</em> idea.</p>'
}
```
