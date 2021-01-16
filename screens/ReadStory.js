import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import db from '../config';
import WriteStory from './WriteStory'

export default class ReadStory extends Component {
  render(){
    return(
      <View style = {{backgroundColor : '#00af91', alignItems : 'center'}}>
        <Text style = {style.appHeading}> Story Hub </Text>
          <Image source = {require('../assets/read.png')} style = {{width : 500, height : 500}}></Image>
          <Text style = {style.statement}> The boy is reading the story which is created by you </Text>
      </View>
    )
  }
}

var style = StyleSheet.create({
  appHeading : {
      color : '#80ffdb',
      backgroundColor : '#6930c3',
      display : 'flex',
      justifyContent : 'center',
      textAlign : 'center', 
      width : '100%',
      height : 57,
      fontFamily : 'bradley hand',
      fontSize : 40,
      marginBottom : 70,
      marginBottom : 30
  },

  statement : {
    color : '#80ffdb',
    backgroundColor : '#6930c3',
    display : 'flex',
    justifyContent : 'center',
    textAlign : 'center', 
    width : '100%',
    height : 57,
    fontFamily : 'american typewriter',
    fontSize : 40,
    marginBottom : 100,
    borderRadius : 30,
    marginTop : 40,
    width : '80%'
  }
})