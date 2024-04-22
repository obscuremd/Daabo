import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native'
import React,{useEffect, useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { speak } from 'expo-speech';
import * as Speech from 'expo-speech';

const Test = ({setCurrent}) => {

  


  return (
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
      <Text onPress={()=>setCurrent(9)}>Next</Text>
    </SafeAreaView>
  )
}

export default Test

const styles = StyleSheet.create({
  
  text:{
    fontSize:21, 
    fontWeight:600
  },
  input:{
    height:48,
    width: 48,
    borderWidth:2,
    borderRadius:50,
    borderColor:'#6B4EFF',
    textAlign:'center',
  },
  button:{
    paddingVertical:16, 
    width:327,
    backgroundColor:'#6B4EFF', 
    alignItems:'center', 
    borderRadius:9,
    marginTop:200
  }
})