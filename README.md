# eslint-plugin-topxel

Topxel's shareable rules and configuration for [ESlint](https://eslint.org/): The pluggable linting utility for JavaScript and JSX

Use it as is or as a foundation for your own custom ESLint configuration.

Think about this plugin as a shareable configuration with dependencies (plugins). This is an aproach to solve this use case: [3458](https://github.com/eslint/eslint/issues/3458) 🤷

&nbsp;

## Installation

Install `eslint` and `eslint-plugin-topxel` either with Yarn or npm:

**With Yarn**

```bash
yarn add --dev eslint eslint-plugin-topxel
```

**With npm**

```bash
npm install --save-dev eslint eslint-plugin-topxel
```

&nbsp;

## Setup

Topxel's shareable ESLint rules are bundled in `eslint-plugin-topxel` package. To enable these rules add a `eslintConfig` property in your `package.json` or create a `.eslintrc` file in the root directory. Although we encourage using the first method to avoid having hidden files in your project. See the [ESLint configuration docs](https://eslint.org/docs/user-guide/configuring) for more details.

```json
{
  "eslintConfig": {
    "plugins": ["topxel"],
    "extends": "plugin:topxel/recommended"
  }
}
```

&nbsp;

## Using the linter in the CLI

You can run ESLint by adding a custom linting script to your `package.json`. Keep in mind that you must provide the specific relative path where your js files are located. See the [ESLint CLI docs](https://eslint.org/docs/user-guide/command-line-interface) for more details.

```json
{
  "scripts": {
    "eslint": "eslint 'example/js/*.js'"
  }
}
```

**Running the script with Yarn**

```bash
yarn run eslint
```

**Running the script with npm**

```bash
npm run eslint
```

&nbsp;

## Using the linter with your favourite code editor

Running the linter in the CLI is great but it doesn't provide instant feedback while you are writing your code. That's why we always encourage our team to extend the code editor with some tools that can help with this task.

Any of the extensions bellow will read your config from `package.json` or `.eslintrc` and start live linting your js and jsx files inside the editor, so no further configuration is needed.

### Atom

Use the `apm` command to install [linter](https://atom.io/packages/linter) and [linter-eslint](https://atom.io/packages/linter-eslint) Atom packages. If the `apm` command is not available in your shell, check that the `Atom Shell Commands` are installed.

```bash
apm install linter linter-eslint
```

### VSCode

1. Run [Install extension](https://code.visualstudio.com/docs/editor/extension-gallery#_install-an-extension) command from [Command Palette](https://code.visualstudio.com/Docs/editor/codebasics#_command-palette).
2. Search and choose `eslint`.

### Sublime Text

Use [Package Control](https://packagecontrol.io/installation) to install the linter plugin.

1. In Sublime Text, bring up the [Command Palette](http://docs.sublimetext.info/en/sublime-text-3/extensibility/command_palette.html) and type `install`. Select `Package Control: Install Package`.
2. When the list of available packages appears, type `linter` and select `SublimeLinter`.
3. Repeat step 1 and when the package list appears again, type `eslint` and select `SublimeLinter-contrib-eslint`.

&nbsp;

## Extending the config

If you want to extend or override some of the rules in this configuration, simply add a `"rules"` key to your config. See the [ESLint Rules](https://eslint.org/docs/rules/) and [ESLint Configuring Rules](https://eslint.org/docs/user-guide/configuring#configuring-rules) for more details.

For example, to override the rule `quotes` from double to single and change identation for spaces to tabs with the `ident` rule:

```json
{
  "eslintConfig": {
    "plugins": "topxel",
    "extends": "plugin:topxel/recommended",
    "rules": {
      "ident": ["error", "tab"],
      "quotes": ["error", "double"]
    }
  }
}
```

&nbsp;

## License

Copyright (c) 2017 [Topxel](https://github.com/topxel) - Licensed under the [MIT License](./LICENSE).
