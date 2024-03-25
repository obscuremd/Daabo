import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const First = ({input, button, setStep, buttonText, setEmail}) => {
  return (
      <KeyboardAvoidingView style={{gap:48, marginTop:48}}>
            {/* text */}
            <View >
                <Text style={{fontSize:24, fontWeight:'600'}}>CREATE ACCOUNT</Text>
                <Text style={{fontSize:15, fontWeight:'400', color:'#868686'}}>Glad to welcome you</Text>
            </View>

            {/* full name */}
            <View>
                <Text style={{fontSize:15, fontWeight:'500'}}>Full Name</Text>
                <TextInput style={input}/>
            </View>
            
            {/* email */}
            <View>
                <Text style={{fontSize:15, fontWeight:'500'}}>Email Address</Text>
                <TextInput style={input} onChangeText={(text)=>setEmail(text)} />
            </View>

            {/* submit */}
            <TouchableOpacity style={button} onPress={()=>setStep(1)}>
                <Text style={buttonText}>Next</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
  )
}

export default First

const styles = StyleSheet.create({})