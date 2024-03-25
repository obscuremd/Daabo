import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import First from '../components/SignUp/First';
import Second from '../components/SignUp/Second';

const SignUp = ({setActive, func, setEmail, setPassword}) => {

    const [step, setStep] = useState(0)

  return (
    <View style={{flex:1}} >
        {/* back */}
        <View style={styles.back}>
            <TouchableOpacity onPress={()=>setActive(0)}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
        </View>

        {step === 0 && <First 
            input={styles.input} 
            button={styles.button} 
            setStep={setStep} 
            buttonText={styles.buttonText}
            setEmail={setEmail}
            />}
        {step === 1 && <Second 
            input={styles.input} 
            button={styles.button} 
            buttonText={styles.buttonText} 
            func={func}
            setPassword={setPassword}
            />}
        
        {/* already have an account */}
        <View style={{flexDirection:'row', alignItems:'center', gap:2, justifyContent:'center', marginTop:48}}>
            <Text style={{fontSize:15, fontWeight:'400', color:'#868686', }}>
                New here? 
            </Text>

            <TouchableOpacity onPress={()=>setActive(2)}>
              <Text style={{color:'#5956E9', fontSize:15, fontWeight:'500'}}>Create an account</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default SignUp

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
        padding:16,
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