# jade-longform
Jade preprocessor to automatically wrap paragraphs within plain text blocks in paragraph tags

Before
```jade
div.
  paragraph 1

  paragraph 2

  paragraph 3.a
  paragraph 3.b

  paragraph 4
```

After
```jade
div
  p paragraph 1
  p paragraph 2
  p.
    paragraph 3.a
    paragraph 3.b
  p paragraph 4
```
