import { AppRegistry } from 'react-native';
import Root from './Root';

const app = document.createElement('div');
document.body.appendChild(app);

AppRegistry.registerComponent('newRNBundle', () => Root);
AppRegistry.runApplication('newRNBundle', {
  rootTag: app
})