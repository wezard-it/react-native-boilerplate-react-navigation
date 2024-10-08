# Wezard React Native Template

<div align="center">

[![javascript][standard-wezard-badge]][standard-wezard]
[![NPM version][npmjs-badge]][npmjs-com]

</div>


This repo contain **Wezard React Native template** with **React Navigation** navigation.

## How to use

```
npx react-native init AppName --template @wezard/react-native-react-navigation-template
```

or

```
npx react-native init AppName --template https://github.com/wezard-it/react-native-boilerplate-react-navigation
```

[npmjs-badge]: https://img.shields.io/npm/v/@wezard/react-native-react-navigation-template.svg?logo=npm
[npmjs-com]: https://www.npmjs.com/package/@wezard/react-native-react-navigation-template
[standard-wezard-badge]: https://img.shields.io/badge/sdk-wezard-F26D50.svg
[standard-wezard]: https://github.com/wezard-it/react-native-boilerplate-react-navigation

## N.B.
Since React Native 0.74, it was added support for modern versions of Yarn. For new projects Yarn 3.6.4 is the default package manager, and for existing projects, you can upgrade to Yarn 3.6.4 by running `yarn set version berry` in the project root. 
Make sure to add the value `nodeLinker: node-modules` inside the file *.yarnrc.yml* file generated with the previous command.

## Usefull Infos

### Scripts
- **`yarn translations:sort`**: this script reorder translation files in an alphabetical order. If you add other languages other *italian* and *english* make sure to add files path in *`script/sort_tranlsations.js`*

