import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native'
import React,{useEffect, useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { speak } from 'expo-speech';
import * as Speech from 'expo-speech';
// import Voice from '@react-native-voice/voice';

const Test = ({setCurrent}) => {

  // const[isRecording, setIsRecording]=useState(false)
  // const [text, setText]= useState('')

  // const startRecording = async () => {
  //   try {
  //     await Voice.start('en-US'); // Start recording with English (United States) locale
  //     setIsRecording(true);
  //   } catch (error) {
  //     console.error('Error starting recording:', error);
  //   }
  // };
  
  // const stopRecording = async () => {
  //   try {
  //     await Voice.stop(); // Stop recording
  //     setIsRecording(false);
  //   } catch (error) {
  //     console.error('Error stopping recording:', error);
  //   }
  // };

  // Voice.onSpeechResults = (e) => {
  //   setText(e.value[0]); // Update captured speech
  // };
  
  


  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity onPress={isRecording ? stopRecording : startRecording} style={styles.button}>
        <Text style={styles.buttonText}>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
      </TouchableOpacity>
      <Text style={styles.capturedText}>{text}</Text> */}
      <Text onPress={() => setCurrent(5)}>Next</Text>
    </SafeAreaView>
  )
}

export default Test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#6B4EFF',
    alignItems: 'center',
    borderRadius: 9,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  capturedText: {
    marginTop: 20,
    fontSize: 18,
  },
});