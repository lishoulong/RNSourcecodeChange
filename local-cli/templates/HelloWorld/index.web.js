import { AppRegistry } from 'react-native';
import Root from './App';

const app = document.createElement('div');
document.body.appendChild(app);

AppRegistry.registerComponent('HelloWorld', () => Root);
AppRegistry.runApplication('HelloWorld', {
  rootTag: app
})