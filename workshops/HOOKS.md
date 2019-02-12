# React Hooks

The purpose of this workshop is to convert the existing stateful components to use React Hooks.
Follow the steps below to get started and find additional information.

1. Check out this repository first
2. Create a new branch and call it `feature/hooks`
3. Install all required dependencies with `npm install`
4. If using Eslint, install the [React Hooks Eslint toolchain](https://www.npmjs.com/package/eslint-plugin-react-hooks) to make linting hooks easier:

```console
npm i -D eslint-plugin-react-hooks@next
```

Add those rules to [.eslintrc](../.eslintrc):

```json
{
  "plugins": [
    // your other plugins...
    "react-hooks"
  ],
  "rules": {
    // your other rules...
    "react-hooks/rules-of-hooks": "error"
  }
}
```

5. You are now ready to start implementing hooks, take a look at the links below for more info

- https://reactjs.org/docs/hooks-intro.html
- https://reactjs.org/docs/hooks-overview.html
- https://reactjs.org/docs/hooks-state.html
- https://reactjs.org/docs/hooks-effect.html
- https://reactjs.org/docs/hooks-rules.html
- https://reactjs.org/docs/hooks-custom.html
- https://reactjs.org/docs/hooks-reference.html
- https://reactjs.org/docs/hooks-faq.html

## Good places to start

- Take a look at the state and lifecycle hooks in the [Clock component](../src/components/Clock.js) and see how you can transform these to use hooks
