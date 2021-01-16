import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import db from '../config';

export default class WriteStory extends Component {

    constructor(){
        super();
        this.state = {
            title : '',
            author : '',
            story : '',
        }
    }

    firebaseFunction = () => {
        db.collection('WriteStory').doc('Doc1').update({
            'Author' : this.state.author,
            'Title' : this.state.title,
            'Story' : this.state.story,
            'isButtonPressed' : true
        })
    }

    emptyTextInputFunction = () => {

      if(this.state.title){
        ToastAndroid.show('Your title field text is stored in the database successfully', 
        ToastAndroid.SHORT,
        ToastAndroid.CENTER);
      }else{
          alert('Please fill the title field');
      }

      if(this.state.author){
        ToastAndroid.show('Your author field text is stored in the database successfully', 
        ToastAndroid.SHORT,
        ToastAndroid.CENTER);
      }else{
          alert('Please fill the author field');
      }

      if(this.state.story){
        ToastAndroid.show('Your story field text is stored in the database successfully', 
        ToastAndroid.SHORT,
        ToastAndroid.CENTER);
      }else{
          alert('Please fill the story field');
      }
    }

    
  render(){
    return(
      <View style = {{backgroundColor : '#252525', alignItems : 'center'}}>
          
        <Text style = {style.appHeading}> Story Hub </Text>

        <TextInput placeholder = "Title" onChangeText = {(text) => {
            this.setState({
                title : text
            })
        }} style = {style.TextInput}></TextInput>
        <TextInput placeholder = "Author" onChangeText = {(text) => {
            this.setState({
                author : text
            })
        }} style = {style.TextInput}></TextInput>
        <TextInput placeholder = "Story" onChangeText = {(text) => {
            this.setState({
                story : text
            })
        }} style = {style.TextInput}></TextInput>

        <TouchableOpacity onPress = {() => {this.firebaseFunction(); this.emptyTextInputFunction()}}>
            <Text style = {style.button}> Submit </Text>
        </TouchableOpacity>

        <Image source = {require('../assets/write.png')} style = {{width : 300, height : 300, marginTop : -60, marginBottom : 60}}></Image>
        
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
        height : 50,
        fontFamily : 'bradley hand',
        fontSize : 40
    },

    TextInput : {
        color : '#80ffdb',
        backgroundColor : '#11698e',
        display : 'flex',
        justifyContent : 'center',
        textAlign : 'center', 
        width : '70%',
        height : 45,
        fontFamily : 'american typewriter',
        fontSize : 35,
        marginTop : 50,
        borderTopEndRadius : 50,
        borderBottomStartRadius : 50,
    },

    button : {
        color : '#80ffdb',
        backgroundColor : '#af0069',
        display : 'flex',
        justifyContent : 'center',
        textAlign : 'center', 
        width : '100%',
        height : 50,
        fontFamily : 'courier',
        fontSize : 40,
        borderRadius : 40,
        marginTop : 50,
        marginBottom : 60
    }
})