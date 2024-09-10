import { AppRegistry, LogBox } from 'react-native'
import { name as appName } from './app.json'
import { ignore } from './dev'
import App from './src/App'
import './src/screens/i18n'

LogBox.ignoreLogs(ignore)

AppRegistry.registerComponent(appName, () => App)
