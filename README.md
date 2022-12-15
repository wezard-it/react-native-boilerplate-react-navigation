# Basic Project Structure

## How to create a new project from this one

1. Install package: ```git clone https://github.com/wekouri/basic-react-native-project.git .```
2. Install node modules ```yarn install```
3. Delete ios and android folder
4. Change name and displayName in app.json
5. Change name in package.json
6. Exexute the ejection with the command ```npx react-native eject```
7. IOS - follow steps config/ios
8. IOS - Install pods ```pod install```
9. ANDROID - follow steps in config/android
10. ANDROID - Clean android ```cd android && ./gradlew clean && cd ..```
11. Remove git reference ```git remote remove origin```
12. Now you're good to go 🚀

### Alternative

- Use react-native-rename ``npx react-native-rename <newName> -b <bundleIdentifier> ``
- IOS - create a new File (and use it as a Bridge)

## Features:

- Navigation init
- Storage with mobx
- Basic folder structure
- Multi language with i18n
- Eslint and autosave
- Reanimated 2 and small example of a worklet

## src Folders structure
- assets: all folders related to UI, like fonts, locales, pngs, svgs and lottie files
- components subdivided in:
  - atomics:
    - atoms: include basic building blocks of the UI interface: labels, input, buttons etc.
    - molecules: groups of UI elements functioning together as a unit.
    - organism: complex UI components made of groups of molecules and/or atoms and/or other organisms.
  - hocs: higher-order components, wrapper functions that take a component as a parameter and return a new component
  - hooks: allow us to use state in React Native functional components.
  - providers: component is responsible to pass state value to consuming components that are descendants of this Provider.
- configs: configuration files.
- screens: main screens.
- utils: methods that will be used across the app.

## Committing recap

- fix: bug fixes, e.g. fix crash due to deprecated method.
- feat: new features, e.g. add new method to the module.
- refactor: code refactor, e.g. migrate from class components to hooks.
- docs: changes into documentation, e.g. add usage example for the module..
- test: adding or updating tests, eg add integration tests using detox.
- chore: tooling changes, e.g. change CI config.