Repartee
========

A Markdown + metadata parser

[![Build Status](https://travis-ci.org/banterability/repartee.svg?branch=master)](https://travis-ci.org/banterability/repartee)

Turn this:

```
title: Heaven and Hell
date: 1999-02-19

> Also, you'll find a pair of safety glasses and some earplugs under your seats. Please feel free to use them.
```

into this:

```javascript
{
  meta: {
    title: 'Heaven and Hell',
    date: 'Thu Feb 18 1999 18:00:00 GMT-0600 (CST)'
  },
  body: '<blockquote>\n<p>Also, you’ll find a pair of safety glasses and some earplugs under your seats. Please feel free to use them.</p>\n</blockquote>\n'
}
```

### Metadata

Some metadata keys have special behavior:

| key    | behavior |
| ------ | -------- |
| `date` | Transforms a string that can be parsed by the `Date` constructor into a native Date. |
