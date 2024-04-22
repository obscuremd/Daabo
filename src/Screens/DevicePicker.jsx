import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import device from '../../assets/clarity_devices-solid.png'
import { useNavigation } from '@react-navigation/native'

const DevicePicker = () => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center', gap:80}}>

      {/* Device Test */}
      <TouchableOpacity 
        onPress={()=>navigation.navigate('DeviceTest')} 
        style={[styles.box, {borderColor:'#5956E9A3'}]}>
        <Image source={device} style={styles.image}/>
        <Text>Protect This Device</Text>
      </TouchableOpacity>

      {/* Device Test */}
      <TouchableOpacity 
        onPress={()=>navigation.navigate('ProtectAnotherDevice')} 
        style={[styles.box, {borderColor:'#C4C4C4'}]}>
        <Image source={device} style={styles.image}/>
        <Text>Protect This Device</Text>
      </TouchableOpacity>

      {/* button */}

      <TouchableOpacity
        onPress={()=>navigation.navigate('Dashboard')} 
        style={[styles.button]}>
        <Text style={{color:'#fff'}}>Go To Dashboard</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default DevicePicker

const styles = StyleSheet.create({
  box:{
    width:259,
    height:128,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:3,
    borderRadius:12,
  },
  button:{
    width:327,
    height:48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:12,
    backgroundColor:'#6B4EFF',
    marginTop:35
  },
  image: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
})