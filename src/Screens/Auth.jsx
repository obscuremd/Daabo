import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Splash from './Splash'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { auth } from '../../config/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


const Auth = () => {

    const[active, setActive] =useState(0)

    const [fullName,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState()
    const [password,setPassword] = useState('')

    // login function
    const signIn = async ()=>{
      const user = await signInWithEmailAndPassword(auth,
        email,
        password
      )}
    
    // register function
      const signUp = async ()=>{
      const user = await createUserWithEmailAndPassword(auth,
        email,
        password
      )
    }
0
  return (
    <View>
      
      {/* splashscreen */}
        {active === 0 && <Splash setActive={setActive}/>}
        
        {/* register */}
        {active === 1 && <SignUp 
          setActive={setActive} 
          func={signUp}
          setEmail={setEmail}
          setPassword={setPassword}
          />}
        
        {/* login */}
        {active === 2 && <SignIn s
          setActive={setActive} 
          func={signIn} 
          setEmail={setEmail} 
          setPassword={setPassword}
          />}
      
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({})