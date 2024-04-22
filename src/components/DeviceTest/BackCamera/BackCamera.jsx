import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Splash from './Splash'
import Test from './Test'
import { SafeAreaView } from 'react-native-safe-area-context'

const BackCamera = ({setCurrent}) => {

  const [Active, setActive]= useState(0)

  return (
    <SafeAreaView style={{flex:1}}>
      {Active == 0 && <Splash setActive={setActive} setCurrent={setCurrent}/> }
      {Active == 1 && <Test setActive={setActive} setCurrent={setCurrent}/> }
      
    </SafeAreaView>
  )
}

export default BackCamera

const styles = StyleSheet.create({})