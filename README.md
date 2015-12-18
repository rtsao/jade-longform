# jade-longform
Jade preprocessor to automatically wrap paragraphs within plain text blocks in paragraph tags

Before
```jade
div.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.

  Aliquam varius augue eget felis aliquet tincidunt.

  Sed vestibulum leo non enim pellentesque, sit amet sollicitudin urna blandit.
  Morbi lacinia augue porttitor nibh tristique sagittis.

  Cras libero arcu, placerat eu aliquam nec, feugiat quis metus.
```

After
```jade
div
  p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  p Aliquam varius augue eget felis aliquet tincidunt.
  p.
    Sed vestibulum leo non enim pellentesque, sit amet sollicitudin urna blandit.
    Morbi lacinia augue porttitor nibh tristique sagittis.
  p Cras libero arcu, placerat eu aliquam nec, feugiat quis metus.
```
