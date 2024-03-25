import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Second = ({input, button, buttonText, func, setPassword}) => {
  return (
      <KeyboardAvoidingView style={{gap:48, marginTop:48}}>
            {/* text */}
            <View>
                <Text style={{fontSize:24, fontWeight:'600'}}>CREATE ACCOUNT</Text>
                <Text style={{fontSize:15, fontWeight:'400', color:'#868686'}}>Glad to welcome you</Text>
            </View>

            {/* Number */}
            <View>
                <Text style={{fontSize:15, fontWeight:'500'}}>Number</Text>
                <TextInput style={input}/>
            </View>
            
            {/* password */}
            <View >
                <Text style={{fontSize:15, fontWeight:'500'}}>Password</Text>
                <TextInput style={input} secureTextEntry={true}/>
            </View>
            
            {/* Confirm password */}
            <View>
                <Text style={{fontSize:15, fontWeight:'500'}}>Confirm Password</Text>
                <TextInput style={input} onChangeText={(password)=>setPassword(password)} secureTextEntry={true} />
            </View>

            {/* submit */}
            <TouchableOpacity style={button} onPress={func}>
                <Text style={buttonText}>Submit</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
  )
}

export default Second

const styles = StyleSheet.create({})