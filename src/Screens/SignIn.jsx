import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const SignIn = ({ setActive ,func, setEmail, setPassword,}) => {

  return (
    <KeyboardAvoidingView style={{flex:1, gap:48}} >
        {/* back */}
        <View style={styles.back}>
            <TouchableOpacity onPress={()=>setActive(0)}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
        </View>

          {/* text */}
           <View>
                <Text style={{fontSize:24, fontWeight:'600'}}>Login</Text>
                <Text style={{fontSize:15, fontWeight:'400', color:'#868686'}}>Glad to see you back!</Text>
            </View>

            {/* email*/}
            <View>
                <Text style={{fontSize:15, fontWeight:'500'}}>Email</Text>
                <TextInput style={styles.input} onChangeText={(text)=>setEmail(text)}/>
            </View>
            
            {/* Password */}
            <View>
                <Text style={{fontSize:15, fontWeight:'500'}}>Password</Text>
                <TextInput style={styles.input} onChangeText={(text)=>setPassword(text)} secureTextEntry={true}/>
            </View>

            {/* submit */}
            <TouchableOpacity style={styles.button} onPress={func}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        
        {/* dont have an account */}
        <View style={{flexDirection:'row', alignItems:'center', gap:2, justifyContent:'center'}}>
            <Text style={{fontSize:15, fontWeight:'400', color:'#868686', }}>
                dont have an account? 
            </Text>

            <TouchableOpacity onPress={()=>setActive(1)}>
              <Text style={{color:'#5956E9', fontSize:15, fontWeight:'500'}}>Register </Text>
            </TouchableOpacity>
        </View>
    
    </KeyboardAvoidingView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  back:{
    width: '100%',
    height: 41,
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    marginTop: '20%'
},
input:{
    width: 327,
    height: 50,
    borderRadius: 9,
    borderWidth: 2 ,
    borderColor:'rgba(107, 78, 255, 0.45)',
    backgroundColor: '#F4F4F8',
    padding:16
},
button:{
    width: 327,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#6B4EFF',
    borderRadius:9,
},
buttonText:{
    color:'#ffff'
}
})