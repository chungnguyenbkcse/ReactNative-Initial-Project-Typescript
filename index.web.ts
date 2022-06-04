import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import App from './src/App'

console.log(appName)
AppRegistry.registerComponent("App", () => App)

AppRegistry.runApplication("App", {
        initialProps: {},
        rootTag: document.getElementById('app-root'),
})