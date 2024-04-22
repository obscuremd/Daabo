import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native'
import React,{useEffect, useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { speak } from 'expo-speech';
import * as Speech from 'expo-speech';

const Test = ({setCurrent}) => {

  const [present, setPresent] = useState(0)
  
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [text4, setText4] = useState('')


  const [thingToSay, setThingToSay] = useState('');

  useEffect(() => {
    const num = Math.floor(1000 + Math.random() * 9000);
    setThingToSay(num.toString());
  }, []);

  const handleSubmit =()=>{
    const mergedText = text1.toString() + text2.toString() + text3.toString() + text4.toString();

    if (mergedText === thingToSay) {
      alert('correct')
      setCurrent(2)
    } else {
      alert('wrong')
    }
  }

  const Audio =()=>{
    return(
      <View style={{alignItems:'center', gap:30}}>
          <MaterialCommunityIcons name="cast-audio" size={50} color="#D9222A" />
          <Text style={styles.text}>Listen to the numbers</Text>

          <TouchableOpacity style={styles.button} onPress={()=>Speech.speak(thingToSay)}>
            <Text style={{color:'#fff'}}>Play</Text>
          </TouchableOpacity>

          <Text onPress={()=>setPresent(1)}>Next</Text>
      </View>
    )
  }

  const Input =()=>{
    return(
      <View style={{alignItems:'center', gap:50}}>
          <Text style={styles.text}>Type out numbers</Text>

          {/* input */}
          <View style={{flexDirection:'row', gap:20}}>
            
            <TextInput 
              style={styles.input} 
              value={text1} 
              keyboardType='number-pad'
              maxLength={1}
              onChangeText={(value)=>setText1(value)} />
            
            <TextInput 
              style={styles.input} 
              value={text2} 
              keyboardType='number-pad'
              maxLength={1}
              onChangeText={(value)=>setText2(value)} />
            
            <TextInput 
              style={styles.input} 
              value={text3} 
              keyboardType='number-pad'
              maxLength={1}
              onChangeText={(value)=>setText3(value)} />
            
            <TextInput 
              style={styles.input} 
              value={text4} 
              keyboardType='number-pad'
              maxLength={1}
              onChangeText={(value)=>setText4(value)} />
            
          
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{color:'#fff'}}>Submit</Text>
          </TouchableOpacity>

          <Text onPress={()=>setPresent(0)} style={{color:'red'}}>Listen again</Text>
      </View>
    )
  }


  return (
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
      {present == 0 && <Audio/>}
      {present == 1 && <Input/>}
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