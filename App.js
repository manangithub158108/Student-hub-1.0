import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';

export default class App extends Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}

var TabNavigator = createBottomTabNavigator({
  WriteStory : {screen : WriteStory},
  ReadStory : {screen : ReadStory}
},
{
  defaultNavigationOptions : ({navigation}) => ({
    tabBarIcon : ({}) => {
      const routName = navigation.state.routeName;

      if(routName === 'WriteStory'){
        return(
          <Image source = {require('./assets/write1.png')} style = {{width : 30, height : 30}}></Image>
        )
      }

      if(routName === 'ReadStory'){
        return(
          <Image source = {require('./assets/read1.png')} style = {{width : 30, height : 30}}></Image>
        )
      }
    }
  })
});

var AppContainer = createAppContainer(TabNavigator);