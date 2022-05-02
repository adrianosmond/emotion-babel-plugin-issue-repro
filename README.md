# @emotion/babel-plugin issue

This repo attempts to make a minimum reproduction case of an issue in `@emotion/babel-plugin@11.9.2`.

## How to reproduce
- `npm i`
- `npm run test`

At that point you should see that the test fails like so:

```
 FAIL  src/Component.test.jsx
  ● Test suite failed to run

    ReferenceError: fullWidth is not defined

      4 |
      5 | const StyledRoot = styled.div`
    > 6 |   ${fullWidth}
        |     ^
      7 |
      8 |   button {
      9 |     @media (min-width: 768px) {
```

If you remove `@emotion` from the plugins array in `babel.config.js` the test passes.