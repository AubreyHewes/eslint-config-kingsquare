# eslint-config-kingsquare

This is the basic eslint config used by Kingsquare BV.

## Implementation

This config has been based on the idea that different tools should have different responsibilities.

- All configuration related to the editor (end of line, indent style, indent size, line length...) should be handled by EditorConfig
- Everything related to _code formatting_ should be handled by Prettier
- The rest (_code quality_) should be handled by ESLint

See for background

- https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/
- https://blog.theodo.com/2019/08/why-you-should-use-eslint-prettier-and-editorconfig-together/

##

This version extends the [`react-app`](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/README.md) standard

To install and use do the following:

```
yarn add eslint-config-kingsquare --dev
```

and add the following eslint configuration:

```json
{
  "extends": "kingsquare"
}
```

That should do it!
