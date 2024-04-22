import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';


const Start = ({setCurrent}) => {

    const navigation = useNavigation()

  return (
    <SafeAreaView style={{flex:1, width:'full', paddingVertical:20, gap:167}}>

        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Feather name="chevron-left" size={24} color="black" style={styles.icon}/>
        </TouchableOpacity>

       
        <View style={{alignItems:'center', marginTop:70}}>
          <MaterialIcons name="multitrack-audio" size={50} color="black" />
          <Text style={{fontSize:24, fontWeight:'600'}}>Device Test</Text>
          <Text style={{fontSize:15, fontWeight:'400', width:300, textAlign:'center', color:'#868686'}}>Just follow the instructions to test your device</Text>
        </View>

        <View style={{alignItems:'center', gap:30}}>
          <TouchableOpacity 
            onPress={()=>setCurrent(1)}
            style={{paddingVertical:16, width:327,backgroundColor:'#6B4EFF', alignItems:'center', borderRadius:9}}>
            <Text style={{color:'#fff'}}>Start</Text>
          </TouchableOpacity>

        </View>

    </SafeAreaView>
  )
}

export default Start

const styles = StyleSheet.create({})