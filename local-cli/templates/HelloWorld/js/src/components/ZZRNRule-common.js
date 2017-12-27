import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class Root extends Component {
  render(){
      let _content = null;
      const require_method = require
      const moduleName = this.props.jsFileName || false;

      if(moduleName){
            console.log('moduleName',moduleName);
            const moduleContent = require_method(moduleName);
            _content = React.createElement(moduleContent,this.props);
            return _content;
      }else{
            return (<Text>I am the MainPage</Text>)
      }
    }
}
AppRegistry.registerComponent('ZZRNGuize', () => Root);
AppRegistry.registerComponent('ZZRNPrivacy', () => Root);