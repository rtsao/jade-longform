# jade-longform

[![build status][build-badge]][build-href]
[![coverage status][coverage-badge]][coverage-href]
[![dependencies status][deps-badge]][deps-href]

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

[build-badge]: https://travis-ci.org/rtsao/jade-longform.svg?branch=master
[build-href]: https://travis-ci.org/rtsao/jade-longform
[coverage-badge]: https://coveralls.io/repos/rtsao/jade-longform/badge.svg?branch=master&service=github
[coverage-href]: https://coveralls.io/github/rtsao/jade-longform?branch=master
[deps-badge]: https://david-dm.org/rtsao/jade-longform.svg
[deps-href]: https://david-dm.org/rtsao/jade-longform
