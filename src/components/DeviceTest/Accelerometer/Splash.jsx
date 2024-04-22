import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Splash = ({setCurrent, setActive}) => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={{flex:1, width:'full', paddingVertical:20}}>

      <TouchableOpacity style={styles.icon} onPress={()=>setCurrent(0)}>
        <MaterialIcons name="cancel" size={24} color="black"  />
      </TouchableOpacity>

      <View style={{alignItems:'center', justifyContent:'space-between', flex:0.9}}>
        {/* progress bar */}
        <View style={{width:327, height:4, backgroundColor:'#E3E5E5', borderRadius:50}}>
          <View style={{width:'90%', backgroundColor:'#6B4EFF', height:4, borderRadius:50}}/>
        </View>


        <View style={{alignItems:'center'}}>
        <MaterialCommunityIcons name="speedometer" size={54} color="black" />
          <Text style={{fontSize:24, fontWeight:'600'}}>Accelerometer</Text>
          <Text style={{fontSize:15, fontWeight:'400', width:300, textAlign:'center', color:'#868686'}}>Shake your phone up and down, and side to side for 3 seconds.</Text>
        </View>

        <View style={{alignItems:'center', gap:30}}>
          <TouchableOpacity style={{paddingVertical:16, width:327,backgroundColor:'#6B4EFF', alignItems:'center', borderRadius:9}} onPress={()=>setActive(1)}>
            <Text style={{color:'#fff'}}>Test</Text>
          </TouchableOpacity>

          <Text style={{color:'#9A9A9D'}} onPress={()=>navigation.navigate('Dashboard')}>Skip</Text>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    icon:{
        paddingVertical:12
    }
})